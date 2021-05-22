class PodSystemPierwszy {
    MetodaPierwsza(){
        console.log(' PodSystemPierwszy Metoda')
    }
}
class PodSystemDrugi {
    MetodaDruga(){
        console.log(' PodSystemDrugi Metoda')
    }
}
class PodSystemTrzeci {
    MetodaTrzecia(){
        console.log(' PodSystemTrzeci Metoda')
    }
}
class PodSystemCzwarty {
    MetodaCzwarta(){
        console.log(' PodSystemCzwarty Metoda')
    }
}
const _pierwszy = new PodSystemPierwszy()
const _drugi = new PodSystemDrugi()
const _trzeci = new PodSystemTrzeci()
const _czwarty = new PodSystemCzwarty()

class Fasada {
    MetodaA(){
        console.log(`MetodaA() ---`)
        _pierwszy.MetodaPierwsza()
        _drugi.MetodaDruga()
        _czwarty.MetodaCzwarta()    
    }
    MetodaB(){
        console.log('\nMetodaB() ---- ')
        _drugi.MetodaDruga()
        _trzeci.MetodaTrzecia()
    }

}
const fasada = new Fasada()
console.log(fasada.MetodaA())
console.log(fasada.MetodaB())