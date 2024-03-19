import {Seller} from "../src/seller"
import {Employee, Manager} from "../src/employee"

describe("Interface", () => {
    it("should support in typescript", () => {
        const seller : Seller = {
            id : "10",
            name : "Joko",
            nib : "101010010",
            npwp : "100000000"
        }

        seller.id = "20"

        console.log(seller);
        
    })

    it("should support interface function", () => {
        interface AddFunction {
            (value1 : number, value2 : number) : number
        }

        const add : AddFunction = (angka1 : number, angka2 : number) : number => {
            return angka1 + angka2
        }

        expect(add(2, 2)).toBe(4)
    })

    it("should support interface indexable", () => {
        interface StringArray {
            [index : number] : string
        }

        const stringArray : StringArray = ["Nama1", "Nama2", "Nama3"]

        console.log(stringArray)
    })

    it("should support interface indexable string key", () => {
        interface Dictionary {
            [key : string] : string
        }

        const dictionary : Dictionary = {
            "name" : "nama",
            "address" : "jakarta"
        }

        expect(dictionary["name"]).toBe("nama")
        expect(dictionary["address"]).toBe("jakarta")
    })

    it("should support extend in typescript interface", () => {
        const employee : Employee = {
            id : "10",
            name : "name",
            division : "IT"
        }

        console.log(employee);

        const manager : Manager = {
            id : "20",
            name : "Sultan",
            division : "IT",
            numberOfEmployee : 10
        }

        console.log(manager);
    })
})