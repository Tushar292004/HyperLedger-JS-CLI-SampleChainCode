const args = process.argv;
const functionName = args[2];

// Sample ledger data
let users = [
    { userID: "U001", name: "Alice", balance: 5000 },
    { userID: "U002", name: "Bob", balance: 3000 }
];

// ====== initLedger ======
if (functionName === "initLedger") {
    setTimeout(() => {
        console.log("Ledger initialized with sample users:");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(users, null, 1));
    }, 4000);
}

// ====== createUser ======
if (functionName === "createUser") {
    const userID = args[3];
    const name = args[4];
    const initialBalance = parseFloat(args[5]);

    setTimeout(() => {
        users.push({ userID, name, balance: initialBalance });
        console.log(`User ${userID} created successfully.`);
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(users, null, 1));
    }, 4000);
}

// ====== transferFunds ======
if (functionName === "transferFunds") {
    const fromUserID = args[3];
    const toUserID = args[4];
    const amount = parseFloat(args[5]);

    setTimeout(() => {
        const fromUser = users.find(u => u.userID === fromUserID);
        const toUser = users.find(u => u.userID === toUserID);

        if (!fromUser || !toUser) {
            console.log("One or both users not found.");
            return;
        }
        if (fromUser.balance < amount) {
            console.log(`Insufficient funds in ${fromUserID}.`);
            return;
        }

        fromUser.balance -= amount;
        toUser.balance += amount;
        console.log(`Transferred ${amount} from ${fromUserID} to ${toUserID}`);
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(users, null, 2));
    }, 4000);
}

// ====== getUser ======
if (functionName === "getUser") {
    const userID = args[3];

    setTimeout(() => {
        const user = users.find(u => u.userID === userID);
        if (!user) {
            console.log(`User ${userID} not found`);
        } else {
            console.log(JSON.stringify(user, null, 2));
        }
    }, 2000);
}

// ====== getAllUsers ======
if (functionName === "getAllUsers") {
    setTimeout(() => {
        console.log("Retrieving all users...");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(users, null, 2));
    }, 4000);
}


// # Initialize ledger
// node wallet-sim.js initLedger

// # Create user
// node wallet-sim.js createUser U003 Charlie 7000

// # Transfer funds
// node wallet-sim.js transferFunds U001 U003 1500

// # Get single user
// node wallet-sim.js getUser U003

// # Get all users
// node wallet-sim.js getAllUsers 
