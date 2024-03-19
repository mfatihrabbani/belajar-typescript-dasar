import {CustomerType} from "../src/enum"

describe("Enum", () => {
    it("should support in typescript", () => {
        const customerType = CustomerType.GOLD
        console.log(customerType)
    })
})