const kata = {
    translate: (num) => {
        let result = ""
        while (num >= 10) {
            result += "X"
            num -= 10
        }
        while (num >= 9) {
            result += "IX"
            num -= 9
        }
        while (num >= 5) {
            result += "V"
            num -= 5
        }
        while (num >= 4) {
            result += "IV"
            num -= 4
        }

        while (num >= 1) {
            result += "I"
            num -= 1
        }
        
        return result 
    }
}

module.exports = kata;