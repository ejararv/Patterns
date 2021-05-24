class Strategia {

    RozwiazProblem(){
        return this.problem
    }
}

class SpecyficznaStrategiaA extends Strategia{
    constructor(){
        super()
        this.problem = `"Wywołano SpecyficznaStrategiaA.RozwiazProblem()"`
    }
}

class SpecyficznaStrategiaB extends Strategia{
    constructor(){
        super()
        this.problem = `"Wywołano SpecyficznaStrategiaB.RozwiazProblem()"`
    }

}

class SpecyficznaStrategiaC extends Strategia{
    constructor(){
        super()
        this.problem = `"Wywołano SpecyficznaStrategiaC.RozwiazProblem()"`
    }

}

class Kontekst {
    ZwrocProblem(_strategia) {
        return _strategia.RozwiazProblem()
    }
}


const kontekst = new Kontekst()
console.log(kontekst.ZwrocProblem(new SpecyficznaStrategiaA))
console.log(kontekst.ZwrocProblem(new SpecyficznaStrategiaB))
console.log(kontekst.ZwrocProblem(new SpecyficznaStrategiaC))