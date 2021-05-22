class Znak {
    constructor(Symbol, Rozmiar){
        this.Symbol = Symbol
        this.Rozmiar = Rozmiar
    }
    Rysuj(){
        
    }
}

class HashTable {
    constructor() {
      this.values = {};
      this.length =  0;
      this.size =  0;
    }
    calculateHash(key) {
        return key.toString().length % this.size;
       }
       add(key, value) {
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
           this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
           this.length++;
        }
        this.values[hash][key] = value;
      }
      search(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
          return this.values[hash][key];
        } else {
          return null;
        }
     }
   }





class FabrykaZnakow {
    constructor(Rozmiar,znaki,znak){
       this.Rozmiar= Rozmiar
       znaki = new HashTable()
       znak = 24
    }
     GetZnak(key){
        this.znak = znaki[key] 
        if (znak == null){
            znak = new SpecyficznyZnak(key, 24)
            znaki.add(key,znak)
        }
        return znak

    }
    
}


class SpecyficznyZnak extends Znak {
    constructor(Symbol,Rozmiar){
        super(Symbol,Rozmiar)
    }
    SpecyficznyZnak(s, z){
        this.Symbol = s
        this.Rozmiar = z
    }

    Rysuj(){
        console.log(Symbol + 'w rozmiarze czcionki' + Rozmiar)
    }
}

const s = ['b', 's', 'A', 'S', 'W', 'b', 'b', 's']
const f = new FabrykaZnakow()


    console.log(s.forEach(f.GetZnak(f.znak).Rysuj()))
