/** All code unless stated otherwise is made by github user @Zazcallabah */
var makePage = function( storage, tools, model ) { return {

/*
 * Writes data to the info box.
 */
write: function( str )
{
	if(str === undefined )
		str = " ";
	window.document.getElementById("output").innerHTML += str + "\n";
},

/*
 * Clears the info box of all components.
 */
clear: function()
{
	model.clear();
	this.clearAll("textholder");
},

clearAll: function( identifier )
{
	var elems = window.document.getElementsByClassName(identifier)
	for(var i = 0; i<elems.length; i++)
		elems[i].innerHTML="";
},

/*
 * Ensures all input fields contain correct data.
 */
validateFields: function()
{
	var level = parseInt(model.level(),10);
	if( level < 1 )
		model.level(1);
	if( model.version() === "1.3.1" )
	{
		if( level > 30 ) // new level cap in 1.3
			model.level( 30 );
	}
	/**Code made by @SeeYou-Man*/
	else if(model.version()=== "1.20.2")
	{
		if(level > 30)
			{
				model.level(30) // Unsure if this is still the level cap in 1.20.2 will check at a later instance
			}
	}

	else
	{
		if( level > 50 )
			model.level(50);
	}
	if( isNaN( level ) )
		model.level( 30 );
}
}; };
