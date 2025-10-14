/*
    => Create Element
        -> createElement('html tag') - To add a new element to dynamically to your page.
        -> appendChild(newNode) - To add an element as the last child of a parent.
        -> insertBefore(newNode, referenceNode) - To insert an element before an existing child.
        -> firstElementChild - Returns the first child that is an element, and null otherwise.
        -> lastChild - The read-only lastChild property of the Node interface returns the last child of the node, or null if there are no child nodes.
*/
// Example:
/* ===> HTML
    <div id="parent">
        <p>Coffee</p>
        <p>Tea</p>
    </div>
*/
const createEl = document.createElement('p');
createEl.innerHTML = "water";
createEl.textContent = "water";
const parentDiv = document.getElementById("parent");
parentDiv.appendChild(createEl);
const referenceItem = parentDiv.firstElementChild;
parentDiv.insertBefore(createEl, referenceItem);

/*
    => Replacing Element
        -> replaceChild(newChild, oldChild) - Lets us swap existing elements with fresh ones.
*/
// Example:
/* ===> HTML
    <div id="myDiv">
        This is a div element.
    </div>
*/
const divElement = document.getElementById('myDiv');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
divElement.parentNode.replaceChild(newParagraph,divElement);

/*
    => Removing Element
        -> removeChild(node) - It allows us to remove specific elements.
*/
// Example:
/* ===> HTML
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <button id="removeItemBtn">Remove Last Item</button>
*/
const listElement = document.getElementById('myList');
const removeItemBtn = document.getElementById('removeItemBtn');
removeItemBtn.addEventListener('click', ()=>{
    const lastItem = listElement.lastChild;
    listElement.removeChild(lastItem);
});