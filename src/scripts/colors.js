/*


	COLORS

	Here's a little bootstrapping to create our Color constants.
	At first it seemed like overkill, but then as the solvers and inspectors
	moved forward having these objects available became highly desirable.
	Sure, ES5 doesn't really have constants but the all-caps alerts you
	to the fact that them thar variables ought not to be messed with.

	--

	@author Mark Lundin - http://www.mark-lundin.com
	@author Stewart Smith


*/



ERNO.Color = function(name, initial, hex, styleF, styleB) {

	this.name = name;
	this.initial = initial;
	this.hex = hex;
	this.styleF = styleF;
	this.styleB = styleB;
}


//  Global constants to describe sticker colors.

var M,
	J,
	B,
	COLOURLESS;

M = ERNO.MADISON = new ERNO.Color(

		'madison',
		'M',
		'#0A2463',
		'font-weight: bold; color: #0A2463',
		'background-color: #0A2463; color: rgba( 10, 36, 99, 0.5 )'
	),
	J = ERNO.JEWEL = new ERNO.Color(

		'jewel',
		'J',
		'#138A36',
		'font-weight: bold; color: #138A36',
		'background-color: #138A36; color: rgba( 255, 255, 255, 0.9 )' //text color?
	),
	B = ERNO.BLUSH = new ERNO.Color(

		'blush',
		'B',
		'#B33F62',
		'font-weight: bold; color: #B33F62',
		'background-color: #B33F62; color: rgba( 255, 255, 255, 0.9 )'
	),
	ERNO.COLORLESS = new ERNO.Color(

		'NA',
		'X',
		'#DDD',
		'color: #EEE',
		'color: #DDD'
	)
