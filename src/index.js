import { generateMenu } from "./genMenu";
import restaurantData from "./restaurantData.json"
const menuItems = [];
for (let menuItem of restaurantData.menuItems) {
    menuItems.push(menuItem);
}
console.log(menuItems);

generateMenu(menuItems);