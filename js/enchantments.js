/** All code unless stated otherwise is made by github user @Zazcallabah */
/*
 * The extracted data for each enchantment type. Source: Minecraft source, deobfuscated using the Minecraft Coder Pack
 */
/**
 * In the function call which returns to canEnchant mId is a abreviation for material Id
 * and iId is an abreviation for item Id
 */
var _enchantments = [
	{
		name: "unbreaking",
		weight: 5,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 5+(i-1)*8;},
		canEnchant: function(mId,iId) { return iId >= 0 && iId <=14},
		applies: function( other ) { return other !== "unbreaking" },
		id: 0,
		color: "turquoise"
	},
	{
		name: "mending",
		weight: 1,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 5+(i-1)*8;},
		canEnchant: function(mId,iId) { return iId === 1; },
		applies: function( other ) { return other !== "mending" || other !== "infinity" },
		id: 1,
		color: "turquoise"
	},
	{
		name: "efficiency",
		weight: 10,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 1+(i-1)*10;},
		canEnchant: function(mId,iId) { return iId >= 0 && iId <= 4; },
		applies: function( other ) { return !( other === "efficiency" ) },
		id: 2,
		color: "orchid"
	},
	{
		name: "fortune",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 15+(i-1)*9;},
		canEnchant: function(mId,iId) { return iId >= 0 && iId <= 4; },
		applies: function( other ) { return !( other === "fortune" || other === "silktouch" ) },
		id: 3,
		color: "white"
	},
	{
		name: "silktouch",
		weight: 1,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function(){  return 15;},
		canEnchant: function(mId,iId) { return iId >= 0 && iId <= 5; },
		applies: function( other ) { return !( other === "fortune" || other === "silktouch" || other === "looting" || other === "luckofthesea" ) },
		id: 4,
		color: "darkviolet"
	},
	{
		name: "protection",
		weight: 10,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 20;},
		minEnchant: function( i ){  return 1+(i-1)*11; },
		canEnchant: function(mId,iId) { return iId === 0 || iId === 1 || iId >= 0 && iId <= 5; },
		applies: function( other ) { return !( other === "protection" || other === "fireprotection" || other === "blastprotection" ||other === "projectileprotection" ) },
		id: 5,
		color: "blue"
	},
	{
		name: "fireprotection",
		weight: 5,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 12;},
		minEnchant: function( i ){  return 10+(i-1)*8;},
		canEnchant: function(mId,iId) { return iId === 5 || iId === 6 || iId === 7 || iId === 8; },
		applies: function( other ) { return !( other === "protection" || other === "fireprotection" || other === "blastprotection" ||other === "projectileprotection" ) },
		id: 6,
		color: "red"
	},
	{
		name: "blastprotection",
		weight: 2,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 12;},
		minEnchant: function( i ){  return 5+(i-1)*8;},
		canEnchant: function(mId,iId) { return iId === 5 || iId === 6 || iId === 7 || iId === 8; },
		applies: function( other ) { return !( other === "protection" || other === "fireprotection" || other === "blastprotection" ||other === "projectileprotection" ) },
		id: 7,
		color: "black"
	},
	{
		name: "projectileprotection",
		weight: 5,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 15;},
		minEnchant: function( i ){  return 3+(i-1)*6;},
		canEnchant: function(mId,iId) { return iId === 5 || iId === 6 || iId === 7 || iId === 8; },
		applies: function( other ) { return !( other === "protection" || other === "fireprotection" || other === "blastprotection" ||other === "projectileprotection" ) },
		id: 8,
		color: "green"
	},
	{
		name: "aquaaffinity",
		weight: 2,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 41 },
		minEnchant: function(){  return 1},
		canEnchant: function(mId,iId) { return iId === 4; },
		applies: function( other ) { return other !== "aquaaffinity"  },
		id: 9,
		color: "teal"
	},
	{
		name: "respiration",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 30;},
		minEnchant: function( i ){  return i*10;},
		canEnchant: function(mId,iId) { return iId === 4 },
		applies: function( other ) { return  other !== "respiration" },
		id: 10,
		color: "lime"
	},
	{
		name: "thorns",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 30;},
		minEnchant: function( i ){  return i*10;},
		canEnchant: function(mId,iId) { return iId === 4 },
		applies: function( other ) { return  other !== "thorns" },
		id: 10,
		color: "lime"
	},
	/** Swift Sneak
	 * To be implemented since it cannot be obtained through normal enchanting thinking of making a possibility to enable surtain enchantments
	{
		name: "swiftsneak",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 30;},
		minEnchant: function( i ){  return i*10;},
		canEnchant: function(mId,iId) { return iId === 4 },
		applies: function( other ) { return  other !== "swiftssneak" },
		id: 11,
		color: "lime"
	},
	 */
	{
		name: "featherfalling",
		weight: 5,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 10;},
		minEnchant: function( i ){  return 5+(i-1)*6;},
		canEnchant: function(mId,iId) { return iId === 8 },
		applies: function( other ) { return other !== "featherfalling" },
		id: 12,
		color: "grey"
	},
	{
		name: "depthstrider",
		weight: 5,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 10;},
		minEnchant: function( i ){  return 5+(i-1)*6;},
		canEnchant: function(mId,iId) { return iId === 10 || (iId >=0 && iId <=1) },
		applies: function( other ) { return other !==("depthstrider" || "frostwalker") }, //Unsure if this works trying a new way of unincluding enchantments, this would require the least amounts of characters
		id: 13,
		color: "grey"
	},
	{
		name: "frostwalker",
		weight: 5,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 10;},
		minEnchant: function( i ){  return 5+(i-1)*6;},
		canEnchant: function(mId,iId) { return iId === 10 || iId === 1 },
		applies: function( other ) { return other !== "frostwalker" || other !== "depthstrider"},
		id: 14,
		color: "grey"
	},
	{
		name: "soulspeed",
		weight: 5,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 10;},
		minEnchant: function( i ){  return 5+(i-1)*6;},
		canEnchant: function(mId,iId) { return iId === 10 || iId === 1 },
		applies: function( other ) { return other !== "soulspeed"},
		id: 15,
		color: "grey"
	},
	{
		name: "sharpness",
		weight: 10,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 20;},
		minEnchant: function( i ){  return 1+(i-1)*11;},
		canEnchant: function(mId,iId) { return iId === 1 ; },
		applies: function( other ) { return !( other === "baneofarthropods" || other === "smite" || other === "sharpness" ) },
		id: 16,
		color: "yellow" },
	{
		name: "smite",
		weight: 5,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 20;},
		minEnchant: function( i ){  return 5+(i-1)*8;},
		canEnchant: function(mId,iId) { return iId === 1; },
		applies: function( other ) { return !(other === "baneofarthropods" || other === "smite" || other === "sharpness") },
		id: 17,
		color: "sienna"
	},
	{
		name: "baneofarthropods",
		weight: 5,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 20;},
		minEnchant: function( i ){  return 5+(i-1)*8;},
		canEnchant: function(mId,iId) { return iId === 1; },
		applies: function( other ) { return !( other === "baneofarthropods" || other === "smite" || other === "sharpness" ) },
		id: 18,
		color: "olive"
	},
	{
		name: "knockback",
		weight: 5,
		minlevel: 1,
		maxlevel: 2,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 5+(i-1)*20;},
		canEnchant: function(mId,iId) { return iId === 1; },
		applies: function( other ) { return other !== "knockback" },
		id: 19,
		color: "lightblue"
	},
	{
		name: "fireaspect",
		weight: 2,
		minlevel: 1,
		maxlevel: 2,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 10+(i-1)*20;},
		canEnchant: function(mId,iId) { return iId === 1; },
		applies: function( other ) { return other !== "fireaspect" },
		id: 20,
		color: "orange"
	},
	{
		name: "looting",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 20+(i-1)*12;},
		canEnchant: function(mId,iId) { return iId === 1; },
		applies: function( other ) { return other !== "looting" },
		id: 21,
		color: "navy"
	},
	{
		name: "power",
		weight: 10,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 15;},
		minEnchant: function( i ){  return 1+(i-1)*10;},
		canEnchant: function(mId,iId) { return iId === 8; },
		applies: function( other ) { return other !== "power" },
		id: 22,
		color: "yellow"
	},
	{
		name: "flame",
		weight: 2,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function( i ){ return 50;},
		minEnchant: function( i ){  return 20;},
		canEnchant: function(mId,iId) { return iId === 8; },
		applies: function( other ) { return other !== "flame" },
		id: 23,
		color: "orange"
	},
	{
		name: "punch",
		weight: 2,
		minlevel: 1,
		maxlevel: 2,
		maxEnchant: function( i ){ return this.minEnchant(i) + 25;},
		minEnchant: function( i ){  return 12+(i-1)*20;},
		canEnchant: function(mId,iId) { return iId === 8; },
		applies: function( other ) { return other !== "punch" },
		id: 24,
		color: "lightblue"
	},
	{
		name: "infinity",
		weight: 1,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function( i ){ return 50;},
		minEnchant: function( i ){  return 20;},
		canEnchant: function(mId,iId) { return iId === 8; },
		applies: function( other ) { return other !== "infinity" },
		id: 25,
		color: "pink"
	}
];
