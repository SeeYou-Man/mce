/** All code unless stated otherwise is made by github user @Zazcallabah */
/*
  Constructor function for the view model object. See knockoutjs.com for details on knockout, viewmodels and the mvvm-pattern.
  In short: We add properties to the viewmodel that can be read and updated by the html elements on the page.
  When some properties are updated it triggers actions. The action is most commonly a new simulation run.
*/
var makeViewModel = function()
{
	var model = {};
	model.mode = ko.observable("level");
	model.enchantmentMode = ko.computed(function(){return model.mode() === "enchantment" },model);
	model.levelMode = ko.computed(function(){return model.mode() === "level" },model);
	model.availableMaterials = ko.observableArray([
		/**Made by @SeeYou-Man */
		{name:'Wood',value: 0},
		{name:'Leather',value: 1},
		{name:'Stone',value: 2},
		{name:'Chain',value:3},
		{name:'Iron',value: 4},
		{name:'Gold',value: 5},
		{name:'Diamond',value: 6},
		{name:'Turtle',value: 7},
		{name:'Netherite',value: 8},
		{name:'Other',value: 9},
	]);
	model.availableItems = ko.observableArray([
		/**@SeeYou-Man
		 * Changes: Added tolls and weapons which did not exists in 1.3
		 * hopefully this won't break anything whith those older versions*/
		{name:'Book',value: 0},
		{name:'Fished Book', value: 1},
		/**Tools*/
		{name:'Pickaxe',value: 2},
		{name:'Axe',value: 3},
		{name:'Shovel',value: 4},
		{name:'Hoe', value: 5},
		{name:'Fishing Rod',value: 6},
		/**Armour*/
		{name:'Helmet',value: 7},
		{name:'Chestplate',value: 8},
		{name:'Leggings',value: 9},
		{name:'Boots',value: 10},
		/**Weapons*/
		{name:'Sword',value: 11},
		{name:'Bow',value: 12},
		{name:'Crossbow',value: 13},
		{name:'Trident',value:14},
	]);
	model.availableVersions = ko.observableArray([
		/**@SeeYou-Man*/
		{name:'1.20.2', value: '1.20.2'}
		]);
	model.version = ko.observable(null);
	model.material = ko.observable(null);
	model.item = ko.observable(null);
	model.level = ko.observable(null);
	model.simulations = ko.observable(null);
	model.iterations = ko.observable(null);
	model.levelSimulations = ko.observable(null);
	model.levelIterations = ko.observable(null);
	model.stdev = ko.observable(null);
	model.availableEnchantments = ko.computed(function(){
		var avail = [];
		for( var e in _enchantments )
		{
			var ench = _enchantments[e];
			if( ench.canEnchant(model.material(),model.item()) )
				avail.push(ench);
		}
		return avail;
	},model);
	model.enchantment = ko.observable(0);
	model.availablePowers = ko.computed(function(){
		var avail=[];
		var ench = _enchantments[model.enchantment()];
		for(var i = ench.minlevel; i<=ench.maxlevel;i++)
			avail.push( i );
		return avail;
	},model);
	model.power = ko.observable(1);

	model.displayedCharts = ko.observableArray([]);
	model.addChart = function( chart )
	{
		model.displayedCharts.push(chart);

	};
	model.clear = function()
	{
		while( model.displayedCharts().length > 0 )
			model.displayedCharts.pop();
	};

	var changeLevel = function( l )
	{
		var level = parseInt(model.level(),10);
		model.level( level + l);
	};

	model.addLevel = function(){changeLevel(1);};
	model.removeLevel=function(){changeLevel(-1);};

	model.setOnChanged = function( action ){
		model.level.subscribe(action);
		model.stdev.subscribe(action);
		model.material.subscribe(action);
		model.item.subscribe(action);
		model.simulations.subscribe(action);
		model.iterations.subscribe(action);
		model.levelSimulations.subscribe(action);
		model.levelIterations.subscribe(action);
		model.mode.subscribe(action);
		model.power.subscribe(action);
		model.enchantment.subscribe(action);
		model.version.subscribe(action);
	};
	model.run = function(){};
	model.reset = function(){};
	return model;
};

/*
  Viewmodel object constructor function for one statistics-bar in a chart.
*/
var makeBar = function(color,message,label,upper,mean,lower,stdev,distanceleft,detailed,width)
{
	var bar = {};
	bar.color = ko.observable(color);
	bar.detailmessage=ko.observable(message);
	bar.label = ko.observable(label);
	bar.pixelheight = ko.observable( Math.round(mean) + "px");
	bar.stdev = ko.observable(stdev);
	bar.upperstdev = ko.observable(Math.round(upper)+"px");
	bar.lowerstdev = ko.observable(Math.round(lower)+"px");
	bar.distanceleft = ko.observable(distanceleft+"px");
	bar.showstdev = ko.observable(detailed);
	bar.mainopacity = ko.observable(detailed ? 0.7 : 1.0);
	bar.width = ko.observable( (width || 20) + "px" );
	return bar;
};

/*
  Viewmodel object constructor function for one chart. A chart holds a bunch of bars.
*/
var makeChart = function(title){
	var chart={};
	chart.bars = ko.observableArray([]);
	chart.title = ko.observable(title);
	chart.addBar= function( bar ){
		chart.bars.push( bar );
	};
	return chart;
};

