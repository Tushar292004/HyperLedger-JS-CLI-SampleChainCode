// CredentialManagement.js
const args = process.argv;
const functionName = args[2];

// ====== Initial sample data ======
let credentials = [
    {
        credentialID: "CRED1001",
        studentName: "Alice Johnson",
        university: "ABC University",
        degree: "B.Tech Computer Science",
        year: "2024",
        grade: "A+",
        issuedDate: "2024-06-15"
    }
];

// ====== initLedger ======
if (functionName === "initLedger") {
    setTimeout(() => {
        console.log("Ledger initialized with sample credentials:");
    }, 1000);

    setTimeout(() => {
        console.log(JSON.stringify(credentials, null, 2));
    }, 2000);
}

// ====== addCredential ======
if (functionName === "addCredential") {
    const credentialID = args[3];
    const studentName = args[4];
    const university = args[5];
    const degree = args[6];
    const year = args[7];
    const grade = args[8];
    const issuedDate = args[9];

    setTimeout(() => {
        credentials.push({
            credentialID,
            studentName,
            university,
            degree,
            year,
            grade,
            issuedDate
        });
        console.log(`Credential ${credentialID} added successfully.`);
    }, 1000);

    setTimeout(() => {
        console.log(JSON.stringify(credentials, null, 2));
    }, 2000);
}

// ====== getCredential ======
if (functionName === "getCredential") {
    const credentialID = args[3];

    setTimeout(() => {
        const cred = credentials.find(c => c.credentialID === credentialID);
        if (!cred) {
            console.log(`Credential ${credentialID} not found`);
        } else {
            console.log(JSON.stringify(cred, null, 2));
        }
    }, 1000);
}

// ====== verifyCredential ======
if (functionName === "verifyCredential") {
    const credentialID = args[3];

    setTimeout(() => {
        const exists = credentials.some(c => c.credentialID === credentialID);
        console.log(exists ? "Credential exists ✅" : "Credential does not exist ❌");
    }, 1000);
}

// ====== getAllCredentials ======
if (functionName === "getAllCredentials") {
    setTimeout(() => {
        console.log("Retrieving all credentials...");
    }, 1000);

    setTimeout(() => {
        console.log(JSON.stringify(credentials, null, 2));
    }, 2000);
}



//  # Initialize ledger
// node CredentialManagement.js initLedger

// # Add new credential
// node CredentialManagement.js addCredential CRED1002 "Bob Smith" "XYZ University" "MBA" 2023 "A" "2023-05-20"

// # Get specific credential
// node CredentialManagement.js getCredential CRED1001

// # Verify credential existence
// node CredentialManagement.js verifyCredential CRED1002

// # Get all credentials
// node CredentialManagement.js getAllCredentials 
