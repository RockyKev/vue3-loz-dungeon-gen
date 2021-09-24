<template>
  <div id="app">
    <div class="wrapper">
      <Card v-bind="card1"></Card>
      <!-- <Card></Card> -->
      <button @click="generateCard(this.card1)">updateData</button>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import { onMounted } from "vue";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      card1: {
        dungeonName: "Swiggle",
        description: "description",
        kitType: "blue",
        kitMix: "red",
        enemies: "fire",
        uniques: ["dog", "cat", "spiong", "thing4", "hi5"],
      },
      dungeonNames: {
        firstWord: [
          "narrow",
          "bloody",
          "smoldering",
          "desolated",
          "neverending",
          "misty",
        ],
        secondWord: [
          "caverns",
          "vault",
          "lair",
          "chambers",
          "haunt",
          "quarters",
          "crypt",
          "tomb",
          "burrows",
          "cells",
          "labyrinth",
          "maze",
          "delves",
        ],
      },
      dungeonDescription: {
        roomSize: [
          "tiny (1 room)",
          "tiny (2 room)",
          "tiny (3 room)",
          "small (4 room)",
          "small (5 room)",
          "small (6 room)",
          "medium (7 room)",
          "medium (8 room)",
          "medium (9 room)",
          "large (10 room)",
          "large (11 room)",
          "large (12 room)",
        ],
        usage: [
          "sacrifice chamber",
          "filthy prison",
          "empty shell",
          "place of prayer",
          "lively space",
          "final resting place",
          "hole in the wall",
          "place of rich resources",
          "bustling activity",
          "quiet desolate place",
          "creepy hideout",
          "natural beauty",
          "natural cave",
          "taken over by humans",
          "taken over by nature",
          "smoldering fire",
          "dying retreat",
          "cold ashy place",
          "scene of serentity",
          "unnatural site",
          "wasteland",
        ],
      },
      dungeonKit: {
        colorTint: [
          "Bloody",
          "Purple",
          "Golden",
          "Icy",
          "Firey",
          "Heat",
          "Green",
          "Light blue",
        ],
        type: ["crypt", "cave", "ancient ruins", "forest grove"],
        flavor: [
          "creepy fog",
          "misty fog",
          "light wind",
          "sparkle",
          "heavy winds",
          "firey smoke",
          "some rumbling",
        ],
      },
      dungeonEnemies: {
        types: ["bear", "spider", "bat"],
        miniboss: [],
      },
      dungeonUniques: {
        traps: [
          "Hazard in the middle so you have to cling the edges. ",
          "Hazard on the walls so you have to walk straight",
          "Falling rocks/ceiling",
          "Laser traps",
          "Rolling rock",
          "Race to the end... avoiding damage traps",
          "Race to the end... avoiding damage enemies",
          "Race to the end... avoiding holes/teleporters",
          "Teleport if hit trap",
          "Teleporter trap",
          "Elemental hazard in the whole room",
        ],
        puzzles: [
          "Switch puzzle. 3 switches: unlocks, release monsters, and bomb.",
          "Switch puzzle. 1 switch. Must hit with range weapon.",
          "Switch puzzle. 1 switch. Must kill all enemies.",
          "Switch puzzle. 1 switch. Must hit switch in another room.",
          "Switch puzzle. 1 switch. Must reach in the distance.",
          "Move the platform in place puzzle. ",
          "A switch puzzle. 2 switches: one unlocks and another does chaos",
          "Lights out puzzle with 6 switches. One switch toggles two others.",
          "A Simon puzzle. 4 buttons. Success opens door. Code hidden in [wall, story text, other room, floor]",
          "Hidden button puzzle. Destroy obstacles.",
          "Sokoban puzzle. Move something (rock into hole, block into button, statue into button, plank onto water)",
          "Trigger puzzle. Move something (Light a candle. Move a statue. Switch on the bookshelf.)",
          "Timer puzzle. Hit switch then hit another.",
          "Maze puzzle.",
        ],
        story: [
          "Random treasure chest in the middle of a room",
          "There's roots, bones, and ",
          "theres a enourmous metal door",
          "A skeleton holding a torch lies before it.",
          "there are caskets open and empty",
          "there are symbols all over the room",
          "It's covered in puddles of water, dead vermin and ash.",
          "there is an empty nest",
          "there is a chair with a skeleton",
        ],
      },
    };
  },
  methods: {
    diceRoll(max) {
      return Math.floor(Math.random() * max);
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    generateDungeonName: function (card) {
      const firstWord = this.capitalizeFirstLetter(
        this.dungeonNames.firstWord[
          this.diceRoll(this.dungeonNames.firstWord.length)
        ]
      );
      const secondWord = this.capitalizeFirstLetter(
        this.dungeonNames.secondWord[
          this.diceRoll(this.dungeonNames.secondWord.length)
        ]
      );

      card["dungeonName"] = `${firstWord} ${secondWord}`;
    },
    generateDescription: function (card) {
      const size =
        this.dungeonDescription.roomSize[
          this.diceRoll(this.dungeonDescription.roomSize.length)
        ];
      const usage1 =
        this.dungeonDescription.usage[
          this.diceRoll(this.dungeonDescription.usage.length)
        ];
      const usage2 =
        this.dungeonDescription.usage[
          this.diceRoll(this.dungeonDescription.usage.length)
        ];
      // A tiny (1-3 room) cave that used to be a sacrifice chamber but now is a home for the current inhabitants
      card[
        "description"
      ] = `A ${size} dungeon that used to be a ${usage1} but is now a ${usage2}`;
      //  return "This is a spooky place.";
    },
    generateKitType: function (card) {
      const colorTint =
        this.dungeonKit.colorTint[
          this.diceRoll(this.dungeonKit.colorTint.length)
        ];

      const type =
        this.dungeonKit.type[this.diceRoll(this.dungeonKit.type.length)];

      const flavor =
        this.dungeonKit.flavor[this.diceRoll(this.dungeonKit.flavor.length)];

      const results = [
        `${type} with a ${colorTint} and a ${flavor}`,
        `${type} with a ${colorTint}`,
        `${type} with a ${flavor}`,
        `${type}`,
      ];

      card["kitType"] = `A ${results[this.diceRoll(results.length)]}`;
      // return "cave";
    },
    generateKitMix: function (card) {
      const colorTint =
        this.dungeonKit.colorTint[
          this.diceRoll(this.dungeonKit.colorTint.length)
        ];

      const type =
        this.dungeonKit.type[this.diceRoll(this.dungeonKit.type.length)];

      const flavor =
        this.dungeonKit.flavor[this.diceRoll(this.dungeonKit.flavor.length)];

      const results = [
        `${type} with a ${colorTint} and a ${flavor}`,
        `${type} with a ${colorTint}`,
        `${type} with a ${flavor}`,
        `${type}`,
      ];

      const kitMix = results[this.diceRoll(results.length)];

      card["kitMix"] = `Clashed with a ${kitMix}`;
      // return "clash with ice";
    },
    generateEnemies: function (card) {
      let enemyType = this.dungeonEnemies.types;
      let enemyChoice = enemyType[this.diceRoll(enemyType.length)];

      card["enemies"] = enemyChoice;
      // return "bears";
    },
    generateUniqueThing: function () {
      const thingTypeArray = Object.keys(this.dungeonUniques);
      const thingType = thingTypeArray[this.diceRoll(thingTypeArray.length)];

      const thingLength = this.diceRoll(this.dungeonUniques[thingType].length)

      console.log({thingType})
      console.log({thingLength})

      const thing =
        this.dungeonUniques[thingType][thingLength];
      console.log("generateUniqueThing:", thing);

      return thing;
    },
    generateFiveUniqueThings: function (card) {
      card["uniques"] = [];

      do {
        card["uniques"].push(this.generateUniqueThing());
      } while (card["uniques"].length < 5);

      // card["uniques"] = ["dog", "tree", "spark", "lion", "wardrobe"];
      // return ["dog", "tree", "spark", "lion", "wardrobe"];
    },
    generateCard: function (card) {
      this.generateDungeonName(card);
      this.generateDescription(card);
      this.generateKitType(card);
      this.generateKitMix(card);
      this.generateEnemies(card);
      this.generateFiveUniqueThings(card);

    },
  },
  setup() {
    // mounted
    onMounted(() => {
      console.log("Oh we mounted!");
    });
  },

  // onMounted() {
  // this.card1.dungeonName = this.generateDungeonName();
  // this.card1.description = this.generateDescription();
  // this.card1.kitType = this.generateKitType();
  // this.card1.kitMix = this.generateKitMix();
  // this.card1.description = this.generateEnemies();
  // this.card1.uniques = this.generateFiveUniqueThings();
  // console.log("ive loaded");
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: system-ui;
  margin: 0;
}

p, li {
  font-size: 1.1rem;
  line-height: 150%;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
  /* line-clamp: initial;
  -webkit-line-clamp: initial;
  transition-property: -webkit-line-clamp, line-clamp;
  transition-duration: 300;
  transition-timing-function: ease-out; */
}

.strong {
  font-weight: bold;
}

.wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #d9f2ea;
}

.card {
  background: #fff;
  padding: 24px;
  border-radius: 13px;
  position: relative;
  max-width: 380px;
  margin: 0 12px;
  box-shadow: 0 10px 16px 0 #cde4dd;
}
.card .img-wrap {
  padding-bottom: 85%;
  background-image: url("https://images.unsplash.com/photo-1630236189300-f882d24be40d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY4MjU3NQ&ixlib=rb-1.2.1&q=85");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 30%;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.card ul {
  /* padding: 0; */
  /* list-style-type: none; */
}

.card ul li {
  padding-top: 4px;
}

.clamp-two {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
