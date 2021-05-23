class Abstrakt {
    constructor(initValue = 33){
        this.zobowiazanie = initValue
    }

    Obsluz(value) {
        this.zobowiazanie += value
        return this
    }
}

const sum1 = new Abstrakt()
console.log(sum1.Obsluz(5).Obsluz(11).Obsluz(33).Obsluz(35).zobowiazanie)