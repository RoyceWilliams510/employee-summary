// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role= "Employee"
    }
    getRole(){
        return this.role;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
}
const tester = new Employee("dave",5,"dave@gmail");
console.log(tester);
module.exports = Employee