# Understanding The Problem Domain Is The Hardest Part Of Programming
* **The core concept of this article is how deal with problem especially coding difficulties**
  - You need to be aware of your problem in other way you need to know what is your problem
  - Create  a problem domain to foucus on one simple section 
  - Understand the question or the problem before begin to solve it
  - If you have a in the previous point so you need to improve your skills until you can do that 

# Objects
* Example for object 
  - var store={
    name= 'subway',
    maxworker= 30,
    worker= 12,
    installment= true,
    types=['crombo','steak']
    // all above are properties contain a store which it is an object and name, maxworker,worker, type...  are keys and 30, 12 'subway" are values 

    checkopportunity: function(){
        return this.maxworker - this.worker
    }
    // this is a method just like a function

    } 

* Access object
  - store name = store.name;
  - opp = store.checkopportunity();
  - or store name = ['name'];

# Document Object Model 
* Access to nodes 
* getElementByld('id') 
  - Returns the element that has the ID attribute with the specified value.
* querySelector('css selector')  
  - Returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
* getElementsByClassName('class') 
  - Selects one or more elements given the value of their class attribute. 
* getElementsByTagName('tagName') 
  - Selects all elements on the page with the specified tag name.
* querySelectorAll('css selector') 
  - Uses CSS selector syntax to select one or more elements and returns all of those that match.

* select element from the node list 
  - elements.item(O)
  - element[0]

* Make action for node 
  - hotitem[0].classname='cool';

## Traversing The DOM
* startltem.previousSibling;
* startitem.nextSibling;
* startltem. firstChild; 
* startitem.lastChild; 

