var _page = makePage();
var _mc = makeMC("test");
describe('enchantmentlist',function(){
	it('when striped removes self',function(){

		var enchantmentlist = _mc.getEnchantments( 0, 0, 30 );
		var enchantment = enchantmentlist[0];
		enchantmentlist = _mc.stripeIncompatibleEnchantments( enchantment, enchantmentlist );
		expect(enchantmentlist).not.toContain(enchantment);
	});
});

describe('enchantmentlist', function(){
	it('when striped based on efficienty', function(){
		var e1 = {
			enchantment: _enchantments[14],
			enchantmentLevel: 1
		};
		var e2 = 	{
			enchantment: _enchantments[14],
			enchantmentLevel: 2
		};
		var enchantmentlist = [e1,e2];

		enchantmentlist = _mc.stripeIncompatibleEnchantments(enchantmentlist[0],enchantmentlist);
		expect( enchantmentlist ).not.toContain( e1 );
		expect( enchantmentlist ).not.toContain( e2 );
	});
});

describe('enchantmentlist', function(){
	it('when created only holds one enchantment of each type', function(){
		var enchantmentList = _mc.getEnchantments( 0, 0, 35 );
		for( var i = 0; i<enchantmentList.length;i++)
		{
			for( var j=i+1;j<enchantmentList.length;j++)
			{
				expect( enchantmentList[i].enchantment.name ).not.toBe( enchantmentList[j].enchantment.name );
			}
		}
	});
});

describe('simulation', function(){
	it('can be run deterministically',function(){

		expect( _enchantments.length ).toBe( 37 );
	});
});

