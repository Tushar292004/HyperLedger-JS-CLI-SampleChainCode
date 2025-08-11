const args = process.argv;
const functionName = args[2];

// Initial sample data
let employees = [
    { empID: "E001", name: "Alice", department: "HR", salary: 50000, lastPaidDate: "" },
    { empID: "E002", name: "Bob", department: "IT", salary: 60000, lastPaidDate: "" }
];

// ====== initLedger ======
if (functionName === "initLedger") {
    setTimeout(() => {
        console.log("Ledger initialized with sample employees:");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(employees, null, 2));
    }, 4000);
}

// ====== addEmployee ======
if (functionName === "addEmployee") {
    const empID = args[3];
    const name = args[4];
    const department = args[5];
    const salary = parseFloat(args[6]);

    setTimeout(() => {
        employees.push({ empID, name, department, salary, lastPaidDate: "" });
        console.log(`Employee ${empID} added successfully.`);
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(employees, null, 2));
    }, 4000);
}

// ====== processPayroll ======
if (functionName === "processPayroll") {
    const empID = args[3];
    const date = args[4];

    setTimeout(() => {
        const emp = employees.find(e => e.empID === empID);
        if (!emp) {
            console.log(`Employee ${empID} not found`);
            return;
        }
        emp.lastPaidDate = date;
        console.log(`Payroll processed for ${empID} on ${date}`);
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(employees, null, 2));
    }, 4000);
}

// ====== getEmployee ======
if (functionName === "getEmployee") {
    const empID = args[3];

    setTimeout(() => {
        const emp = employees.find(e => e.empID === empID);
        if (!emp) {
            console.log(`Employee ${empID} not found`);
        } else {
            console.log(JSON.stringify(emp, null, 2));
        }
    }, 2000);
}

// ====== getAllEmployees ======
if (functionName === "getAllEmployees") {
    setTimeout(() => {
        console.log("Retrieving all employees...");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(employees, null, 2));
    }, 4000);
}


// # Initialize ledger
// node payroll-sim.js initLedger

// # Add new employee
// node payroll-sim.js addEmployee E003 Charlie Finance 55000

// # Process payroll
// node payroll-sim.js processPayroll E003 2025-08-11

// # Get a specific employee
// node payroll-sim.js getEmployee E003

// # Get all employees
// node payroll-sim.js getAllEmployees 
