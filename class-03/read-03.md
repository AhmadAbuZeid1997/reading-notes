# Lists 
* There are three type of lists:
1- Order list the structure written:
&lt; ol &gt;  // openning tag for order list
   &lt; li &gt; // openning tag for each item
   &lt; / li &gt; // closing tag for each item 
&lt; ol &gt; // closing tag for order list
2- Unorder list 
* It's written exactlly like order list, but write ul instead of ol.
3- definition list 
&lt; dl &gt;  // openning tag for definition list
   &lt; dt &gt; // openning tag This is used to contain the term being defined 
   &lt; / dt &gt; // closing tag 
    &lt; dd &gt; // openning tag to contain the definition
    &lt; / dd &gt; // closing tag
&lt; ol &gt; // closing tag for order list
* We can make nested list by compine lists with each other.
# Boxes
* In CSS you can call some charater and change the properties here some it 

| ***Order*** | ***Details*** |
| ----------- | ------------- |
| width | Property sets the width of an element |
| height | property sets the height of an element |
| min-width | property defines the minimum width of an element |
| max-width | property defines the maximum width of an element |
| min-height | property defines the minimum height of an element |
| max-height | property defines the maximum hright of an element |
| overflow | property controls what happens to content that is too big to fit into an area |
| border-width | property sets the width of an element's four borders |
| border-style | property specifies what kind of border to display |
| border-color | property sets the color of an element's four borders |
| border | properties allow you to specify the style, width, and color of an element's borde |
| padding | properties are used to generate space around an element's content, inside of any defined borders |
| margin | properties are used to create space around elements, outside of any defined borders |
| display | property specifies the display behavior of an element |
| visibility | property specifies whether or not an element is visible |
| border-image | property allows you to specify an image to be used as the border around an element |
| box-shadow | property attaches one or more shadows to an element |
| border-radius | property defines the radius of the element's corners |

# Arrays 
* We can assign row of values to one variable by assign values between brackets seperated by comma for example
var x=['ahmad', 'mohammad', 'Abu Zeid']
# Condition & Loop Statement
* **If statement** condition statement that take two possible reaction acording to logical value
If (condition) {
    action to do if true
}else {
    action to do if fulse
}
 * **Switch** statement take specific action acording to value received 
 switch (leveel){
     case 'one';
     action to do 
     case 'two';
     action to do 
     case 'three';
     action to do 
     .
     .
     .
     defult;
     action to do
 }
* **For loop** loop statement that repeat itself a certain times
For (initial value; condition; change value of counter)
{
    action to do
}
* **While** loop statement that repeat itself unkown times
while (condition){
    action to do 
    cahnge value of counter
}
* **DO While** The key difference between a while loop and do while loop is that the statements in the code block come before the condition.