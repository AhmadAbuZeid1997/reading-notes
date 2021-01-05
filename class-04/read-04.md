# Links
* Tag &lt; a &gt; is used to link other pages in your website.
* General formula:

```<a href="the url link">text appear underlined that the user click on </a>```
* If the file in the same folder you can simply write the name of it, but it is not you need to access to it by writing the name of directory then / until you can access it, and if it outside directory you should use ../
* **mailto** it is used to link emails
```<a href="mailto:email address">email</a>```
* **target** attribute to open the other link in different ways like in different tab.
# Layout
* There are two types display element:
1. Block-level boxes start on a new line and act as the main building blocks of any layout like &lt; p &gt;.
2. Inline boxes flow between surrounding like &lt; b &gt;.
* **position** property specifies the type of positioning method used for an element.There are five different position values
  - **static** not positioned in any special way; it is always positioned according to the normal flow of the page.
  - **relative** positioned relative to its normal position.
  - **fixed** positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
  - **absolute** positioned relative to the nearest positioned ancestor.
* **z-index** property specifies the stack order of an element and it's work on a position ( absolute, position: relative, position: fixed).
* **float** property specifies how an element should float.
  - **left**
  - **right**
  - **none**
  - **inherit**
  * **clear** specifies what elements can float beside the cleared element and on which side
  - **left**
  - **right**
  - **both**
  - **none**
  - **inherit**
 * Difference between fixed and Fluid layouts
 
 | ***Property*** | ***Fixed Layout*** | ***Liquid Layout*** |
 |----------------|--------------------|---------------------|
 | Width of wrap | in Pixels ( 960px, 1200px) | in Percentage or auto, for exp 80% |
 | Height | in Pixels or auto | automatic |
 | Device Compatibility | for devices greater than their width | remain Same. Do not compress |
 | Text Scrolling on various Devices | remain same | text scroll down |
 | Print Friendly | yes | no |
 
 # Function
 * Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function.
 * Declare funtion
 function nameoffuntion(inputs){
     action of function;
 }
* Call funtion 
nameoffuntion(inputs);
* In the fuction we can put return value or not it is optional.
 # Reasons for Pair Programming
 * In pair programming there are two rules
 1. **Driver**
    - How only one can write code on keyboard
 2. **Navigator**
    - Use his/her word to guide the driver
 * There are 6 reason for pair programming:
 a. Greater efficiency
 b. Engaged collaboration
 c. Learning from fellow students 
 d. Social skills
 e. Job interview readiness
 f. Work environment readiness
