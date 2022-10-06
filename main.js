const prompt = require('prompt-sync')({sigint: true});

console.log("\n==============================================");
console.log("Welcome to the To-Do List Manager Application!");
console.log("==============================================\n");

// console.log("~ Select an action ~\n");
// console.log("[1] Create a to-do item");
// console.log("[2] Complete a to-do item");
// console.log("[3] Exit To-Do List Manager");

let option = selectOption();
let toDoList = [];
let statusArray = [];


while(option !== 3){
  if(option === 1){
    console.log("\n~ Creating a new to-do item ~\n")
    console.log("What is this to-do item called?\n")
        
    // here is where we add the to do item
    let addItem = prompt("> ");

    // if input is empty re-prompt to enter something
    while(addItem.length === 0){
      console.log("Invalid: Input can not be empty. Please try again.");
      addItem = prompt("> "); 
      
    }

  toDoList.push(addItem); // add item to end of array
  statusArray.push(false); // has to be a push to work with the array.
  displayList(); 
   
  // here is where we re-prompt the user
  option = selectOption(); // run the selectOption function 

  }else if(option === 2){
      
    // checks to make sure the list is NOT empty 
    if(toDoList.length !== 0){ // this is true run the code below

    console.log("~ Complete a to-do item ~")
    console.log("Which to-do item would you like to mark as complete?\n")
    displayList();

    let newStatus = Number(prompt('> '));
    // check to make sure the input is a number or NaN
    // while newStatus is not a number 
    // also checks to make sure only 1-3 is selected
    // also prevents negative or invalid numbers
    // || statement says IF ANY of these are true...

 while (isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
    console.log("Please input a number that corresponds to an item number in the list: ");
    newStatus = Number(prompt('> ')); // copied from above but without the let to reprompt the user.
  }
   
    statusArray[newStatus -1] = true;
  
    } else{
    console.log("Please add items to your To-Do List before trying to complete an item.");
      
    }
    // shows how many items are in your list
    displayList();

    // here is where we re-prompt the user
    option = selectOption(); // call the selectOption() function below again

  }else {
    console.log("Invalid Operation!")
    option = selectOption();
  }
}

  console.log("Exiting the application...")


// -----------------> Functions <------------------- //

function selectOption(){
    console.log("\n~ Select an action ~\n");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3] Exit To-Do List Manager");
    
    
    return Number(prompt("> "));
}

// this prints out the number of items in the array. 
//.length in this case shows the number of item in the list
function displayList(){
  if(toDoList.length === 0){
    console.log("Your To-Do list is currently empty.");
  }else {
    console.log(`You have" ${toDoList.length} To-Do items.`) 
    console.log(`-----------------------------------------\n`) 
  }


  for(i = 0; i < toDoList.length; i++){
    
    // sets the status for the item in the list
    let status = "";

    if(statusArray[i] === false){
        status = "[incomplete]"
    }else if(statusArray[i] === true){
      status = "[complete]"
    }
    
    console.log(`${i+1}. ${status} ${toDoList[i]}`) 
    
    // above -->
    // a way account for numbers starting at 1 not 0 - i+1
    //toDoList[i]
    // takes the item add a 1 to the index # then prints out the current item in the array
    
  }

}

// ## Stretch Goals

// 1. Re-organize your code to make use of functions
// 2. Allow the user to both complete and uncomplete to-do items
// 3. Allow the user to fully delete a to-do item from the list
// 4. Allow the user to edit the text of an existing to-do item
// 5. Get creative! Add a new feature that you would find useful in a to-do list





/*

General notes on this project:
----> break it down into 3 sections 

1. Figure out the UI
- console.log()
  - welcome message
  - different options (add task, complete task, exit program)
  - error message for incorrect or invalid options
  - spacing/separators to make it look nice

- prompts 
  - prompt user for numbers to decide which option to choose using if statements
  1. adding a task/create an item - prompt user for item to create
  2. mark as complete - prompt user for which task is complete
  3. exit

- while loop
  - program has no known ending, so we want to be able to prompt them indefinitely/until they decide to exit. 

- Display the To-Do List to the user 
  - completion status (complete or incomplete)
  - the name of the item
  - the number associated with the item
  - loop to display each item in the to-do list

2. Add To-Do Items (choice === 1)
- prompt for the to-do item
- save the item by storing it in a global array - .push()
- need an array to keep track of to-do items

2.5 - How do we set items to be incomplete
- any item on the list is incomplete until we mark it as complete
- whenever we add an item to the todo list it is [incomplete] by default
- we need to use an ARRAY OF BOOLEANS

true = [complete]
false = [incomplete]

  - [true,        false,            true] - status array
    [Walk Dog,  'Get food'    'Run mile'] - todo list array
        0            1            2       - shared index

let status = [];
// by default, when we add a new item we want to add a FALSE boolean to our status array.
// whenever the program exits or restarts the indexes reset.


3. Complete To-Do Items (choice === 2)
  - display current items in the todo list with their updated status
    - pick which todo item to mark as complete
    -swap its status from false to true
    - make sure we display the updated list right after










extra note --> anytime you need to keep track of something store it globally!!
*/