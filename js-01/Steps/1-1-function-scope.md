
function scoped: 
A var variable is visible everywhere inside the entire function, not just inside { } blocks.

Example: 
function test() {
  if (true) {
    var x = 10;
  }

  console.log(x);
}

test();

-------
Output: 
10

Even though x was declared inside if { } block,
var ignores block scope — it spreads to whole function.

if block ❌
function block ✅

-----

Now Compare — let Is Block Scoped
change it from var to let

Output: 
Error: y is not defined


let respects { } block.
only inside if block
not outside

-----------------------------------

Same example with big: 

const isActive = false;

function test() {
  if (isActive) {
    var x = "You are acitve";
    
  } else
  {
    var x = "You are not active";
  }

  console.log(x);

}

test();

var x is declared inside blocks
Still accessible after the blocks
Shows var belongs to the function, not the block

---------------------------------------

Block Scope Correct version: 

const isActive = false;

function test() {
  if (isActive) {
    let x = "You are acitve";
    console.log(x);
  } else
  {
    let x = "You are not active";
    console.log(x);
  }
}

test();

