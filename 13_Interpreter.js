class Kontext {

}

const kontext = new Kontext()

class WyrazenieAbstrakcyjne{
    constructor(kontext){
        this.kontext = kontext
    }

    Interpretuj(kontext){
        return kontext
    }
}

class WyrazenieTerminalne{
   
        Interpretuj(){
            return `Wywołano WyrazenieTerminalne.Interpretuj()`
        }
    
}

class WyrazenieNieterminalne {
    Interpretuj(){
        return `Wywołano WyrazenieNieTerminalne.Interpretuj()`
    }

}

const wyrazenia = []
wyrazenia.push(new WyrazenieTerminalne())
wyrazenia.push(new WyrazenieNieterminalne())
wyrazenia.push(new WyrazenieTerminalne())
wyrazenia.push(new WyrazenieTerminalne())



console.log(wyrazenia)