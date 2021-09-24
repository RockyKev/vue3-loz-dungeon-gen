<template>
    <div class="wrapper">
      <h1> Dungeon Generator </h1> 
      <button @click="generateCard(this.card1)">updateData</button>
      <Card v-bind="card1"></Card>
      <!-- <Card></Card> -->
      <p>Dungeon images generated with <a href="https://dungeonmapdoodler.com">https://dungeonmapdoodler.com</a></p>
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
        dungeonName: "A Dark Room",
        description:
          "A 3-room dungeon that used to be a unnatural site but is now a hole in the wall",
        kitType: "A forest grove with a some rumbling",
        kitMix: "Clashed with a ancient ruins with a heavy winds",
        enemies: "beasts",
        uniques: [
          "Room 1: [traps] Laser traps",
          "Room 2: [traps] Rolling rock",
          "Room 3: [puzzles] Maze puzzle.",
        ],
        roomCount: 3,
      },
      dungeonNames: {
        adjective: [
          "narrow",
          "compact",
          "expansive",
          "dense",
          "bloody",
          "smoldering",
          "desolated",
          "neverending",
          "misty",
          "polluted",
          "calm",
          "bustling",
          "abandoned",
          "unspoiled",
          "vibrant",
          "lively",
          "lonely",
          "spoiled",
          "bleak",
          "dread",
          "rundown",
          "ugly",
          "rancid",
          "mystical",
          "horrific",
          "frozen",
          "buried",
          "withered",
        ],
        location: [
          "caverns",
          "vault",
          "lair",
          "chambers",
          "haunt",
          "quarters",
          "crypt",
          "tomb",
          "barrows",
          "cells",
          "labyrinth",
          "maze",
          "delves",
          "halls",
          "depths",
          "mines",
          "cove",
          "town",
          "temple",
          "shrine",
          "prison",
          "fortress",
          "castle",
          "barracks",
          "labyrinth",
          "pyramid",
          "hideout",
          "undersea cave",
          "forest",
          "jungle",
          "cliff",
          "tunnels",
          "palace",
          "vessel",
          "sewer",
          "aqueducts",
        ],
        addedWord: [
          "ascension",
          "plague",
          "pain",
          "sadness",
          "last king",
          "neverending",
          "last empire",
          "infernal beast",
          "voiceless",
          "neglected",
          "unspoken",
        ],
      },
      dungeonDescription: {
        usage: [
          "sacrifice chamber",
          "filthy prison",
          "empty shell",
          "place of prayer",
          "lively space",
          "final resting place",
          "hole in the wall",
          "place of rich natural resources",
          "bustling activity",
          "quiet desolate place",
          "creepy hideout",
          "natural beauty",
          "natural landmark",
          "manmade construct",
          "place run over by humans",
          "place run over by nature",
          "smoldering fire",
          "cold wasteland",
          "dying retreat",
          "cold ashy place",
          "scene of serentity",
          "unnatural site",
          "barren wasteland",
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
        types: [
          "animals",
          "bandits",
          "adventurers",
          "nightmare",
          "monsters",
          "beasts",
          "guards",
        ],
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
          "There's roots wrapped around animal bones.",
          "There a enourmous metal door",
          "A lone skeleton holding a torch",
          "Two skeletons holding each other",
          "There's caskets open and empty",
          "Demonic symbols line the walls",
          "Puddles of water, dead vermin and ash.",
          "An empty animal nest",
          "A chair with a skeleton in the corner",
          "A chair with a tied up skeleton in the center",
          "A desk and chair with a skeleton",
          "A cave-in blocking the area",
          "A altar filled with dust",
          "A altar, clean and unused",
          "A altar and shrine, fresh",
          "There is a lone seat and table",
          "There is a lone pedestal",
          "there is torn tapestry",
          "There is a makeshift bed",
          "There were many makeshift beds",
          "There is animal droppings",
          "A lone bandit lies there in the corner, bleeding",
          "A pile of bodies in the corner",
          "A bag of treasure sits in the middle",
          "A collection of weapons in the corner",
          "A chained skeleton to the wall",
          "A empty treasure chest, recently pilfiered",
          "A empty treasure chest, pilfiered many eons ago",
          "A torch, still lit",
          "A lone rug holding the room",
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
    generateRoomCount: function (card) {
      card["roomCount"] = this.diceRoll(12) + 1;
    },
    generateDungeonName: function (card) {
      const firstWord = this.capitalizeFirstLetter(
        this.dungeonNames.adjective[
          this.diceRoll(this.dungeonNames.adjective.length)
        ]
      );
      const secondWord = this.capitalizeFirstLetter(
        this.dungeonNames.location[
          this.diceRoll(this.dungeonNames.location.length)
        ]
      );

      const thirdWord = this.capitalizeFirstLetter(
        this.dungeonNames.addedWord[
          this.diceRoll(this.dungeonNames.addedWord.length)
        ]
      );

      const patterns = [
        `${firstWord} ${secondWord}`,
        `${firstWord} ${secondWord} of the ${thirdWord}`,
        `${thirdWord} ${secondWord}`,
      ];

      card["dungeonName"] = patterns[this.diceRoll(patterns.length)];
    },
    generateDescription: function (card) {
      const size = `${card.roomCount}-room`;
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
        `${type} with a ${colorTint} hue and a ${flavor}`,
        `${type} with a ${colorTint} hue`,
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
      const enemyType = this.dungeonEnemies.types;
      const enemyChoice1 = enemyType[this.diceRoll(enemyType.length)];
      const enemyChoice2 = enemyType[this.diceRoll(enemyType.length)];

      const scenarios = [
        `${enemyChoice1}`,
        `${enemyChoice1} are working together with ${enemyChoice2}`,        
        `${enemyChoice1} are enslaving ${enemyChoice2}`,                
        `${enemyChoice1} are invading ${enemyChoice2}`,                        
        `${enemyChoice1} are unaware of ${enemyChoice2}`,                                
      ]

      card["enemies"] = scenarios[this.diceRoll[scenarios.length]];

},
    generateUniqueThing: function () {
      const thingTypeArray = Object.keys(this.dungeonUniques);
      const thingType = thingTypeArray[this.diceRoll(thingTypeArray.length)];

      const thingLength = this.diceRoll(this.dungeonUniques[thingType].length);

      const thing = `[${thingType}] ${this.dungeonUniques[thingType][thingLength]}`;

      return thing;
    },
    generateUniqueThings: function (card) {
      card["uniques"] = [];

      for (let count = 1; count <= card.roomCount; count++) {
        card["uniques"].push(`Room ${count}: ${this.generateUniqueThing()}`);
      }
    },
    generateCard: function (card) {
      this.generateRoomCount(card);
      this.generateDungeonName(card);
      this.generateDescription(card);
      this.generateKitType(card);
      this.generateKitMix(card);
      this.generateEnemies(card);
      this.generateUniqueThings(card);
    },
  },
  setup() {
    // mounted
    onMounted(() => {
      console.log("Oh we mounted!");
    });
  },
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

p,
li {
  font-size: 1.1rem;
  line-height: 150%;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
}

.strong {
  font-weight: bold;
}

.wrapper {
  display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d9f2ea;
}


</style>
