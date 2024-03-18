describe("Any", () => {
    it("should support javascript", () => {
        const person : any = {
            name : "Joe",
            age : 10,
            balance : 1000
        }

        console.log(person.name);
        console.log(person.age);
        console.log(person.balance);
        
    })
})