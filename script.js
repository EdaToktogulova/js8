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

