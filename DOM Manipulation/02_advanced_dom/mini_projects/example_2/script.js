function changeTagName(oldNode, newTagName) {
    // ✅ Ensure the provided node is a valid DOM Element
    if (!(oldNode instanceof Element)) {
        console.log('Invalid node');
        return null; // Exit early if it's not an element
    }

    // ✅ Create a new element with the desired tag name
    let newEle = document.createElement(newTagName);

    // ✅ Copy over the text content from the old element
    // ⚠️ This only copies text, not child elements (nested tags will be lost), so use innerHTML
    newEle.innerText = oldNode.innerText;

    // 🔍 Debugging: log the new element and the old element's attributes
    console.log(newEle);
    console.log(oldNode.attributes);

    // ✅ Loop through all attributes of the old element
    for (let attr of oldNode.attributes) {
        console.log(attr); // Logs the attribute object
        console.log(attr.name, attr.value); // Logs name and value separately

        // ✅ Set each attribute on the new element
        newEle.setAttribute(attr.name, attr.value);
    }

    // ✅ Replace the old element in the DOM with the new one
    oldNode.replaceWith(newEle);

    // ✅ Return the new element so you can use it later if needed
    return newEle;
}

// Example usage:
// Select the element with class "box"
let div = document.querySelector('.box');

// Replace <div class="box"> with <p class="box">
changeTagName(div, 'p');
