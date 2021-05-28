class Przedmiot {
    Zapytanie(){}
}

class KonkretnyPrzedmiot extends Przedmiot{
    constructor(){
        super()        
    }
    Zapytanie(){
        console.log("Wywołanie KonkretnyPrzedmiot.Zapytanie()")
    }
}

class Pelnomocnik extends Przedmiot{
    constructor(_konkretnyPrzedmiot){
        super()
        this._konkretnyPrzedmiot = new KonkretnyPrzedmiot()
    }
    Zapytanie(){
        if(this._konkretnyPrzedmiot == null){
            this._konkretnyPrzedmiot = new KonkretnyPrzedmiot()
        }
        this._konkretnyPrzedmiot.Zapytanie()
    }
}

const pelnomocnik = new Pelnomocnik()

console.log(pelnomocnik.Zapytanie())