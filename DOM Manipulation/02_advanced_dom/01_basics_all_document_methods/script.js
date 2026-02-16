console.log(document); 
// Logs the entire DOM tree (the root object representing the webpage).
// 👉 Output: #document (HTML structure of the page)

// NodeList (static)
let a = document.querySelectorAll('div'); 
// Returns a static NodeList of all <div> elements (does not auto-update if DOM changes).
console.log(a); 
// 👉 Output: NodeList(…) [div, div, …]

// HTMLCollection (live)
let b = document.getElementsByTagName('div'); 
// Returns a live HTMLCollection of all <div> elements (updates dynamically with DOM changes).
console.log(b); 
// 👉 Output: HTMLCollection(…) [div, div, …]

// Single element by ID
let c = document.getElementById('h1Content'); 
// Returns the element with id="h1Content" (IDs are meant to be unique).
console.log(c); 
// 👉 Output: <h1 id="h1Content">…</h1>

// HTMLCollection by class
let d = document.getElementsByClassName('hello'); 
// Returns a live HTMLCollection of elements with class="hello".
console.log(d); 
// 👉 Output: HTMLCollection(…) [div.hello, p.hello, …]

// First matching element
let e = document.querySelector('div'); 
// Returns the first <div> element found (querySelector gives only one match).
console.log(e); 
// 👉 Output: <div>…</div>

// NodeList of elements with same ID
let f = document.querySelectorAll('#h1Content'); 
// Returns NodeList of all elements with id="h1Content" (IDs should be unique, but possible duplicates).
console.log(f); 
// 👉 Output: NodeList(…) [<h1 id="h1Content">…</h1>, …]

// NodeList by class
let g = document.querySelectorAll('.hello'); 
// Returns NodeList of all elements with class="hello" (static list).
console.log(g); 
// 👉 Output: NodeList(…) [div.hello, p.hello, …]
