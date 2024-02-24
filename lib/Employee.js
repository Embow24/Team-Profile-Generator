// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        console.log(`${this.name}`)
        return this.name
    }

    getID(){
        console.log(`ID: ${this.id}`)
        return this.id
    }

    getEmail(){
        console.log(`Email: ${this.email}`)
        return this.email
    }

    getRole(){
        return 'Employee'
    }
}

module.exports = Employee