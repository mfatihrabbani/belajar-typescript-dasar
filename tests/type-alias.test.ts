import {Category, Product} from "../src/type-alias"

describe("Type Alias", () => {
    it("should support in typescript", () => {
        const category : Category = {
            id : "id",
            name : "fashion"
        }

        const product : Product = {
            id : "id",
            name : "Parfum",
            price : 53000,
            category : category
        }

        console.log(product.name);
        console.log(product);
        
    })
})