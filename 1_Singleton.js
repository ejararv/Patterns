class Database {
    constructor(data) {
        if (Database.exist) {
            return Database.instance
        }


        Database.instance = this
        Database.exist = true
        this.data = data

    }

    getData(){
        return this.data
    }
}

const baza = new Database('baza MongoDB')
console.log(baza.getData())

const sqlBaza = new Database('baza sql')
console.log(sqlBaza.getData())