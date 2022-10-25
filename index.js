// Write your solution in this file!
const employee = {}
employee.name = "";
employee.streetAdress = "";

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newUpdateEmployeeWithKeyAndValue = {...employee};

    newUpdateEmployeeWithKeyAndValue[key] = value;
    return newUpdateEmployeeWithKeyAndValue;
}
function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}




