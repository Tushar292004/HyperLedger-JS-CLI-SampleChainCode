const args = process.argv;

const functionName = args[2];
const studentID = args[3];
const name = args[4];
const department = args[5];
const dob = args[6];
const email = args[7];
const subject = args[4]; // For updateGrade: functionName studentID subject grade
const grade = args[5];

// Mock "ledger" array
let students = [
    {
        studentID: "S001",
        name: "Alice",
        department: "CSE",
        dob: "2002-01-10",
        email: "alice@example.com",
        grades: {}
    }
];

// InitLedger
if (functionName === "initLedger") {
    setTimeout(() => {
        console.log("Ledger initialized with sample students:");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(students, null, 2));
    }, 4000);
}

// AddStudent
if (functionName === "addStudent") {
    setTimeout(() => {
        students.push({ studentID, name, department, dob, email, grades: {} });
        console.log(`Student ${studentID} added successfully.`);
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(students, null, 2));
    }, 4000);
}

// UpdateGrade
if (functionName === "updateGrade") {
    const subject = args[4];
    const grade = args[5];
    setTimeout(() => {
        const student = students.find(s => s.studentID === studentID);
        if (!student) {
            console.log(`Student ${studentID} not found`);
        } else {
            student.grades[subject] = grade;
            console.log(`Grade updated for ${studentID} in ${subject} = ${grade}`);
        }
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(students, null, 2));
    }, 4000);
}

// GetStudent
if (functionName === "getStudent") {
    setTimeout(() => {
        const student = students.find(s => s.studentID === studentID);
        if (!student) {
            console.log(`Student ${studentID} not found`);
        } else {
            console.log(JSON.stringify(student, null, 2));
        }
    }, 2000);
}

// GetAllStudents
if (functionName === "getAllStudents") {
    setTimeout(() => {
        console.log("Retrieving all students...");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(students, null, 2));
    }, 4000);
}

// # Initialize ledger
// node student-sim.js initLedger

// # Add a new student
// node student-sim.js addStudent S002 Bob ECE 2001-05-12 bob@example.com

// # Update grade
// node student-sim.js updateGrade S002 Math A

// # Get one student
// node student-sim.js getStudent S002

// # Get all students
// node student-sim.js getAllStudents 