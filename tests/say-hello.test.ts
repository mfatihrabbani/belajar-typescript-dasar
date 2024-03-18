import { sayHello } from "../src/say-hello"

describe("hello", function() {
    it("should return hello name", function (){
        expect(sayHello("Nama")).toBe("Hello Nama")
    })
})