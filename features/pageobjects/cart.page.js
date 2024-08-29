import Page from "./page";
import { $, expect, browser } from "@wdio/globals";

class CartPage extends Page{

    get checkoutButton() {

    }

    get continueShoppingButton() {

    }

    open() {
        return super.open("cart.html")
    }

}

export default new CartPage();