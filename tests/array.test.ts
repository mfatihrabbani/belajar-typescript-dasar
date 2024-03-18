describe("Array", () => {
    it("it should to javascript", () => {
        const names : string[] = ["andi", "budi", "joko"]
        const values : number[] = [1, 2, 3]

        console.log(names)
        console.log(values)
    })

    it("should readonly array", () => {
        const hobbies : ReadonlyArray<string> = ["membaca", "menulis", "menonton"] 

        console.log(hobbies)
        // hobbies[1] = "Main game"
        console.log(hobbies[0])
        console.log(hobbies[1])
        console.log(hobbies[2])
    })

    it("should support tuple", () => {
        const person : readonly [string, string, number] = ["Nama", "Saya", 1]

        console.log(person[0]);
        console.log(person[1]);
        console.log(person[2]);

        // person[0] = "Hallo"

        // console.log("update variabel", person[0])
        
    })
})