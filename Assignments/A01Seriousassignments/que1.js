window.addEventListener("DOMContentLoaded", () => {
  //document.getElementById("add").disabled = true;

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let input = document.querySelector("#input").value;

  document.querySelector("#input").addEventListener("blur", () => {
    console.log("Blur event called");
    let input = document.querySelector("#input").value;
    console.log(input);

    if (searching(+input) >= 0) {
      document.getElementById("add").disabled = true;
      document.getElementById("edit").disabled = false;
      document.getElementById("delete").disabled = false;
      document.getElementById("view").disabled = false;
      document.getElementById("odd").disabled = false;
      document.querySelector("#status").innerText = "Number present in array";
      document.querySelector("#array").innerHTML = "";
      document.querySelector("#oddarray").innerHTML = "";
    } else {
      document.getElementById("add").disabled = false;
      document.getElementById("delete").disabled = true;
      document.getElementById("view").disabled = false;
      document.getElementById("edit").disabled = true;
      document.getElementById("odd").disabled = true;
      document.querySelector("#status").innerText =
        "Number not present in array";
      document.querySelector("#array").innerHTML = "";
      document.querySelector("#oddarray").innerHTML = "";
    }
  });

  document.querySelector("#add").addEventListener("click", () => {
    console.log("Add Clicked");
    document.getElementById("add").disabled = true;
    let inputs = document.querySelector("#input").value;
    arr.push(inputs);
    document.querySelector("#status").innerText = "Number added to array";
    document.getElementById("view").disabled = false;
    document.getElementById("odd").disabled = false;
    document.querySelector("#input").value = "";
  });

  document.querySelector("#edit").addEventListener("click", () => {
    let input = document.querySelector("#input").value;
    console.log(input);
    console.log("Edit Button Clicked");
    let indexno = searching(input);
    console.log(indexno);
    let newValue = prompt("Enter new number: ");
    arr[indexno] = newValue;
    console.log(arr[indexno]);
    // arr[searching(input)] = newValue;   also valid
    document.querySelector(
      "#status"
    ).innerText = `Number edited to ${newValue}`;
    document.querySelector("#input").value = "";
  });

  document.querySelector("#delete").addEventListener("click", () => {
    console.log("Delete Button Clicked");
    let input = document.querySelector("#input").value;
    confirm(`Do you want to delete ${input}`);
    arr.splice(searching(input), 1);
    document.querySelector("#status").innerText = "Number deleted from array";
    document.querySelector("#input").value = "";
  });

  document.querySelector("#view").addEventListener("click", () => {
    console.log("View Button Clicked");
    document.querySelector("#array").innerHTML = viewArray();
    document.querySelector("#status").innerText = "";
    document.querySelector("#input").value = "";
  });

  document.querySelector("#odd").addEventListener("click", () => {
    console.log("Odd array button clicked");
    document.querySelector("#oddarray").innerHTML = oddArray();
    document.querySelector("#status").innerText = "";
    document.querySelector("#input").value = "";
  });

  function searching(num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == num) {
        return i;
      }
    }
    return -1;
  }

  function viewArray() {
    let printArray = " ";
    for (let i = 0; i < arr.length; i++) {
      printArray += arr[i] + " ";
    }
    return printArray;
  }
  function oddArray() {
    let oddarray = " ";
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 != 0) oddarray += arr[i] + " ";
    }
    return oddarray;
  }

  console.log(viewArray());
});
