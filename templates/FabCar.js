const args = process.argv;

const functionName = args[2]; // function name
const id = args[3];           // asset id
const company = args[4];         // company of car
const model = args[5];        // model
const color = args[6];        // color
const owner = args[7];        // owner

let cars = [
    { carId: "CAR1", company: "Toyota", model: "Prius", color: "blue", owner: "Tomoko" },
    { carId: "CAR2", company: "Ford", model: "Mustang", color: "red", owner: "Brad" },
    { carId: "CAR3", company: "Hyundai", model: "Tucson", color: "green", owner: "Jin Soo" },
];

// ========= InitLedger =========
if (functionName === "InitLedger") {
    setTimeout(() => {
        console.log("Ledger initialized with the following cars:");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(cars, null, 1));
    }, 5000);
}

// ========= CreateCar =========
if (functionName === "CreateCar") {
    setTimeout(() => {
        cars.push({ carId: id, company, model, color, owner });
        console.log(`Car ${id} added successfully.`);
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(cars, null, 1));
    }, 5000);
}

// ========= QueryAllCars =========
if (functionName === "QueryAllCars") {
    setTimeout(() => {
        console.log("Retrieving all cars...");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(cars, null, 1));
    }, 5000);
}

// ========= ChangeCarOwner =========
if (functionName === "ChangeCarOwner") {
    const newOwner = args[4]; // For this function, args are: functionName id newOwner
    setTimeout(() => {
        let car = cars.find(c => c.carId === id);
        if (car) {
            car.owner = newOwner;
            console.log(`Ownership of car ${id} transferred to ${newOwner}`);
        } else {
            console.log(`Car ${id} not found`);
        }
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(cars, null, 1));
    }, 5000);
}

// # Initialize ledger
// node program.js InitLedger

// # Create a new car
// node program.js CreateCar CAR4 Honda Civic yellow Alice

// # Query all cars
// node program.js QueryAllCars

// # Change owner of a car
// node program.js ChangeCarOwner CAR2 Michael