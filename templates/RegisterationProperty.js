const args = process.argv;
const functionName = args[2];

// Initial sample data
let properties = [
    { propertyId: "P001", ownerName: "Alice", location: "Bangalore", marketValue: 4500000 },
    { propertyId: "P002", ownerName: "Bob", location: "Mumbai", marketValue: 3000000 }
];

// ====== initLedger ======
if (functionName === "initLedger") {
    setTimeout(() => {
        console.log("Ledger initialized with sample properties:");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(properties, null, 2));
    }, 4000);
}

// ====== addProperty ======
if (functionName === "addProperty") {
    const propertyId = args[3];
    const ownerName = args[4];
    const location = args[5];
    const marketValue = parseFloat(args[6]);

    setTimeout(() => {
        properties.push({ propertyId, ownerName, location, marketValue });
        console.log(`Property ${propertyId} added successfully.`);
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(properties, null, 2));
    }, 4000);
}

// ====== updateValue ======
if (functionName === "updateValue") {
    const propertyId = args[3];
    const newValue = parseFloat(args[4]);

    setTimeout(() => {
        const prop = properties.find(p => p.propertyId === propertyId);
        if (!prop) {
            console.log(`Property ${propertyId} not found`);
            return;
        }
        prop.marketValue = newValue;
        console.log(`Market value for ${propertyId} updated to ${newValue}`);
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(properties, null, 2));
    }, 4000);
}

// ====== getProperty ======
if (functionName === "getProperty") {
    const propertyId = args[3];

    setTimeout(() => {
        const prop = properties.find(p => p.propertyId === propertyId);
        if (!prop) {
            console.log(`Property ${propertyId} not found`);
        } else {
            console.log(JSON.stringify(prop, null, 2));
        }
    }, 2000);
}

// ====== getAllProperties ======
if (functionName === "getAllProperties") {
    setTimeout(() => {
        console.log("Retrieving all properties...");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(properties, null, 2));
    }, 4000);
}

// # Initialize ledger
// node PropertyManagement.js initLedger

// # Add a property
// node PropertyManagement.js addProperty P003 Charlie Delhi 5000000

// # Update market value
// node PropertyManagement.js updateValue P001 7000000

// # Get a property
// node PropertyManagement.js getProperty P002

// # Get all properties
// node PropertyManagement.js getAllProperties 
