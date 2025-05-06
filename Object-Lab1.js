let Book = {
    title: "Harry Potter",
    author: "J.K rowling",
    year: 1997,
    isAvailable: true,
    borrow: function () {
        this.isAvailable = false;
        console.log("تم استعارة الكتاب.");
    },
    publisher: {
        name: "Bloomsbury",
        location: {
            city: "London",
            country: "UK"
        }
    }
};


// -اطبع الكائن `Book`.
console.log(Book);

// -اطبع الخاصية `title`.
console.log(`Titile is: ${Book.title}`);


// - قم بتعديل قيمة الخاصية `year` إلى السنة الحالية واطبع الكائن.
Book.year = 2025;
console.log(`After updating the year: ${Book.year}`);


// - احذف الخاصية `author` واطبع الكائن.
delete Book.author;
console.log("After deleting author:", Book);

// استدعاء دالة borrow وتغيير isAvailable
Book.borrow();
console.log(`After borrowing: ${Book.isAvailable}`);

console.log("Publisher:", Book.publisher);

// طباعة خاصية city من داخل location
console.log(`City is: ${Book.publisher.location.city}`);