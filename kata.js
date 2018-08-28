const numeralChanger = (value, numeral) => {
    return {value: value, numeral: numeral};
};

const numerals = [
    numeralChanger(10, 'X')
]

const kata = {
    translate: (num) => {
        let result = ""
        numerals.forEach(function(item) {
            while (num >= item.value) {
                result += item.numeral;
                num -= item.value;
            }
        })
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