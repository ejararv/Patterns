class ElementDocelowy {
    metodaA() {
        console.log('Wywołano ElementDocelowy MetodaA()')
    }
}

class Adaptowany {
    metodaAdaptowanego(){
        console.log(`Wywołano MetodaAdaptowanego()`)
    }
}

class Adapter {
     _adaptowany = new Adaptowany()
     metodaA(){
         _adaptowany.metodaAdaptowanego()
     }
}

class Program {
    
        elementDocelowy = new ElementDocelowy()
        
    
}

const program = new Program()
console.log(program.elementDocelowy.metodaA())