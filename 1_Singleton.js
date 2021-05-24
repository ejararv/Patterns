class Singleton {
    constructor(_instancja) {
        if (Singleton.exist) {
            return Singleton.instance
        }


        Singleton.instance = this
        Singleton.exist = true
        this._instancja = _instancja

    }

    getInstancja(){
        return this._instancja
    }
}

const singletonPierwszy = new Singleton('MongoDB')
console.log(singletonPierwszy.getInstancja())      
const singletonDrugi = new Singleton('sql')
console.log(singletonDrugi.getInstancja())    
