class Polecenie {
    constructor(initialValue = 0) {
        this.num = initialValue
    }

    Odbiorca(){
        return `Wywołano Odbiorca.Uruchom()`
    }
} 

class ObjectWywolujacy {
    constructor(subject) {
        this.subject = subject
        this._polecenieExecuted = []
    }

    Uruchom(_polecenie){
        this._polecenieExecuted.push(_polecenie)
        return this.subject[_polecenie]()
    }
}

const x = new ObjectWywolujacy(new Polecenie())

console.log(x.Uruchom('Odbiorca'))


console.log(x._polecenieExecuted)
