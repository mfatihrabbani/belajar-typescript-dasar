describe("Null-Undefined", () => {
    it("should support null and undefined", () => {
        const sayHello = (name? : string | null) => {
            if(name) {
                console.log(`Hello ${name}`);
            }else {
                console.log("Hello");
            }
        }

        sayHello("Nama")

        const name : string | undefined = undefined
        sayHello(name)
        sayHello(null)
    })
})