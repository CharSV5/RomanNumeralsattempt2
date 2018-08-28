const kata = {
    translate: (num) => {
        let result = ""
        if (num >= 10) {
            result += "X"
            num -= 10
        }
        if (num >= 5) {
            result += "V"
            num -= 5
        }
        return result + 'I'.repeat(num)
    }
}

module.exports = kata;