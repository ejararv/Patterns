const Prototyp = {
  id: "id",

  klonuj() {
    console.log(`Sklonowano: ${this.Id}`);
  }
}

const PrototypX = Object.create(Prototyp, {
  Id: {
    value: "2",
  }
})

const PrototypY = Object.create(Prototyp, {
  Id: {
    value: "1",
  }
})

console.log(PrototypY.__proto__ === Prototyp)
console.log(PrototypX.__proto__ === Prototyp)

PrototypX.klonuj()
PrototypY.klonuj()
