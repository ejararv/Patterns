class Product {
    constructor(_czesci = []){
        this._czesci = _czesci
        return this
    }

    Uzupelnij(){
        this.czesc = new Product.czesc
        return this
    }
    Pokaz(){
        this._czesci.findIndex(function(czesc) {
            console.log(czesc)
        })
        
    }
}

class Budowniczy {
    ZlozCzescA(){

    }
    ZlozCzescB(){

    }
    ZwrocProduct(){

    }

}

class BudowniczyXY extends Budowniczy{
    constructor()
}


