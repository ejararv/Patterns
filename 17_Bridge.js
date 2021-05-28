class Implemementacja {
    MetodaImplementacji(){

    }
}
const impl = new Implemementacja()
class Abstrakcja {
    constructor(implemementacja, Implemementacja){
        this.implemementacja = impl
        var Implemementacja = new Set()
        Implemementacja.add()
        
    }

    MetodaImplementacji(){
        this.implemementacja.MetodaImplementacji()
        return this
    }

}
class AbstrakcjaPochodna extends Abstrakcja{
    constructor(){
        super()
    }
    MetodaImplementacji(){
        this.implemementacja.MetodaImplementacji()
        return this
    }
}

class SpecyficznaImplementacja extends Implemementacja{
    constructor(){
        super()
    }
    MetodaImplementacji(){
        console.log('SpecyficznaImplementacja MetodaImplementacji')
    }
}
class JakasInnaImplementacja extends Implemementacja{
    constructor(){
        super()
    }
    MetodaImplementacji(){
        console.log('JakasInnaImplementacja MetodaImplementacji')
    }
}

const sp = new SpecyficznaImplementacja()
const ja = new JakasInnaImplementacja()

const abs = new Abstrakcja()

const data = {sp,ja}
abs.Implemementacja = data


console.log(abs.MetodaImplementacji())