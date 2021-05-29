class Stan {
	constructor(name, kontext) {
		this.name = name;
		this.kontext = kontext;
	}

	Odpowiedz() {
		return new this.kontext();
	}
}

class SpecyficznyStanA extends Stan {
	constructor() {
		super('specyficznyStanA', SpecyficznyStanB);
	}
}

class SpecyficznyStanB extends Stan {
	constructor() {
		super('specyficznyStanB', SpecyficznyStanA);
	}
}



class Wywolaj {
	constructor() {
		this.state = new SpecyficznyStanA();
	}

	Dalej() {
		this.state = this.state.Odpowiedz();
	};
}
const k = new Wywolaj()
console.log(k.state.name)
k.Dalej()
console.log(k.state.name)
k.Dalej()
console.log(k.state.name)
k.Dalej()
console.log(k.state.name)





