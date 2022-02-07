// Method 1.

// // Create
// document.body.innerHTML = "<h1>Hello world</h1>";
// // Find
// let h1Element = document.querySelector('h1');
// // Modify
// h1Element.style.color = "rgb(255, 0, 0)";

// // Method 2.

// // Create
// let h2Element = document.createElement('h2');
// // Attach
// document.body.prepend(h2Element);
// // Modify
// h2Element.textContent = "Nice to meet you!";

let exercisesElement = document.querySelector('#exercises');
// append - insert element before closing tag
// prepend - insert element after opening tag
// before - insert element before opening tag
// after - insert element after closing tag

let h1Element = document.createElement('h1'); // create
h1Element.textContent = "H1 header"; // modify
exercisesElement.append(h1Element); // attach

let h2Element = document.createElement('h2');
h2Element.textContent = "H2 header";
exercisesElement.append(h2Element);

let h3Element = document.createElement('h3'); // create
exercisesElement.append(h3Element); // attach
h3Element.textContent = "H3 header"; // modify

let h4Element = document.createElement('h4'); // create
exercisesElement.prepend(h4Element); // attach
h4Element.textContent = "H4 header"; // modify

let h5Element = document.createElement('h5'); // create
exercisesElement.before(h5Element); // attach
h5Element.textContent = "H5 header"; // modify

let h6Element = document.createElement('h6'); // create
exercisesElement.after(h6Element); // attach
h6Element.textContent = "H6 header"; // modify

// Exercise
let exercise1 = document.querySelector('#exercise1');
exercise1.before('before');
exercise1.prepend('prepend');
exercise1.append('append');
exercise1.after('after');
// exercise1.replaceWith('replaced');

let button = document.createElement('button');
exercisesElement.prepend(button);
button.textContent = "Launch Meeting";
button.style.padding = "10px 25px";
button.style.color = "white";
button.style.borderRadius = "10px";
button.style.backgroundColor = "blue";
button.style.border = "none";

let shoppingList = ['Apple', 'Banana', 'Pinapple'];
// Create UL
let listElement = document.createElement('ul');
exercisesElement.prepend(listElement);
// Create LI
for (let i = 0; i < shoppingList.length; i++) {
    let listItemElement = document.createElement('li');
    listElement.append(listItemElement);
    listItemElement.textContent = shoppingList[i];
}

// 0-255 - Math.random() * 255

// Create TABLE
let table = document.createElement('table');
exercisesElement.prepend(table);
// Create LI
for (let i = 0; i < shoppingList.length; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    let td = document.createElement('td');
    tr.append(td);
    td.style.border = "1px solid black";
    td.textContent = shoppingList[i];
}

// How to copy
let button2 = button.cloneNode();
button2.textContent = "Hello";
exercisesElement.prepend(button2);

let list2 = listElement.cloneNode(true);
exercisesElement.prepend(list2);

// How to remove
button2.remove();


let colorful = document.createElement('div');
colorful.textContent = "HELLO";
colorful.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
document.body.prepend(colorful);
