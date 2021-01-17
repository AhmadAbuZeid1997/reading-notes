# Drawing Charts
* First we need to link the file of chart.js with script tag
* create a canvas element in our HTML
&lt;canvas id="" width="" height=""&gt;&lt;/canvas&gt;
* write a script that will retrievet4 the context of the canvas
&lt;script&gt;
    var some thing = document.getElementById('id').getContext('2d');
    new Chart(some thing).Line(idData);
&lt;/script&gt;
* id data 
var idData = {
	labels : ["January","February","March","April","May","June"],
	datasets : [
		{
			fillColor : "rgba(172,194,132,0.4)",
			strokeColor : "#ACC26D",
			pointColor : "#fff",
			pointStrokeColor : "#9DB86D",
			data : [203,156,99,251,305,247]
		}
	]
}
* for pie chart use pie instade of line and bar also like that 
* License used is MIT license

# Canvas Tag
* Canvas tag like img, video, and audio, but it's differ in attribute it's should not have src and alt but it have width and hight and id 
* It's draw with 2d and 3d model 
var ctx = canvas.getContext('2d or 3d')  

# Grids and Sample
## Drawing rectangles
* fillRect(x, y, width, height) ----> Draws a filled rectangle.
* strokeRect(x, y, width, height) ----> Draws a rectangular outline.
* clearRect(x, y, width, height) ----> Clears the specified rectangular area, making it fully transparent.
## Drawing paths
* beginPath() ----> Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
* Path methods ----> Methods to set different paths for objects.
* closePath() ----> Adds a straight line to the path, going to the start of the current sub-path.
* stroke() ----> Draws the shape by stroking its outline.
* fill() ----> Draws a solid shape by filling the path's content area.
## Drawing a triangle
* moveTo(x, y) ----> Moves the pen to the coordinates specified by x and y
## Lines
* lineTo(x, y) ----> Draws a line from the current drawing position to the position specified by x and y
## Arcs
* arc(x, y, radius, startAngle, endAngle, anticlockwise) ----> Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise (defaulting to clockwise).
* arcTo(x1, y1, x2, y2, radius) ----> Draws an arc with the given control points and radius, connected to the previous point by a straight line.
## Bezier and quadratic curves
* quadraticCurveTo(cp1x, cp1y, x, y) ----> Draws a quadratic Bézier curve from the current pen position to the end point specified by x and y, using the control point specified by cp1x and cp1y.
* bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) ----> Draws a cubic Bézier curve from the current pen position to the end point specified by x and y, using the control points specified by (cp1x, cp1y) and (cp2x, cp2y)
## Drawing text
* fillText(text, x, y [, maxWidth]) ----> Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.
* strokeText(text, x, y [, maxWidth]) ----> Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.
## Styling text
* font = value
The current text style being used when drawing text. This string uses the same syntax as the CSS font property. The default font is 10px sans-serif.
* textAlign = value
Text alignment setting. Possible values: start, end, left, right or center. The default value is start.
* textBaseline = value
Baseline alignment setting. Possible values: top, hanging, middle, alphabetic, ideographic, bottom. The default value is alphabetic.
* direction = value
Directionality. Possible values: ltr, rtl, inherit. The default value is inherit.
## Advanced text measurements
* measureText() ----> Returns a TextMetrics object containing the width, in pixels, that the specified text will be when drawn in the current text style
