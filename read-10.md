# Error Handling & Debugging
* This chapter explain how to find error and to make script easier
* You need to know how script is gone; because there are a statement code will not run until the error fixed
* Execution context
  - Global context in the main code and it's run when browser open
  - Function context in the body of function it's run when invoke it
  - Eval context not shown 

* Variable scope
  - Global scope used any where in code 
  - Functional scope or local scope used inside function only

* When run the code you can open the counsel from inspect to see the error, In the red on the left, you can see this is a Syntax Error, On the right, you can see that the error happened in a file called errors.

## Error object continued
1- Syntax Error you miss a quotation or comma or some thing else
2- Reference Error undefined variable or function
3- Type Error writing function in wrong way 
4- Range Error
5- Eval Error incorrect in using eval function
6- URL Error wrong URL 
7- NaN there is no value to assign
8- Error The generic Error object is the template (or prototype) from which all other error objects are created

* If you know that you may get an error, you can handle it gracefully using the try, catch, finally statements
Use them to give your users helpful feedback. 


