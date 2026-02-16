let h1 = document.querySelector('h1');
console.log(h1);

console.log(h1.firstChild);       // Text node: "Hello World"
console.log(h1.firstChild.nodeName); // "#text"
console.log(h1.firstChild.tagName); // undefined

// changing the HTML :-
// ----------------------
// 1. tagName(readOnly)
console.log(h1.tagName); // returns tag name in uppercase

// 2. nodeName(readOnly)
console.log(h1.nodeName); // returns tag name, or other node types like #text, #comment

// 3. innerHTML
let h2 = document.querySelector('h2')
console.log(h2.innerHTML);
console.log(h2.firstChild)
console.log(h2.firstElementChild)

// 4. innnerText
console.log(h1.innerText);
h1.innerText = 'Hello          from VS Code 🤣🤣' // setting the content
console.log(h1.innerText); //respects and avoid the spaces

// 5. textContent
console.log(h1.textContent); // give as it is as in the html