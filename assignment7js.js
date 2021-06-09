var counter = 0;
class Expense {
    constructor(expenseName, expenseAmount, expenseDate) {
        this.expenseName = expenseName;
        this.expenseAmount = expenseAmount;
        this.expenseDate = expenseDate;
    }
    entryData() {
        let dumdiv = document.createElement("div");
        dumdiv.innerText = "\r\n";
        document.getElementById("form").appendChild(dumdiv);
        let div = document.createElement("div");
        div.style.paddingLeft = "80px";
        let h1 = document.createElement("h1");
        h1.innerText = "Expense-" + counter;
        div.appendChild(h1);
        let div2 = document.createElement("div");
        div2.innerText = "Name:- " + this.expenseName + "\r\n" + "Price:-" + this.expenseAmount + "\r\n" + "Date:-" + this.expenseDate;
        div2.style.paddingRight = "5px";
        div2.style.color = "blue";
        div.appendChild(div2);
        div.style.width = "40%";
        div.style.backgroundColor = "yellowgreen";
        document.getElementById("form").appendChild(div);
    }
}
function validate() {
    let inputs = document.querySelectorAll("input");
    let ans = true;
    if (inputs[0].value == "") {
        inputs[0].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[0].parentElement.previousElementSibling.style.display = "none";
        inputs[0].parentElement.previousElementSibling.previousElementSibling.style.display = "block";
        ans = false;
    }
    else if (!/^[a-zA-Z]+$/.test(inputs[0].value)) {
        inputs[0].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[0].parentElement.previousElementSibling.style.display = "none";
        inputs[0].parentElement.previousElementSibling.style.display = "block";
        ans = false;
    }
    else {
        inputs[0].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[0].parentElement.previousElementSibling.style.display = "none";
    }
    if (inputs[1].value == "") {
        inputs[1].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[1].parentElement.previousElementSibling.style.display = "none";
        inputs[1].parentElement.previousElementSibling.previousElementSibling.style.display = "block";
        ans = false;
    }
    else if (!/^[0-9]+$/.test(inputs[1].value)) {
        inputs[1].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[1].parentElement.previousElementSibling.style.display = "none";
        inputs[1].parentElement.previousElementSibling.style.display = "block";
        ans = false;
    }
    else {
        inputs[1].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[1].parentElement.previousElementSibling.style.display = "none";
    }
    if (inputs[2].value == "") {
        inputs[2].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[2].parentElement.previousElementSibling.previousElementSibling.style.display = "block";
        ans = false;
    }
    else {
        inputs[2].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
    }
    inputs[0].addEventListener("focusin", () => {
        inputs[0].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[0].parentElement.previousElementSibling.style.display = "none";
    });
    inputs[0].addEventListener("focusout", () => {
        if (inputs[0].value == "") {
            inputs[0].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
            inputs[0].parentElement.previousElementSibling.style.display = "none";
            inputs[0].parentElement.previousElementSibling.previousElementSibling.style.display = "block";
            ans = false;
        }
        else if (!/^[a-zA-Z]+$/.test(inputs[0].value)) {
            inputs[0].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
            inputs[0].parentElement.previousElementSibling.style.display = "none";
            inputs[0].parentElement.previousElementSibling.style.display = "block";
            ans = false;
        }
        else {
            inputs[0].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
            inputs[0].parentElement.previousElementSibling.style.display = "none";
        }
    });
    inputs[1].addEventListener("focusin", () => {
        inputs[1].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[1].parentElement.previousElementSibling.style.display = "none";
    });
    inputs[1].addEventListener("focusout", () => {
        if (inputs[1].value == "") {
            inputs[1].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
            inputs[1].parentElement.previousElementSibling.style.display = "none";
            inputs[1].parentElement.previousElementSibling.previousElementSibling.style.display = "block";
            ans = false;
        }
        else if (!/^[0-9]+$/.test(inputs[1].value)) {
            inputs[1].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
            inputs[1].parentElement.previousElementSibling.style.display = "none";
            inputs[1].parentElement.previousElementSibling.style.display = "block";
            ans = false;
        }
        else {
            inputs[1].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
            inputs[1].parentElement.previousElementSibling.style.display = "none";
        }
    });
    inputs[2].addEventListener("focusin", () => {
        inputs[2].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
        inputs[2].parentElement.previousElementSibling.style.display = "none";
    });
    inputs[2].addEventListener("focusout", () => {
        if (inputs[2].value == "") {
            inputs[2].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
            inputs[2].parentElement.previousElementSibling.style.display = "none";
            inputs[2].parentElement.previousElementSibling.previousElementSibling.style.display = "block";
            ans = false;
        }
        else {
            inputs[2].parentElement.previousElementSibling.previousElementSibling.style.display = "none";
            inputs[2].parentElement.previousElementSibling.style.display = "none";
        }
    });
    if (ans) {
        counter++;
        let obj = new Expense(
            inputs[0].value, inputs[1].value, inputs[2].value
        );
        obj.entryData();
    }
}