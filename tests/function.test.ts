describe("Function", () => {
    it("should support function", () => {
        function sayHello(name :string) :string {
            return `Hello ${name}`
        }

        expect(sayHello("Budi")).toBe("Hello Budi")

        function printHello(name: string): void {
            console.log(`Hello ${name}`);
        }

        printHello("Budi")
    })
})