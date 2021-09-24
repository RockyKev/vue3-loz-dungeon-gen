(function(e){function n(n){for(var o,r,c=n[0],s=n[1],l=n[2],d=0,h=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(n);while(h.length)h.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,c=1;c<t.length;c++){var s=t[c];0!==i[s]&&(o=!1)}o&&(a.splice(n--,1),e=r(r.s=t[0]))}return e}var o={},i={app:0},a=[];function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/vue3-loz-dungeon-gen/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var u=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1a00":function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle10.9ba23861.png"},"36cd":function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle12.1a15cc97.png"},4471:function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle6.fa490139.png"},"51eb":function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle1.926a59bf.png"},"534b":function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle9.249d96ea.png"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23"),i={class:"wrapper"},a=Object(o["d"])("h1",null," Dungeon Generator ",-1),r=Object(o["d"])("p",null,[Object(o["e"])("Dungeon images generated with "),Object(o["d"])("a",{href:"https://dungeonmapdoodler.com"},"https://dungeonmapdoodler.com")],-1);function c(e,n,t,c,s,l){var u=this,d=Object(o["o"])("Card");return Object(o["k"])(),Object(o["c"])("div",i,[a,Object(o["d"])("button",{onClick:n[0]||(n[0]=function(e){return l.generateCard(u.card1)})},"updateData"),Object(o["f"])(d,Object(o["h"])(Object(o["g"])(s.card1)),null,16),r])}t("fb6a"),t("99af"),t("a4d3"),t("e01a"),t("b64b");Object(o["m"])("data-v-5da42b80");var s={class:"card"},l={class:"content"},u=Object(o["d"])("span",{class:"strong"},"Kit Type: ",-1),d=Object(o["d"])("span",{class:"strong"},"Kit Mix: ",-1),h=Object(o["d"])("span",{class:"strong"},"Enemies: ",-1);function p(e,n,i,a,r,c){return Object(o["k"])(),Object(o["c"])("div",s,[Object(o["d"])("h2",null,Object(o["p"])(i.dungeonName),1),Object(o["d"])("div",l,[Object(o["d"])("p",null,Object(o["p"])(i.description),1),Object(o["d"])("p",null,[u,Object(o["e"])(" "+Object(o["p"])(i.kitType),1)]),Object(o["d"])("p",null,[d,Object(o["e"])(" "+Object(o["p"])(i.kitMix),1)]),Object(o["d"])("p",null,[h,Object(o["e"])(" "+Object(o["p"])(i.enemies),1)]),Object(o["d"])("ul",null,[(Object(o["k"])(!0),Object(o["c"])(o["a"],null,Object(o["n"])(i.uniques,(function(e,n){return Object(o["k"])(),Object(o["c"])("li",{key:n},Object(o["p"])(e),1)})),128))])]),Object(o["d"])("div",{class:"img-wrap",style:Object(o["i"])({backgroundImage:"url("+t("ce6e")("./DungeonMapDoodle"+i.roomCount+".png")+")"})},null,4)])}Object(o["l"])();var g={name:"HelloWorld",props:["dungeonName","description","kitType","kitMix","enemies","uniques","roomCount"],methods:{}};t("603d");g.render=p,g.__scopeId="data-v-5da42b80";var m=g,b={name:"App",components:{Card:m},data:function(){return{card1:{dungeonName:"A Dark Room",description:"A 3-room dungeon that used to be a unnatural site but is now a hole in the wall",kitType:"A forest grove with a some rumbling",kitMix:"Clashed with a ancient ruins with a heavy winds",enemies:"beasts",uniques:["Room 1: [traps] Laser traps","Room 2: [traps] Rolling rock","Room 3: [puzzles] Maze puzzle."],roomCount:3},dungeonNames:{adjective:["narrow","compact","expansive","dense","bloody","smoldering","desolated","neverending","misty","polluted","calm","bustling","abandoned","unspoiled","vibrant","lively","lonely","spoiled","bleak","dread","rundown","ugly","rancid","mystical","horrific","frozen","buried","withered"],location:["caverns","vault","lair","chambers","haunt","quarters","crypt","tomb","barrows","cells","labyrinth","maze","delves","halls","depths","mines","cove","town","temple","shrine","prison","fortress","castle","barracks","labyrinth","pyramid","hideout","undersea cave","forest","jungle","cliff","tunnels","palace","vessel","sewer","aqueducts"],addedWord:["ascension","plague","pain","sadness","last king","neverending","last empire","infernal beast","voiceless","neglected","unspoken"]},dungeonDescription:{usage:["sacrifice chamber","filthy prison","empty shell","place of prayer","lively space","final resting place","hole in the wall","place of rich natural resources","bustling activity","quiet desolate place","creepy hideout","natural beauty","natural landmark","manmade construct","place run over by humans","place run over by nature","smoldering fire","cold wasteland","dying retreat","cold ashy place","scene of serentity","unnatural site","barren wasteland"]},dungeonKit:{colorTint:["Bloody","Purple","Golden","Icy","Firey","Heat","Green","Light blue"],type:["crypt","cave","ancient ruins","forest grove"],flavor:["creepy fog","misty fog","light wind","sparkle","heavy winds","firey smoke","some rumbling"]},dungeonEnemies:{types:["animals","bandits","adventurers","nightmare","monsters","beasts","guards"],miniboss:[]},dungeonUniques:{traps:["Hazard in the middle so you have to cling the edges. ","Hazard on the walls so you have to walk straight","Falling rocks/ceiling","Laser traps","Rolling rock","Race to the end... avoiding damage traps","Race to the end... avoiding damage enemies","Race to the end... avoiding holes/teleporters","Teleport if hit trap","Teleporter trap","Elemental hazard in the whole room"],puzzles:["Switch puzzle. 3 switches: unlocks, release monsters, and bomb.","Switch puzzle. 1 switch. Must hit with range weapon.","Switch puzzle. 1 switch. Must kill all enemies.","Switch puzzle. 1 switch. Must hit switch in another room.","Switch puzzle. 1 switch. Must reach in the distance.","Move the platform in place puzzle. ","A switch puzzle. 2 switches: one unlocks and another does chaos","Lights out puzzle with 6 switches. One switch toggles two others.","A Simon puzzle. 4 buttons. Success opens door. Code hidden in [wall, story text, other room, floor]","Hidden button puzzle. Destroy obstacles.","Sokoban puzzle. Move something (rock into hole, block into button, statue into button, plank onto water)","Trigger puzzle. Move something (Light a candle. Move a statue. Switch on the bookshelf.)","Timer puzzle. Hit switch then hit another.","Maze puzzle."],story:["Random treasure chest in the middle of a room","There's roots wrapped around animal bones.","There a enourmous metal door","A lone skeleton holding a torch","Two skeletons holding each other","There's caskets open and empty","Demonic symbols line the walls","Puddles of water, dead vermin and ash.","An empty animal nest","A chair with a skeleton in the corner","A chair with a tied up skeleton in the center","A desk and chair with a skeleton","A cave-in blocking the area","A altar filled with dust","A altar, clean and unused","A altar and shrine, fresh","There is a lone seat and table","There is a lone pedestal","there is torn tapestry","There is a makeshift bed","There were many makeshift beds","There is animal droppings","A lone bandit lies there in the corner, bleeding","A pile of bodies in the corner","A bag of treasure sits in the middle","A collection of weapons in the corner","A chained skeleton to the wall","A empty treasure chest, recently pilfiered","A empty treasure chest, pilfiered many eons ago","A torch, still lit","A lone rug holding the room"]}}},methods:{diceRoll:function(e){return Math.floor(Math.random()*e)},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},generateRoomCount:function(e){e["roomCount"]=this.diceRoll(12)+1},generateDungeonName:function(e){var n=this.capitalizeFirstLetter(this.dungeonNames.adjective[this.diceRoll(this.dungeonNames.adjective.length)]),t=this.capitalizeFirstLetter(this.dungeonNames.location[this.diceRoll(this.dungeonNames.location.length)]),o=this.capitalizeFirstLetter(this.dungeonNames.addedWord[this.diceRoll(this.dungeonNames.addedWord.length)]),i=["".concat(n," ").concat(t),"".concat(n," ").concat(t," of the ").concat(o),"".concat(o," ").concat(t)];e["dungeonName"]=i[this.diceRoll(i.length)]},generateDescription:function(e){var n="".concat(e.roomCount,"-room"),t=this.dungeonDescription.usage[this.diceRoll(this.dungeonDescription.usage.length)],o=this.dungeonDescription.usage[this.diceRoll(this.dungeonDescription.usage.length)];e["description"]="A ".concat(n," dungeon that used to be a ").concat(t," but is now a ").concat(o)},generateKitType:function(e){var n=this.dungeonKit.colorTint[this.diceRoll(this.dungeonKit.colorTint.length)],t=this.dungeonKit.type[this.diceRoll(this.dungeonKit.type.length)],o=this.dungeonKit.flavor[this.diceRoll(this.dungeonKit.flavor.length)],i=["".concat(t," with a ").concat(n," hue and a ").concat(o),"".concat(t," with a ").concat(n," hue"),"".concat(t," with a ").concat(o),"".concat(t)];e["kitType"]="A ".concat(i[this.diceRoll(i.length)])},generateKitMix:function(e){var n=this.dungeonKit.colorTint[this.diceRoll(this.dungeonKit.colorTint.length)],t=this.dungeonKit.type[this.diceRoll(this.dungeonKit.type.length)],o=this.dungeonKit.flavor[this.diceRoll(this.dungeonKit.flavor.length)],i=["".concat(t," with a ").concat(n," and a ").concat(o),"".concat(t," with a ").concat(n),"".concat(t," with a ").concat(o),"".concat(t)],a=i[this.diceRoll(i.length)];e["kitMix"]="Clashed with a ".concat(a)},generateEnemies:function(e){var n=this.dungeonEnemies.types,t=n[this.diceRoll(n.length)],o=n[this.diceRoll(n.length)],i=["".concat(t),"".concat(t," are working together with ").concat(o),"".concat(t," are enslaving ").concat(o),"".concat(t," are invading ").concat(o),"".concat(t," are unaware of ").concat(o)];e["enemies"]=i[this.diceRoll[i.length]]},generateUniqueThing:function(){var e=Object.keys(this.dungeonUniques),n=e[this.diceRoll(e.length)],t=this.diceRoll(this.dungeonUniques[n].length),o="[".concat(n,"] ").concat(this.dungeonUniques[n][t]);return o},generateUniqueThings:function(e){e["uniques"]=[];for(var n=1;n<=e.roomCount;n++)e["uniques"].push("Room ".concat(n,": ").concat(this.generateUniqueThing()))},generateCard:function(e){this.generateRoomCount(e),this.generateDungeonName(e),this.generateDescription(e),this.generateKitType(e),this.generateKitMix(e),this.generateEnemies(e),this.generateUniqueThings(e)}},setup:function(){Object(o["j"])((function(){console.log("Oh we mounted!")}))}};t("6753");b.render=c;var f=b;Object(o["b"])(f).mount("#app")},5967:function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle2.5892f201.png"},5978:function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle11.0ad9503d.png"},"603d":function(e,n,t){"use strict";t("97fe")},"66a2":function(e,n,t){},6753:function(e,n,t){"use strict";t("66a2")},"751b":function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle4.78f1318c.png"},"81b2":function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle7.e65fbb41.png"},"97fe":function(e,n,t){},b01d:function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle5.f7f38789.png"},cc70:function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle8.50be9150.png"},ce6e:function(e,n,t){var o={"./DungeonMapDoodle1.png":"51eb","./DungeonMapDoodle10.png":"1a00","./DungeonMapDoodle11.png":"5978","./DungeonMapDoodle12.png":"36cd","./DungeonMapDoodle2.png":"5967","./DungeonMapDoodle3.png":"d968","./DungeonMapDoodle4.png":"751b","./DungeonMapDoodle5.png":"b01d","./DungeonMapDoodle6.png":"4471","./DungeonMapDoodle7.png":"81b2","./DungeonMapDoodle8.png":"cc70","./DungeonMapDoodle9.png":"534b"};function i(e){var n=a(e);return t(n)}function a(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id="ce6e"},d968:function(e,n,t){e.exports=t.p+"img/DungeonMapDoodle3.c0542035.png"}});
//# sourceMappingURL=app.04b11711.js.map