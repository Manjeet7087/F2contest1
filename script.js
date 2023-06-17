// Given array
const employees = [
  { id: 1, name: "Manjeet", age: "18", profession: "developer" },
  { id: 2, name: "Mohit", age: "20", profession: "developer" },
  { id: 3, name: "Arvind", age: "19", profession: "admin" }
];

// Function 1: PrintDeveloperbyMap()
function PrintDeveloperbyMap() {
  const developers = employees
    .filter(employee => employee.profession === "developer")
    .map(employee => employee.name);
  
  console.log(developers);
}

// Function 2: PrintDeveloperbyForEach()
function PrintDeveloperbyForEach() {
  const developers = [];
  
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      developers.push(employee.name);
    }
  });
  
  console.log(developers);
}

// Function 3: addData()
function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(newEmployee);
}

// Function 4: removeAdmin()
function removeAdmin() {
  const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
  console.log(filteredEmployees);
}

// Function 5: ConcatinateArray()
function ConcatinateArray() {
  const additionalEmployees = [
    { id: 5, name: "tiwari", age: "22", profession: "developer" },
    { id: 6, name: "gupta", age: "21", profession: "admin" },
    { id: 7, name: "rajput", age: "19", profession: "developer" }
  ];
  
  const concatenatedArray = employees.concat(additionalEmployees);
  console.log(concatenatedArray);
}