// Given array
const employees = [
  { id: 1, name: "Manjeet", age: "18", profession: "developer" },
  { id: 2, name: "Mohit", age: "20", profession: "developer" },
  { id: 3, name: "Arvind", age: "19", profession: "admin" }
];

//  PrintDeveloperbyMap()
function PrintDeveloperbyMap() {
  const developers = employees
    .filter(employee => employee.profession === "developer")
    .map(employee => employee.name);
  
  console.log(developers);
}

//  PrintDeveloperbyForEach()
function PrintDeveloperbyForEach() {
  const developers = [];
  
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      developers.push(employee.name);
    }
  });
  
  console.log(developers);
}

// addData()
function addData() {
  const newEmployee = { id: 4, name: "ravi", age: "20", profession: "trainee" };
  employees.push(newEmployee);
  console.log(newEmployee);
}

//  removeAdmin()
function removeAdmin() {
  const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
  console.log(filteredEmployees);
}

//  ConcatinateArray()
function concatenateArray() {
  const newArray = [
    {id:5, name:"mkt", age:"22", profession:"developer"},
    {id:6, name:"mkg", age:"25", profession:"admin"},
    {id:7, name:"akg", age:"23", profession:"developer"}
  ];

  const concatenatedArray = employees.concat(newArray);
  console.log(concatenatedArray);

  
  
}
