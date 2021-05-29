class Pamiatka {
    constructor(stan){
        this.stan = stan
    }
}

const Inicjator = {
    save: _stan => new Pamiatka(_stan),
    restore: pamiatka => pamiatka.stan
}

class Zarzadzajacy {
    constructor(){
        this.stany = []
    }

    UtworzPamiatke(pamiatka){
        this.stany.push(pamiatka)
    }
    UstawPamiatke(index){

        if (index != 0)
             return this.stany[index] 
        else 
             console.log('Przywracanie stanu...')
             return this.stany[index] 
    }
}

const zarzadzajacy = new Zarzadzajacy()

zarzadzajacy.UtworzPamiatke(Inicjator.save('Włącz'))
zarzadzajacy.UtworzPamiatke(Inicjator.save('Wyłącz'))


console.log(Inicjator.restore(zarzadzajacy.UstawPamiatke(1)))
console.log(Inicjator.restore(zarzadzajacy.UstawPamiatke(0)))