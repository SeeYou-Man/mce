/** All code unless stated otherwise is made by github user @SeeYou-Man original structure made by @Zazcallabah */
/*
 * The extracted data for each enchantment type. Source: Minecraft source, deobfuscated using the Minecraft Coder Pack
 */
/**
 * In the function call which returns to canEnchant mId is a abreviation for material Id
 * and iId is an abreviation for item Id
 */
var _enchantments = [
	{
		name: "protection",
		weight: 10,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 11;},
		minEnchant: function( i ){  return 1+(i-1)*11; },
		canEnchant: function(iId) { if (iId === 0 || iId === 1 || (iId >= 7 && iId <= 10)){return true}else {return false};},
		applies: function( other ) { return other !==("protection"||"projectileprotection"||"blastprotection"||"fireprotection") },
		id: 0,
		color: "blue"
	},
	{
		name: "fireprotection",
		weight: 5,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 8;},
		minEnchant: function( i ){  return 10+(i-1)*8;},
		canEnchant: function(iId) { if (iId === 0 || iId === 1 || (iId >= 7 && iId <= 10)){return true}else {return false};},
		applies: function( other ) { return other !==("fireprotection"||"protection"||"projectileprotection"||"blastprotection") },
		id: 1,
		color: "red"
	},
	{
		name: "blastprotection",
		weight: 2,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 8;},
		minEnchant: function( i ){  return 5+(i-1)*8;},
		canEnchant: function(iId) { if (iId === 0 || iId === 1 || (iId >= 7 && iId <= 10)){return true}else {return false};},
		applies: function( other ) { return other !==("blastprotection"||"fireprotection"||"protection"||"projectileprotection") },
		id: 2,
		color: "black"
	},
	{
		name: "projectileprotection",
		weight: 5,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 6;},
		minEnchant: function( i ){  return 3+(i-1)*6;},
		canEnchant: function(iId) { if (iId === 0 || iId === 1 || (iId >= 7 && iId <= 10)){return true}else {return false};},
		applies: function( other ) { return other !==("projectileprotection"||"blastprotection"||"fireprotection"||"protection") },
		id: 3,
		color: "green"
	},
	{
		name: "featherfalling",
		weight: 5,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function( i ){ return this.minEnchant(i) + 6;},
		minEnchant: function( i ){  return 5+(i-1)*6;},
		canEnchant: function(iId) { if (iId === 0 || iId === 1 || iId === 10){return true}else {return false};},
		applies: function( other ) { return other !== "featherfalling" },
		id: 4,
		color: "grey"
	},
	{
		name: "respiration",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 30;},
		minEnchant: function( i ){  return i*10;},
		canEnchant: function(iId) { if(iId === 0 || iId === 1 || iId === 7){return true}else {return false};},
		applies: function( other ) { return  other !== "respiration" },
		id: 5,
		color: "lime"
	},
	{
		name: "aquaaffinity",
		weight: 2,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 41 },
		minEnchant: function(){  return 1},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 7){return true}else {return false};},
		applies: function( other ) { return other !== "aquaaffinity"  },
		id: 6,
		color: "teal"
	},
	{
		name: "thorns",
		weight: 1,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return (this.minEnchant(i)/2) + 55;},
		minEnchant: function( i ){  return ((i-1)*20)+10;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 8){return true}else {return false};},
		applies: function( other ) { return  other !== "thorns" },
		id: 7,
		color: "lime"
	},
	{
		name: "depthstrider",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 15;},
		minEnchant: function( i ){  return ((i-1)*10)+10;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 10){return true}else {return false};},
		applies: function( other ) { return other !==("depthstrider" || "frostwalker") }, //Unsure if this works trying a new way of unincluding enchantments, this would require the least amounts of characters
		id: 8,
		color: "grey"
	},
	{
		name: "frostwalker",
		weight: 2,
		minlevel: 1,
		maxlevel: 2,
		maxEnchant: function( i ){ return this.minEnchant(i) + 15;},
		minEnchant: function( i ){  return ((i-1)*10)+10;},
		canEnchant: function(iId) {if(iId === 1){return true}else {return false};},
		applies: function( other ) { return other !==("frostwalker"||"depthstrider")},
		id: 9,
		color: "grey"
	},
	{
		name: "curseofbinding",
		weight: 1,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 50;},
		minEnchant: function(){  return 25;},
		canEnchant: function(iId) {if(iId === 1){return true}else {return false};},
		applies: function( other ) { return other !== "curseofbinding" },
		id: 10,
		color: "pink"
	},
	/** 
	 * Swift Sneak and Soulspeed
	 * To be implemented since it cannot be obtained through normal enchanting thinking of making a possibility to enable surtain enchantments
	{
		name: "soulspeed",
		weight: 1,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 15;},
		minEnchant: function( i ){  return ((i-1)*10)+10;},
		canEnchant: function(iId) { return iId === None }, // Can't be applied through fishing or enchanting table, will implement loot chests probability later on 
		applies: function( other ) { return other !== "soulspeed"},
		id: 11,
		color: "grey"
	},
	
	{
		name: "swiftsneak",
		weight: 1,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return ((i-1)*25)+25;},
		canEnchant: function(iId) { return iId === None }, // Can't be applied through fishing or enchanting table, will implement loot chests probability later on
		applies: function( other ) { return  other !== "swiftssneak" },
		id: 12,
		color: "lime"
	},
	 */
	{
		name: "sharpness",
		weight: 10,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 20;},
		minEnchant: function( i ){  return 1+(i-1)*11;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 11){return true}else {return false};},
		applies: function( other ) { return other !== ("sharpness"||"smite"||"baneofarthropods") },
		id: 13,
		color: "yellow"
	},
	{
		name: "smite",
		weight: 5,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 20;},
		minEnchant: function( i ){  return 5+(i-1)*8;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 11){return true}else {return false};},
		applies: function( other ) { return other !== ("smite"||"baneofarthropods"||"sharpness") },
		id: 14,
		color: "sienna"
	},
	{
		name: "baneofarthropods",
		weight: 5,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 20;},
		minEnchant: function( i ){  return 5+(i-1)*8;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 11){return true}else {return false};},
		applies: function( other ) { return other !== ("baneofarthropods"||"smite"||"sharpness") },
		id: 15,
		color: "olive"
	},
	{
		name: "knockback",
		weight: 5,
		minlevel: 1,
		maxlevel: 2,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 5+(i-1)*20;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 11){return true}else {return false};},
		applies: function( other ) { return other !== "knockback" },
		id: 16,
		color: "lightblue"
	},
	{
		name: "fireaspect",
		weight: 2,
		minlevel: 1,
		maxlevel: 2,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 10+(i-1)*20;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 11){return true}else {return false};},
		applies: function( other ) { return other !== "fireaspect" },
		id: 17,
		color: "orange"
	},
	{
		name: "looting",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 15+(i-1)*9;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 11){return true}else {return false};},
		applies: function( other ) { return other !== ("looting"||"silktouch") },
		id: 18,
		color: "navy"
	},
	{
		name: "sweepingedge",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 15;},
		minEnchant: function( i ){  return 5+(i-1)*9;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 11){return true}else {return false};},
		applies: function( other ) { return other !== "sweepingedge" },
		id: 19,
		color: "pink"
	},
	/** Since Cleaving is not out yet and we don't know more about it I cannot implement it futher as of 1.20.2
	{
		name: "cleaving",
		weight: 0,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return 1;}, // Unsure fix later
		minEnchant: function( i ){  return 1;}, // Unsure fix later
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 3){return true}else {return false};}, // This can be wrong need to check it up when cleaving is releasded
		applies: function( other ) { return other !== "cleaving" },
		id: 20,
		color: "pink"
	},
	*/
	
	{
		name: "power",
		weight: 10,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 15;},
		minEnchant: function( i ){  return 1+(i-1)*10;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 12){return true}else {return false};},
		applies: function( other ) { return other !== "power" },
		id: 21,
		color: "yellow"
	},
	{
		name: "punch",
		weight: 2,
		minlevel: 1,
		maxlevel: 2,
		maxEnchant: function( i ){ return this.minEnchant(i) + 25;},
		minEnchant: function( i ){  return 12+(i-1)*20;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 12){return true}else {return false};},
		applies: function( other ) { return other !== "punch" },
		id: 22,
		color: "lightblue"
	},
	{
		name: "flame",
		weight: 2,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 50;},
		minEnchant: function(){  return 20;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 12){return true}else {return false};},
		applies: function( other ) { return other !== "flame" },
		id: 23,
		color: "orange"
	},
	{
		name: "infinity",
		weight: 1,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 50;},
		minEnchant: function(){  return 20;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 12){return true}else {return false};},
		applies: function( other ) { return other !== ("infinity"||"mending") },
		id: 24,
		color: "pink"
	},
	{
		name: "efficiency",
		weight: 10,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 1+(i-1)*10;},
		canEnchant: function(iId) {if(iId >= 0 && iId <= 5){return true}else {return false};},
		applies: function( other ) { return !( other === "efficiency" ) },
		id: 25,
		color: "orchid"
	},
	{
		name: "fortune",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 15+(i-1)*9;},
		canEnchant: function(iId) {if(iId >= 0 && iId <= 5){return true}else {return false};},
		applies: function( other ) { return other !== "fortune" || other !== "silktouch" },
		id: 26,
		color: "white"
	},
	{
		name: "silktouch",
		weight: 1,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 65;},
		minEnchant: function(){  return 15;},
		canEnchant: function(iId) {if(iId >= 0 && iId <= 5){return true}else {return false};},
		applies: function( other ) { return other !== ("silktouch"||"fortune"||"looting"||"luckofthesea") },//This might work !( other === "fortune" || other === "silktouch" || other === "looting" || other === "luckofthesea" )
		id: 27,
		color: "darkviolet"
	},
	{
		name: "luckofthesea",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 15+(i-1)*9;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 6){return true}else {return false};},
		applies: function( other ) { return other !== ("luckofthesea"||"silktouch") },
		id: 28,
		color: "pink"
	},
	{
		name: "lure",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 15+(i-1)*9;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 6){return true}else {return false};},
		applies: function( other ) { return other !== "lure" },
		id: 29,
		color: "pink"
	},
	{
		name: "unbreaking",
		weight: 5,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function( i ){ return this.minEnchant(i) + 50;},
		minEnchant: function( i ){  return 5+(i-1)*8;},
		canEnchant: function(iId) { if(iId >= 0 && iId <=14){return true}else {return false};},
		applies: function( other ) { return other !== "unbreaking" },
		id: 30,
		color: "turquoise"
	},
	{
		name: "mending",
		weight: 2,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 75;},
		minEnchant: function(){  return 25;},
		canEnchant: function(iId) { if (iId === 1){return true}else {return false};},
		applies: function( other ) { return other !== ("mending"||"infinity") }, //Note for me too remember multiple conflicts can be done this way (other !== "mending" || other !== "infinity") incase my way does not work
		id: 31,
		color: "turquoise"
	},
	{
		name: "curseofvanishing",
		weight: 1,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 50;},
		minEnchant: function(){  return 25;},
		canEnchant: function(iId) { if (iId === 1){return true}else {return false};},
		applies: function( other ) { return other !== "curseofvanishing" },
		id: 32,
		color: "pink"
	},
	{
		name: "channeling",
		weight: 1,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 50;},
		minEnchant: function(){  return 25;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 14){return true}else {return false};},
		applies: function( other ) { return other !== ("channeling"||"riptide") },
		id: 33,
		color: "red"
	},
	{
		name: "impaling",
		weight: 2,
		minlevel: 1,
		maxlevel: 5,
		maxEnchant: function( i ){ return this.minEnchant(i)+20;},
		minEnchant: function( i ){  return 1+(i-1)*8;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 14){return true}else {return false};},
		applies: function( other ) { return other !== "impaling" },
		id: 34,
		color: "pink"
	},
	{
		name: "loyalty",
		weight: 5,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function(){ return 50;},
		minEnchant: function( i ){  return 12+(i-1)*7;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 14){return true}else {return false};},
		applies: function( other ) { return other !== ("loyalty"||"riptide") },
		id: 35,
		color: "pink"
	},
	{
		name: "riptide",
		weight: 2,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function(){ return 50;},
		minEnchant: function( i ){  return 17+(i-1)*7;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 14){return true}else {return false};},
		applies: function( other ) { return other !== ("riptide"||"channeling"||"loyalty") },
		id: 36,
		color: "pink"
	},
	{
		name: "multishot",
		weight: 2,
		minlevel: 1,
		maxlevel: 1,
		maxEnchant: function(){ return 50;},
		minEnchant: function(){  return 20;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 13){return true}else {return false};},
		applies: function( other ) { return other !== ("multishot"||"piercing") },
		id: 37,
		color: "pink"
	},
	{
		name: "piercing",
		weight: 10,
		minlevel: 1,
		maxlevel: 4,
		maxEnchant: function(){ return 50;},
		minEnchant: function( i ){  return 1+(i-1)*10;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 13){return true}else {return false};},
		applies: function( other ) { return other !== ("piercing"||"multishot") },
		id: 38,
		color: "pink"
	},
	{
		name: "quickcharge",
		weight: 5,
		minlevel: 1,
		maxlevel: 3,
		maxEnchant: function(){ return 50;},
		minEnchant: function( i ){  return 12+(i-1)*20;},
		canEnchant: function(iId) {if(iId === 0 || iId === 1 || iId === 13){return true}else {return false};},
		applies: function( other ) { return other !== "quickcharge" },
		id: 39,
		color: "pink"
	},

];
