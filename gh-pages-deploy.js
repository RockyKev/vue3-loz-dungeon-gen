// Via https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg

/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
const rmrf = require("rimraf");

let exitCode = 0;

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    // console.log({configFilePath})
    // console.log({originPublicPath})
    // console.log({fileOpts})

    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await rmrf(folderName, { glob: false }, () => {
      console.log("Deleted build folder " + folderName);
    });
    console.log("Successfully deployed");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    exitCode = 1;
  } finally {
    // await fs.promises.writeFile(configFilePath, originPublicPath, fileOpts);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  }

  process.exit(exitCode);
})();
