
//: Task 1:Multi-dimensional Arrays
let bookCatalog =[
    ["Lord of the ring","Harry potter","Twilight"],
    ["Journey Through Genious","The Alchemist","The Great Gatsby"],
    ["The Hunger Games","The Fault in Our Stars","Divergent"]
];
console.log("total no of books:" + bookCatalog[0].length);


//Task 2: Accessing and log all the books in the array using bracket notation with numbers.
console.log("Book1:" +bookCatalog[0][0]);
console.log("Book2: " + bookCatalog[0][1]);
console.log("Book3: " + bookCatalog[0][2]);
console.log("Book4: " + bookCatalog[1][0]);
console.log("Book5: " + bookCatalog[1][1]);
console.log("Book6: " + bookCatalog[1][2]);
console.log("Book7: " + bookCatalog[2][0]);
console.log("Book8: " + bookCatalog[2][1]);
console.log("Book9: " + bookCatalog[2][2]);


//Task 3: Access and log all the elements in the array using bracket notation withvariables as indices. Use the variables row and item
let shelf = 0;
let book1 = 0;
let book2 = 1;
let book3 = 2;
let firstBook = bookCatalog[shelf][book1];
let secondBook = bookCatalog[shelf][book2];
let thirdBook = bookCatalog[shelf][book3];
console.log("First book in the catalog: " + firstBook); 
console.log("Second book in the catalog: " + secondBook); 
console.log("Third book in the catalog: " + thirdBook); 
let shelf2 = 1;
let book4 = 0
let book5 = 1;
let book6 = 2;
let firstBook2 = bookCatalog[shelf2][book4];
console.log("First book in the second shelf: " + firstBook2); 
let shelf3 = 2;
let book7 = 0;
let book8 = 1;
let book9 = 2;
let thirdBook3 = bookCatalog[shelf3][book9];
console.log("Third book in the third shelf: " + thirdBook3);

//Task 4: Write a loop that prints all the items on the second shelf.
for (let i=0; i<bookCatalog[1].length; i++){
    console.log("books on the second shelf: " + bookCatalog[1][i]);
}
// Write a loop that prints all the items in first shelf.
for (let i= 0; i<bookCatalog[0].length; i++){

    console.log("Books on the first shelf are: " + bookCatalog[0][i]);
}
// write a loop that prings all the items in the thirdshelf.
for (let i= 0 ; i< bookCatalog[2].length; i++){
    console.log("books in the third shelf are:" + bookCatalog[2][i]);
}