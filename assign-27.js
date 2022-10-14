class Employee {
    static employees = []
    constructor(id, name, desg, dept, isMarried, joiningDate) {
        this.id = id;
        this.name = name;
        this.desg = desg;
        this.dept = dept;
        this.isMarried = isMarried;
        this.joiningDate = joiningDate;
    }
    static addEmployee(emp) {
        this.employees.push(emp)
    }


    static showAllEmplyeeDetails() {
        console.log("--------------------------------\n Details Of All the Employee");
        console.log("ID\tName\tDept\tDesg\tSal");
        for (let i = 0; i < this.employees.length; i++) {
            console.log(this.employees[i].id + "\t" + this.employees[i].name + "\t" + this.employees[i].dept + "\t" + this.employees[i].desg + "\t" + this.employees[i].sal + "\t");
        }

    }
    showDetails() {
        console.log('--------------------------------\nDetails of ' + this.name + ' are :')
        console.log(' Id: ' + this.id + '\n' + 'Designation: ' + this.desg + '\n' + 'Department: ' + this.dept + '\n' + 'Married: ' + this.isMarried + '\n' + 'Joining Date: ' + this.joiningDate)
    }


}

const employee1 = new Employee(1, 'John', 'Manager', 'HR', 'yes', 10 / 9 / 2019)
const employee2 = new Employee(2, 'Jay', 'Developer', 'IT', 'No', 15 / 6 / 2020)
const employee3 = new Employee(3, 'Jess', 'Asst Manager', 'HR', 'yes', 25 / 10 / 2021)

employee1.showDetails();
employee2.showDetails();
employee3.showDetails();

Employee.addEmployee(employee1);
Employee.addEmployee(employee2);
Employee.addEmployee(employee3);

Employee.showAllEmplyeeDetails();


