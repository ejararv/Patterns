

class Strzelec {
    constructor(name,zycie,doswiadczenie,silaZniszczen) {
      this.name = name
      this.zycie = zycie
      this.doswiadczenie = doswiadczenie
      this.silaZniszczen = silaZniszczen
    }
  }
  
  class Czolg {
    constructor(name,zycie,doswiadczenie,silaZniszczen) {
      this.name = name
      this.zycie = zycie
      this.doswiadczenie = doswiadczenie
      this.silaZniszczen = silaZniszczen
    }
  }
  
 
  
  class Fabryka {
    static JednostkaTyp = Object.freeze({
      strzelec: Strzelec,
      czolg: Czolg
      
    })
  
    stworzJednostke(name, type, zycie, doswiadczenie, silaZniszczen ) {
      const fabryka = Fabryka.JednostkaTyp[type] 
      const jednostka = new fabryka(name, zycie, doswiadczenie, silaZniszczen )
      jednostka.type = type
      jednostka.define = function() {
        console.log(`${this.name} (${this.type}): `)
      }
      return jednostka
    }
  }
  
  const factory = new Fabryka()
  
  const jednostki = [
    factory.stworzJednostke( 'T34','czolg', 100, 0, 20 ),
    factory.stworzJednostke( 'Jan Kowalski','strzelec', 25, 0, 10 ),
    factory.stworzJednostke( 'Jan Nowak','strzelec', 23, 0, 12 )
    
  ]
  
console.log(jednostki)