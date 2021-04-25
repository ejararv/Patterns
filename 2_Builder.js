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
    constructor(ZlozCzescA, ZlozCzescB, ZwrocProduct){
        super()
        this._product = new Product
        ZlozCzescA(_product.Uzupelnij('Czesc X'))
        ZlozCzescB(_product.Uzupelnij('Czesc Y'))

        ZwrocProduct() 
        return _product
        
    }
}
class BudowniczyQW extends Budowniczy{
    constructor(ZlozCzescA, ZlozCzescB, ZwrocProduct){
        super()
        this._product = new Product
        ZlozCzescA(_product.Uzupelnij('Czesc Q'))
        ZlozCzescB(_product.Uzupelnij('Czesc W'))

        ZwrocProduct() 
        return _product
        
    }
}

class Kierownik extends Budowniczy {
    super()
    Skladaj(){
        budowniczy.ZlozCzescA()
        budowniczy.ZlozCzescB()
    }
}

const kierownik = new Kierownik()

const budowniczy1 = new Budowniczy()
const budowniczy2 = new Budowniczy()

kierownik.Skladaj(budowniczy1)

budowniczy1.ZwrocProduct().Pokaz()

kierownik.Skladaj(Budowniczy2)

budowniczy2.ZwrocProduct().Pokaz()



