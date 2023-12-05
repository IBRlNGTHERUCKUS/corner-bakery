function generateMenu() {
    const content = document.querySelector('content');
    // Hero image and section name
    const hero = document.createElement('div');
    hero.textContent = 'Menu';
    hero.classList.add('hero');
    content.append(hero);
    // Menu items
    const menu = document.createElement(div);
    for (let item of menuItems) {
        // Create the necessary elements
        let itemContainer = document.createElement('div');
        let itemName = document.createElement('h2');
        let itemImage = document.createElement('img');
        let itemDesc = document.createElement('p');
        let itemPrice = document.createElement('p');
        // Assign classes
        itemContainer.classList.add('item-container');
        itemName.classList.add('item-name');
        itemImage.classList.add('item-image');
        itemDesc.classList.add('item-description');
        itemPrice.classList.add('item-price');
        // Attach items 
        itemContainer.append(itemImage, itemName, itemDesc, itemPrice);
        menu.append(itemContainer);
    }
    content.append(hero);
}

export function generateMenu();