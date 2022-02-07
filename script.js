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

let h1Element = document.createElement ('h1'); // create
h1Element.textContent = "H1 header"; // modify
exercisesElement.append(h1Element); // attach

let h2Elemet = document.createElement ('h2'); 
h2Elemet.textContent = "H2 header";
exercisesElement.append(h2Elemet);