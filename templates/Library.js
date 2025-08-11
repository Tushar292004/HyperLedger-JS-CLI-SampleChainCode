const args =  process.argv;
functionName = args[2];
bookId = args[3];
title = args[4];
author = args[5];
status = args[6]; // status can be "available" or "issued"

let books = [
    { bookId: "B101", title: "The Alchemist", author: "Paulo Coelho", status: "Available" },
    { bookId: "B102", title: "1984", author: "George Orwell", status: "Available" },
    { bookId: "B103", title: "To Kill a Mockingbird", author: "Harper Lee", status: "Available" }
];

// ========= InitLedger =========
if (functionName === "InitLedger") {

    setTimeout(() => {
        console.log("Ledger initialized with the following books:");
    }, 2000)

    setTimeout(()=>{
        console.log(JSON.stringify(books, null, 1));
    }, 5000);
}

// ========= AddBook =========
if ( functionName === "AddBook"){
    setTimeout(()=>{
        books.push({bookId, title, author, status});
        console.log(`Book ${bookId} added successfully.`);
    }, 2000);

    setTimeout(()=>{
        console.log(JSON.stringify(books, null, 1));
    }, 5000);
}

// ========= QueryAllBooks =========
if (functionName === "QueryAllBooks") {
    setTimeout(() => {
        console.log("Retrieving all books...");
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(books, null, 1));
    }, 5000);
}

// ========= ChangeBookStatus =========
if (functionName === "ChangeBookStatus") {
    let newstatus = args[4];  //issued or available
    setTimeout(() => {
        let book = books.find(b => b.bookId === bookId);
        if (book) {
            book.status = newstatus;
            console.log(`Status of book ${bookId} changed to ${newstatus}`);
        } else {
            console.log(`Book ${bookId} not found`);
        }
    }, 2000);

    setTimeout(() => {
        console.log(JSON.stringify(books, null, 1));
    }, 5000);
}

//  node program.js addBook B101 "The Alchemist" "Paulo Coelho" "Available"
