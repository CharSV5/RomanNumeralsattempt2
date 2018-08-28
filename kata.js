const numeralChanger = (value, numeral) => {
    return {value: value, numeral: numeral};
};

const numerals = [
    numeralChanger(50, 'L'),
    numeralChanger(40, 'XL'),
    numeralChanger(10, 'X'),
    numeralChanger(9, 'IX'),
    numeralChanger(5, 'V'),
    numeralChanger(4, 'IV'),
    numeralChanger(1, 'I'),

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
        
        return result 
    }
}

module.exports = kata;