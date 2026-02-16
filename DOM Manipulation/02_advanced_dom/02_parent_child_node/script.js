let falna = document.querySelector('#falna');
// Selects the <div id="falna"> element which contains h2, p, and another div.
console.log(falna);
// 👉 Output: <div id="falna">…</div>

console.log(falna.firstChild);
// Returns the first child node inside #falna. Because of whitespace/line breaks,
// this is often a #text node before <h2>. 
// 👉 Output: #text "\n        " OR <h2 id="heading">Hello from H2</h2> (depends on whitespace)

console.log(falna.lastChild);
// Returns the last child node inside #falna. Again, whitespace counts as a node,
// so it may be a #text node after the inner <div>. 
// 👉 Output: #text "\n    " OR <div id="heading">hello from div</div>

console.log(falna.COMMENT_NODE); // 👉 Output: 8 (numeric constant for comment nodes)
console.log(falna.ELEMENT_NODE); // 👉 Output: 1 (numeric constant for element nodes)

console.log(falna.firstElementChild);
// 👉 Returns the first *element node* inside <div id="falna">.
// In your case, that’s <h2 id="heading">Hello from H2</h2>

console.log(falna.lastElementChild);
// 👉 Returns the last *element node* inside <div id="falna">.
// In your case, that’s <div id="heading">hello from div</div>

console.log(falna.children);
// 👉 Returns an HTMLCollection of only the element children inside <div id="falna">.
// In your case: [<h2 id="heading">Hello from H2</h2>, <p id="heading">Hello from p</p>, <div id="heading">hello from div</div>]

console.log(falna.childNodes);
// 👉 Returns a NodeList of *all* child nodes (elements, text, comments).
// In your case: [#text "\n        ", <h2 id="heading">Hello from H2</h2>, #text "\n        ", <p id="heading">Hello from p</p>, #text "\n        ", <div id="heading">hello from div</div>, #text "\n    "]

console.log(falna.childNodes.length);
// 👉 Counts *all* child nodes inside <div id="falna"> (elements + text nodes).
// Because of whitespace/newlines, you’ll see more than just the 3 elements.
// In your case: 7 (text, h2, text, p, text, div, text)

console.log(falna.children.length);
// 👉 Counts only the element children inside <div id="falna">.
// In your case: 3 (<h2>, <p>, <div>)