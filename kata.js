const kata = {
    translate: (num) => {
        let result = ""
        if (num >= 5) {
            result += 5
            num -= 5
        }
        return result + 'I'.repeat(num)
    }
}

module.exports = kata;