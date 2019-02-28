/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. looking for tree  Window/Global Object binding - According to josh, is a butt. Use strict will stop bad older browser 
habits. A good concept to understand but not used often. This will be in the window/console object. 
* 2. pointing at tree object Implicit Binding - Always associated with object literals. automatic binding? Very good for reusing pieces of 
code rather than making an entire new object and calling specific aspects of the object. 
cannot use arrow functions and use strict does not apply. 
* 3. New Binding - all about creating objects and reusing the attributes within the objects without having to repeat yourself. 
* 4. Explicit Binding - only dealing with functions. can use methods call apply bind in order to be able to call specific numbers of things from an array for example. 
*
* write out a code example of each explanation above
*/

// Principle 1

function goodbye(param) {
    "use strict";
    console.log(this);
    return `I like to say: ${param}`;
  }
  
  console.log(goodbye("sayonara"));

// code example for Window Binding

// Principle 2
const doggo = {
    name: "Barky",
    hobby: "barking",
    getExcited: function() {
      return `${this.name} loves to run around excitedly while ${this.hobby}`;
    }
  }
  
  console.log(doggo.getExcited());
  
// code example for Implicit Binding

// Principle 3

function Fruit (color) {
    this.color = color;
    this.description = function() {
      console.log(`This fruit is the color ${this.color}`);
    }
  }
  
  const peach = new Fruit ('pink');
  const banana = new Fruit ('yellow');
  const orange = new Fruit ('orange');
  
  peach.description();
  banana.description();
  orange.description();

console.log(peach);
console.log(banana);
console.log(orange);
// code example for New Binding

// Principle 4

const cat = {
    name: "Luna"
  }
  
const dog = {
    name: "Sparky"
  }
  
const whatDo = ["sleep","eat","get petted"];
  
  
  function intro(do1, do2, do3) {
    debugger;
    return `my name is ${this.name} and these are things I like to do: ${do1}, ${do2}, ${do3}`;
  }
  
  console.log(intro.call(cat, ...whatDo));
  console.log(intro.call(dog, ...whatDo));
  

// code example for Explicit Binding