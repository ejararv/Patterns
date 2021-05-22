const Pylek = {
        daneZewnetrzne: 10  
    } 

class SpecyficznyPylek {

    PrzykladowaMetoda(daneZewnetrzne){
        console.log('SpecyficznyPylek:' + daneZewnetrzne)
    }
}



const specyficznyPylek = new SpecyficznyPylek()
const pylek =  Pylek
var pylki = []

class FabrykaPylkow{
    constructor(pylki){
        this.pylki = []
    }
    FabrykaPylkow(){

        pylki.push({
            key:  'Q',
            value: specyficznyPylek
        })
        pylki.push({
            key:  'W',
            value: specyficznyPylek
        })
        pylki.push({
            key:  'E',
            value: specyficznyPylek
        })
    }
    GetPylek(key){
        console.log(pylki[key])
    }

}

const fabryka = new FabrykaPylkow()
const daneZewnetrzne = Object.create(Pylek,{
    daneZewnetrzne: {
        value: 42
    }
} )
// fq = fabryka.GetPylek('Q')
// fq.fabryka.PrzykladowaMetoda(--daneZewnetrzne)
// fw = fabryka.GetPylek('W')
// fw.PrzykladowaMetoda(--daneZewnetrzne)
// fe = fabryka.GetPylek('E')
// fe.PrzykladowaMetoda(--daneZewnetrzne)

console.log(fabryka.GetPylek('Q'))
