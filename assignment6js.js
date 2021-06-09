class Employee {
    constructor(Name, Id, Department, Designation, BasicSalary, BirthYear, JoinYear) {
        this.Name = Name;
        this.Id = Id;
        this.Depatment = Department;
        this.Designation = Designation;
        this.BasicSalary = Number(BasicSalary);
        this.BirthYear = Number(BirthYear);
        this.JoinYear = Number(JoinYear);
    }
    findTotalSalary() {
        let x = 0.15 * this.BasicSalary;
        if (2021 - this.JoinYear > 10) {
            x += 500;
        }
        if (this.BasicSalary <= 500000) {
            ;
        }
        else if (this.BasicSalary <= 750000) {
            x = x - (x * 0.05);
        }
        else if (this.BasicSalary <= 500000) {
            x = x - (x * 0.075);
        }
        else if (this.BasicSalary <= 500000) {
            x = x - (x * 0.15);
        }
        else {
            x = x - (x * 0.20);
        }
        return x;
    }
    findCurrAge() {
        return 2021 - this.BirthYear;
    }
    employeeDetails() {
        console.log("Employee's Name:" + this.Name + "," + "Employee's Id:" + this.Id + "Employee's Department:" +
            this.Depatment + "Employee's Designation:" + this.Designation + "Employee's Salary(Yearly):" + this.BasicSalary +
            "Employee's birth-year:" + this.BirthYear + "Employee's joining-year:" + this.JoinYear);
    }
}
function validate() {
    let inputs = document.querySelectorAll("input");
    let ans = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].parentElement.parentElement.previousElementSibling.classList.remove("d-none");
            inputs[i].parentElement.parentElement.previousElementSibling.classList.add("text-danger");
            ans = false;
        }
    }
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("focusout", function () {
            if (inputs[i].value == "") {
                inputs[i].parentElement.parentElement.previousElementSibling.classList.remove("d-none");
                inputs[i].parentElement.parentElement.previousElementSibling.classList.add("text-danger");
                ans = false;
            }
        });
    }
    if (ans) {
        let obj = new Employee();
        obj.Name = inputs[0].value;
        obj.Id = inputs[1].value;
        obj.Depatment = inputs[2].value;
        obj.Designation = inputs[3].value;
        obj.BasicSalary = Number(inputs[4].value);
        obj.BirthYear = Number(inputs[5].value);
        obj.JoinYear = Number(inputs[6].value);
        alert("Monthly Salary= Rs."+obj.findTotalSalary()+"\r\n"+"Number of Years worked="+obj.findCurrAge()+"years");
    }
}
