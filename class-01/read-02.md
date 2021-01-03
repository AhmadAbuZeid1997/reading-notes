# Text 
* this cahpter talk about headings and paragraphs and some other tags
| ***Tag*** | ***function*** |
| --- | -------- |
| Heading &lt; h1-h6 &gt; | We have 6 types of heading tags from h1-h6 for titles and subtitles, h1 is the largest and h6 is the smallest one |
| Paragraph &lt; p &gt; | For writing text |
| Bold &lt; b &gt; | Bold text |
| Italic &lt; i &gt; | Italic text |
| Line Break &lt; br / &gt; | Separate line for a new line |
| Horizantal Break &lt; hr / &gt; | Light horizantal line |
| Strong &lt; strong &gt; | Tag is used to define text with strong importance |
| Emphasis &lt; em &gt; | Tag is used to define emphasized text |
| &lt; blockquote &gt; | Tag specifies a section that is quoted from another source |
| &lt; q &gt; | Tag defines a short quotation |
| Abbreviations &lt; abbr &gt; | Tag defines an abbreviation or an acronym |
| Acronyms &lt; Acronym &gt; | Removed |

* **Note:** the space in p tag is not appear in page, just one space will appear like a space between words.
# Introduction to CSS
* CSS in general change the style of the page, on of them manipulation in inline and block statement
there are three ways to write CSS:
1- Write inline of tag as attribute for example
&lt; b style="background-color: red;" &gt;
2- Write in internal way 
&lt; style &gt;
p,h1{ 
    color= green;
} 
3- Writing in file that has extention .css and call it using link
* Css selectors
![photo](https://cs.wellesley.edu/~cs110/reading/css-selectors-files/css_rule.png)
![img](https://i.pinimg.com/originals/bc/97/96/bc97965579512f8a6d2303934f599c65.png)
# Basic JavaScript Instructions
* Writing comment make our code easy to understand; because we can have hundred of statement in one web page.
* JavaScript deal with variables that asign to value, it is worth say a variable is a good name for this concept because the data storedin a variable can change (or vary) each time a script runs.
* Declare variable:
var variable name;
* Then asign value:
variable name= value;
* Types of variable: 
1- Number(1,3,5,....)
2- string("any thing") we can use single qutation instead of double qutation
3- Boolean (True or Fulse)
* Rules to name the variable:
1- The name must begin with a letter, dollar sign ($),or an underscore (_). It must not start with a number.
2-The name can contain letters, numbers, dollar sign ($), or an underscore (_). Note that you must not use a dash(-) or a period (.) in a variable name.
3- You cannot use keywords or reserved words.
4- All variables are case sensitive.
5- Use a name that describes the kind of information that the variable stores. 
6- If your variable name is made up of more than one word, use a capital letter for the first letter of every word after the first word.
* Variables can sign a row of data between brackets and the data separated by comma for example
variable = [1,2,4]
and we can call a value 
variable[2] it is a 2
* Oparators 
![im](https://2.bp.blogspot.com/-Aa3I3yOraos/W8LSLWl3Q5I/AAAAAAAAESw/RJugarKq2mQn0zb8BXB6cYHtKOjYXoAEgCLcBGAs/w1200-h630-p-k-no-nu/arithmatic-operators.PNG)
# If Statement
* general form 
![i](https://image.slidesharecdn.com/conditional-140811112653-phpapp02/95/conditional-statement-in-java-23-638.jpg?cb=1407756443.jpg)
* Logical operators:
* Equal to " == " to see if are the same.
* Is not equal to " != " to see if they are not the same.
* Strict not equal to " !== " to check both the data type and value are not the same.
* Strict equal to " === " to check both the data type and value are the same.
* Greater than " > " check if the number on the left is greater than the number on the right.
* less than " < " check if the number on the left is less than the number on the right.
* Greater than or equal to " >= " check if the number on the left is greater than or equal the number on the right.
* less than or equal to " <= " check if the number on the left is less than or equal to the number on the right.
* Logical and " && " tests more than one condition.
* Logical or " || " tests at least one condition.
* Logical not " !" takes a signal boolean value and inverts it.