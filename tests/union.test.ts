describe("Union", () => {
    it("should union supprt in javascript", () => {
        let sample : number | string | boolean = "nama"

        console.log(sample);

        sample = 10
        console.log(sample)
        
        sample = false
        console.log(sample);

    })

    it("should support typeof operator", () => {
        function process(value: string | number | boolean) {
            if(typeof value == "string"){
                return value.toUpperCase()
            }else if(typeof value == "number"){
                return value + 1
            }else {
                return !value
            }
        }
        expect(process("nama")).toBe("NAMA")
        expect(process(10)).toBe(11)
        expect(process(true)).toBe(false)

    })
})