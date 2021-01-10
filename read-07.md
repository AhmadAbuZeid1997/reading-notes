# Domain Modeling 
* Domain modeling is to write the problem you have in coding, and the function of each statement code you wrote, it should write as acomment within the code.
## Model epic fails videos
* if you need to add something to your code it is better to write by hand until it works, dot copy the code from other sources that to aquire the skill of writing from nothing.
## Define a constructor and initialize properties
* define all variable asign value to help other coder to deal with code.
## Generate random numbers
* model the random nature of user behavior, you'll need the help of a random number generator. Fortunately, the JavaScript standard library includes a Math.random() function for just this sort of occasion.

# Tables 
* To show the information within a grid shape
* code of table
// Table tag
&gt; table &lt; 
// Table row tag
&gt; tr &lt;
// Table data tag 
&gt; td &lt;        &gt;/ tr &lt;
&gt; td &lt;        &gt;/ tr &lt;
&gt;/ tr &lt;
&gt;/ table &lt; 
 
 * Table head in first row 
&gt; table &lt; 
&gt; tr &lt;
// Table head tag
&gt; th &lt;        &gt;/ th &lt;
&gt; th &lt;        &gt;/ th &lt;
&gt;/ tr &lt;
&gt; tr &lt;
&gt; td &lt;        &gt;/ tr &lt;
&gt; td &lt;        &gt;/ tr &lt;
&gt;/ tr &lt;
&gt;/ table &lt; 

* Spanning Column
  - To merge two sells in vertical way or more.
  &gt; td  colspan="2 or any number" &lt;        &gt;/ tr &lt;

* Spaning rows 
  - The same of spanning column but use rowspan="5 or any number"

* For long table use
  - &gt; thead &lt; for data in first row in bold font 
  - &gt; tbody &lt; for data in general
  - &gt; tfooter &lt; for last row maby for summation for example

* In old coding we can change like width, spacing, background, border... like attributes 

# Funtion Method and Object
* Wirtting object 
 var store={
    name= 'subway',
    maxworker= 30,
    worker= 12,
    installment= true,
    types=['crombo','steak']
    // all above are properties contain a store which it is an object and name, maxworker,worker, type...  are keys and 30, 12 'subway" are values 

    checkopportunity: function(){
        return this.maxworker - this.worker
    }
    // this is a method just like a function using this.worker the same using store.worker

    } 

* Access object
  - store name = store.name;
  - opp = store.checkopportunity();
  - or store name = ['name'];

* Array 
  - room=[1,2,3,4,....]

* Object
  - room1= 240, room2=15, room3=100 .....

* Array in Object
  - room1= [5,240], room2=[15,80], room3=[100,500] ....

* Object in array
  - room[0]=[ room1= 240 , room2=15 ,room3=100]..

* Brower object model contains objects that represent the current browser window or tab. It contains objects that model things like browser history and the device's screen. 
* Document object model  uses objects to create a representation of the current page. It creates a new object for each element (and each individual section of text) within the page. 
* Global JavaScript objects represent things that the JavaScript language needs to create a model of. For example, there is an object that deals only with dates and times. 
