class Product{
    // name;
    // price;
    // description;
    constructor (n,p,d){
        this.name=n;
        this.price =p;
        this.description = d;
       // return "10"; // Primitive -> No effect
       // return {x : 10};
        return this; // If you don't return anything, it is equal to saying return this

    }
    display(){
        // Print the product
    }

}
const p = new Product('Bag',100, 'A Cool bag');
console.log(p);