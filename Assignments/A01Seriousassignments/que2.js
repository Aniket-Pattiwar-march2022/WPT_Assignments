document.addEventListener("DOMContentLoaded", () => {
  //document.getElementById("add").disabled = true;

  let employees = [
    {
      empno: 1,
      empname: "Abc",
      empsal: 750000,
      deptid: 1,
    },
    {
      empno: 2,
      empname: "pqr",
      empsal: 700000,
      deptid: 3,
    },
    {
      empno: 3,
      empname: "xyz",
      empsal: 850000,
      deptid: 2,
    },
  ];
  let empnoInput = document.querySelector("#empno").value;
  document.querySelector("#empno").addEventListener("blur", () => {
    console.log("Blur event");
    let empnoInput = document.querySelector("#empno").value;
    console.log(empnoInput);
    document.querySelector("#output").innerHTML = "";
    if (search(empnoInput) >= 0) {
      let emp = getData(search(empnoInput));
      document.getElementById("add").disabled = true;
      document.getElementById("delete").disabled = false;
      document.getElementById("view").disabled = false;
      document.getElementById("edit").disabled = false;
      document.querySelector("#status").innerText =
        "Employee Number already exists";
      document.querySelector("#empname").value = emp.empname;
      document.querySelector("#salary").value = emp.empsal;
      document.querySelector("#deptid").value = emp.deptid;
    } else {
      document.getElementById("add").disabled = false;
      document.getElementById("delete").disabled = true;
      document.getElementById("view").disabled = false;
      document.getElementById("edit").disabled = true;
      document.querySelector("#status").innerText =
        "Employee Number does not exists";
      document.querySelector("#empname").value = "";
      document.querySelector("#salary").value = "";
      document.querySelector("#deptid").value = "";
    }
  });

  document.querySelector("#add").addEventListener("click", () => {
    let newName = prompt("Enter New Name");
    let newSal = prompt("Enter new Salary");
    let newDeptID = prompt("Enter new Department ID");
    employees.push({
      empno: document.querySelector("#empno").value,
      empname: newName,
      empsal: newSal,
      deptid: newDeptID,
    });
    console.log("Added");
    document.querySelector("#status").innerText = "Added";
  });

  document.querySelector("#edit").addEventListener("click", () => {
    let empnoInput = document.querySelector("#empno").value;
    console.log(empnoInput);

    let newName = prompt("Enter New Name");
    let newSal = prompt("Enter new Salary");
    let newDeptID = prompt("Enter new Department ID");

    let index = search(empnoInput);
    console.log(search(empnoInput));
    employees[index].empname = newName;
    employees[index].empsal = newSal;
    employees[index].deptid = newDeptID;
    document.querySelector("#empname").value = newName;
    document.querySelector("#salary").value = newSal;
    document.querySelector("#deptid").value = newDeptID;
    console.log("Edited");
    document.querySelector("#status").innerText = "Edited";
  });

  document.querySelector("#delete").addEventListener("click", () => {
    let empnoInput = document.querySelector("#empno").value;
    console.log(search(empnoInput));
    employees.splice(search(empnoInput), 1);

    console.log("Employee Deleted");
    document.querySelector("#empno").value = "";
    document.querySelector("#empname").value = "";
    document.querySelector("#salary").value = "";
    document.querySelector("#deptid").value = "";
    document.querySelector("#status").innerText = "Deleted";
  });

  document.querySelector("#view").addEventListener("click", () => {
    document.querySelector("#output").innerHTML = view();
  });

  function search(num) {
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].empno == num) {
        return i;
      }
    }
    return -1;
  }

  function getData(index) {
    let employee = employees[index];
    return employee;
  }

  function view() {
    let output = "";
    for (let i = 0; i < employees.length; i++) {
      output += `Emp No: ${employees[i].empno} , Emp Name: ${employees[i].empname} , Emp Salary: ${employees[i].empsal} , Dep ID: ${employees[i].deptid} <br>`;
    }
    return output;
  }
});
