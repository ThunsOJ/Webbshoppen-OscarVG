//Skapar ett object av cart som ska innehålla flera produkter.
export default class Cart {
    constructor(){
        this.productList = [];
        this.maxItems = 50;
        this.itemCount = 1;
        this.customer = "";
    }
}