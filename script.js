// // Method 1.

// //Create
// document.body.innerHTML = "<h1>Hello world</h1>";
// //Find
// let h1Element = document.querySelector('h1');
// //Modify
// h1Element.style.color = "rgb(255, 0, 0)";

// // Method 2.

// // Create
// let h2Elemet = document.createElement('h2');
// //Attach
// document.body.prepend(h2Elemet);
// //Modify
// h2Elemet.textContent = "Nice to meet you!";

let exercisesElement = document.querySelector('#exercises');
// append - incert element before closing 

let h1Element = document.createElement ('h1'); // create
h1Element.textContent = "H1 header"; // modify
exercisesElement.append(h1Element); // attach

let h2Element = document.createElement ('h2'); 
h2Element.textContent = "H2 header";
exercisesElement.append(h2Element); // attach

let h3Element = document.createElement ('h3');
h3Element.textContent = "H3 header";
exercisesElement.append(h3Element);

let h4Element = document.createElement ('h4'); 
h4Element.textContent = "H4 header"; 
exercisesElement.prepend(h4Element);


let h5Element = document.createElement ('h5'); 
h5Element.textContent = "H5 header"; 
exercisesElement.before(h5Element);


let h6Element = document.createElement ('h6'); 
h6Element.textContent = "H6 header"; 
exercisesElement.after(h6Element);

//Exercise
let Exercise1 = document.querySelector('#execise1');
Exercise1.before('before');
Exercise1.prepend('prepend');
Exercise1.append('append');
Exercise1.after('after');

let button = document.createElement ('button');
exercisesElement.prepend(button);
button.textContent = "Lauch Meeting";
button.style.padding = "10px 25px";
button.style.color = "white";
button.style.borderRadius = "10px";
button.style.backgroundColor = "blue";
button.style.border = "none";

let shoppingList = ['Apple', 'Banana', 'Pinapple'];
// Create UL
let listElement = document.createElement ('ul');
exercisesElement.prepend(ul);
// Create LI
for (let i = 0; i < shoppingList.length; i++) {
   let listElement = document.createElement('li');
listElement.append(listItemElement);
listItemElement.textContent = shoppingList[i];
}

//Create table
let table = document.createElement('table');
exercisesElement.prepend(table);
// Create LI
for (let i = 0; i < shoppingList.length; i++) {
   let listElement = document.createElement('li');
listElement.append(listItemElement);
listItemElement.textContent = shoppingList[i];
}

// How to copy 
let button2 = button.cloneNode ();
button2.textContent = "Hello";
exercisesElement.prepend(button2);

let button3 = button.cloneNode ();
button3.textContent = "Hello";
exercisesElement.prepend(button3);

let button4 = button.cloneNode ();
button4.textContent = "Hello";
exercisesElement.prepend(button4);

let button5 = button.cloneNode ();
button5.textContent = "Hello";
exercisesElement.prepend(button5);

let button6 = button.cloneNode ();
button6.textContent = "Hello";
exercisesElement.prepend(button6);

// How to remove
button2.remove();

let listElement = document.createElement('table');
for (let i = 0; i < shoppingList.length; i++) {
   let listElement = document.createElement('tr');
listElement.append(listItemElement);
listItemElement.textContent = shoppingList[i];
}

// 0-255 - Math.random() * 255

let clolorful = document.createElement('div');
clolorful.textContent = "HELLO";
