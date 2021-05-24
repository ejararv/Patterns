class KlasaAbstrakcyjna {
    
    MetodaSzablonowa(){
        this.ZrobCos 
        this.JakasInnaMetoda 
        return this
    }
}

class SpecyficznaKlassaA extends KlasaAbstrakcyjna{
    constructor(){
        super()
        this.ZrobCos =  `SpecyficznaKlasaA.ZrobCos()`
        this.JakasInnaMetoda = `SpecyficznaKlasaA.JakasInnaMetoda()`
        
    }
}

class SpecyficznaKlassaB extends KlasaAbstrakcyjna{
    constructor(){
        super()
        this.ZrobCos = `SpecyficznaKlasaB.ZrobCos()`
        this.JakasInnaMetoda = `SpecyficznaKlasaB.JakasInnaMetoda()`
    
    }
   
}

const a = new SpecyficznaKlassaA(new KlasaAbstrakcyjna())

const b = new SpecyficznaKlassaB(new KlasaAbstrakcyjna())

console.log(a.MetodaSzablonowa())
console.log(b.MetodaSzablonowa())
