# Layout
* There are two types display element:
1. Block-level boxes start on a new line and act as the main building blocks of any layout like &lt; p &gt;.
2. Inline boxes flow between surrounding like &lt; b &gt;.
* **position** property specifies the type of positioning method used for an element. There are five different position values
  - **static or normal** not positioned in any special way; it is always positioned according to the normal flow of the page.
  - **relative** positioned relative to its normal position to the top right or left.
  - **fixed** positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
  - **absolute** to let the element free from other elements and it goes where you ordered to go.
  - **Floating** to let the element float lift or right and it's become a block level.
* **z-index** property specifies the stack order of an element and it's work on a position ( absolute,  relative, fixed).
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
  * **width** this sets the width of the columns
  * **margin** this creates a gap between the columns
  * designer usually make the web page between 960-1000 pixels in order to difference sizes and display resolutions.

 * Difference between fixed and Fluid layouts
 
 | ***Property*** | ***Fixed Layout*** | ***Liquid Layout*** |
 |----------------|--------------------|---------------------|
 | Width of wrap | in Pixels ( 960px, 1200px) | in Percentage or auto, for exp 80% |
 | Height | in Pixels or auto | automatic |
 | Device Compatibility | for devices greater than their width | remain Same. Do not compress |
 | Text Scrolling on various Devices | remain same | text scroll down |
 | Print Friendly | yes | no |
 
 * Possible grid layout 
 ![grid](https://res.cloudinary.com/practicaldev/image/fetch/s--hRu0qmjc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/ltephanysopez/intro-to-web-dev/master/docs/images/css-grid-layout.png)
 
 * @import is used to import a CSS style URL from other source that you don't have, while use link to connect you own CSS file.
