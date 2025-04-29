function exercise1() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function exercise2() {
    for (let i = 2; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

function exercise3() {
    let result = 0;

    for (let i = 1; i <= 100; i++) {
        result += i;
    }

    console.log(result);
}

function exercise4() {
    let str = "hello";
    let reverse = "";

    for (i = str.length - 1; i > 0; i--) {
        reverse += str[i];
    }

    console.log(reverse);
}

function exercise5() {
    let arr = [3, 7, 9, 12, 15];
    let searchNum = 9;
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == searchNum){
            console.log("est");
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("this massive doesnt have your search number");
    }
}

function exercise6() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1;j <= 10; j++) {
            console.log(i + "*" + j + "=" + i * j);
        }
        console.log("\n");
    }
}

function exercise7() {
    for (let i = 1; i <= 5; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "*";
        }
        console.log(line);
    }
}

// learn array

function learnMassive() {
    let fruits = ["banana", "apple", "orange"];
    console.log(fruits[0]);
    
    // change first element
    fruits[0] = "lemon";
    console.log(fruits[0]);

    // add new element
    fruits.push("pine apple")
    console.log(fruits);

    // pop delets last element
    fruits.pop()
    console.log(fruits);

    // 
}

function exercise8() {
    let films = ["Green Book", "One piace", "Marvel", "Naruto", "City Hunter"];

    for (let i = 0; i < films.length; i++) {
        console.log(films[i]);
    }

    films.push("Big Mouse", "Major");
    films.pop();
    
    console.log(films);
}

function exercise9() {
    let numbers = [5, 2, 9, 1, 7];
    // 5, 2, 9, 1, 7

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    console.log(numbers);
}

function exercise9_AnotherMethod() {
    let numbers = [5, 2, 9, 1, 7];
    numbers.sort((a, b) => a - b);
}

function exercise10() {
    let heroes = ["Batman", "Superman", "Spiderman", "Ironman", "Hulk"];
    let findHero = "Ironman";
    let found = false;

    for (let i = 0; i < heroes.length; i++) {
        if (findHero === heroes[i]) {
            console.log("we found the hero");
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("this massive doesnt have this hero");
    }
}

function exercise10_AnotherMethod() {
    let heroes = ["Batman", "Superman", "Spiderman", "Ironman", "Hulk"];
    console.log(heroes.includes("Hulk"));
    console.log(heroes.includes("DeadPull"));
}

function exercise11() {
    let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
    let foundFruit = "Mango";
    let found = false;

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === foundFruit) {
            let temp = fruits[i];
            fruits[i] = fruits[fruits.length - 1];
            fruits[fruits.length - 1] = temp;
            fruits.pop();
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("this array doesnt have: " + foundFruit);
    }

    console.log(fruits);
}

function exercise12() {
    let numbers = [12, 5, 8, 130, 44, 20];

    let ascending = numbers.slice().sort((a, b) => a - b);
    console.log("Increase numbers: " + ascending);

    let descending = numbers.slice().sort((a , b) => b - a);
    console.log("Deacrease numbers: " + descending);
}

function exercise13() {
    let animals = ["Cat", "Dog", "Bird", "Cat", "Fish", "Cat", "Horse"];
    let deleteElement = "Cat";

    let filterAnimals = animals.filter(animals => animals !== deleteElement);

    console.log(filterAnimals);
}

function exercise14() {
    let people = [
        { name: "John", age: 25 },
        { name: "Jane", age: 30 },
        { name: "Mark", age: 20 },
        { name: "Sara", age: 35 },
        { name: "Tom", age: 28 }
    ];

    let filterPeople = people.filter(person => person.age >= 30);
    let sortPeople = filterPeople.sort((a, b) => a.age - b.age);

    console.log(sortPeople);
}

function exercise15() {
    let products = [
        { name: "Laptop", price: 1000 },
        { name: "Phone", price: 500 },
        { name: "Tablet", price: 750 },
        { name: "Monitor", price: 300 },
        { name: "Keyboard", price: 100 }
    ];

    let filterProducts = products.filter(product => product.price > 400);
    let sortProducts = filterProducts.sort((a, b) => b.price - a.price);

    console.log(sortProducts);
}

function exercise16() {
    let students = [
        { name: "Alice", grade: 85, city: "New York" },
        { name: "Bob", grade: 92, city: "Los Angeles" },
        { name: "Charlie", grade: 78, city: "New York" },
        { name: "David", grade: 95, city: "Chicago" },
        { name: "Eve", grade: 88, city: "Los Angeles" },
        { name: "Frank", grade: 70, city: "Chicago" }
    ];

    let filterStudents = students.filter(student => student.grade > 80 && student.city === "Los Angeles");
    let sortStudents = filterStudents.sort((a, b) => b.grade - a.grade);

    console.log(sortStudents);
}

function exercise17() {
    let books = [
        { title: "The Hobbit", pages: 310 },
        { title: "Harry Potter", pages: 500 },
        { title: "War and Peace", pages: 1225 },
        { title: "The Great Gatsby", pages: 180 },
        { title: "Crime and Punishment", pages: 671 }
    ];

    let filterBooks = books.filter(book => book.pages > 300);
    let updateBooks = filterBooks.map(book => {
        return {
            ...book,
            longBook: true
        }
    });
    let sortBooks = updateBooks.sort((a, b) => a.pages - b.pages);

    console.log(sortBooks);
}

function exercise18() {
    let employees = [
        { name: "Alice", age: 30, salary: 5000 },
        { name: "Bob", age: 25, salary: 4000 },
        { name: "Charlie", age: 35, salary: 6000 },
        { name: "David", age: 28, salary: 4500 }
    ];

    let updateEmployees = employees.map(employee => {
        return {
            ...employee,
            salaryIncreased: employee.salary * 1.1,
            isSenoir: employee.age >= 30
        };
    });

    console.log(updateEmployees);
}

function exercise19() {
    let books = [
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, price: 20 },
        { title: "1984", author: "George Orwell", year: 1949, price: 15 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, price: 10 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, price: 25 }
    ];

    let updateBooks = books.map(book => {
        return {
            ...book,
            isClassic: book.year < 1950,
            newPrice: book.price * 1.05,
            titleUppercase: book.title.toUpperCase()
        }
    });

    console.log(updateBooks);
}

function exercise20() {

    let products = [
        { name: "Apple", category: "Fruit", price: 2, stock: 100 },
        { name: "Banana", category: "Fruit", price: 1, stock: 150 },
        { name: "Carrot", category: "Vegetable", price: 1.5, stock: 200 },
        { name: "Lettuce", category: "Vegetable", price: 2.5, stock: 50 },
        { name: "Chicken", category: "Meat", price: 5, stock: 20 },
        { name: "Beef", category: "Meat", price: 6, stock: 10 }
    ];

    let filterProducts = products.filter(product => product.category === "Fruit" && product.stock >= 100);
    
    let updateProducts = filterProducts.map(product => {
        return {
            ...product,
            nameUppercase: product.name.toUpperCase(),
            priceDiscount: product.price * 0.9,
            isInStock: product.stock > 50,
        }
    });

    let sortProducts = updateProducts.sort((a, b) => b.price - a.price);

    console.log(sortProducts);
}

function exercise21() {
    let students = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "David", age: 28 },
        { name: "Eve", age: 20 }
    ];

    let updateStudents = students.filter(student => student.age >= 30);

    let sortStundets = updateStudents.sort((a, b) => a.name - b.name);

    console.log(sortStundets);
}

function exercise22() {

    let products = [
        { name: "Laptop", price: 1000 },
        { name: "Phone", price: 500 },
        { name: "Tablet", price: 750 },
        { name: "Monitor", price: 300 }
    ];
    
    let increasePrice = products.map(product => {
        return {
            ...product,
            newPrice: product.price * 1.2
        }
    })

    console.log(increasePrice);
}

function exercise23() {

    let products = [
        { name: "Apple", stock: 10 },
        { name: "Banana", stock: 0 },
        { name: "Orange", stock: 5 }
    ];

    let updateProducts = products.filter(product => product.stock > 0);

    console.log(updateProducts);
}

function exercise24() {
    let books = [
        { title: "The Hobbit", year: 1937 },
        { title: "1984", year: 1949 },
        { title: "To Kill a Mockingbird", year: 1960 },
        { title: "Pride and Prejudice", year: 1813 }
    ];

    let updateBooks = books.filter(book => book.year < 1950);

    console.log(updateBooks);
}

function exercise25() {
    let employees = [
        { name: "Alice", salary: 5000 },
        { name: "Bob", salary: 4000 },
        { name: "Charlie", salary: 6000 },
        { name: "David", salary: 4500 }
    ];

    let updateEmployees = employees.map(employee => {
        return {
            ...employee,
            increaseSalary: employee.salary * 1.1
        }
    });

    console.log(updateEmployees);
}

function exercise26() {
    let products = [
        { name: "Laptop", price: 1000 },
        { name: "Phone", price: 500 },
        { name: "Tablet", price: 750 },
        { name: "Monitor", price: 300 }
    ];

    let updateProducts = products.filter(product => product.price > 700);

    console.log(updateProducts);
}

function exercise27() {
    let people = [
        { name: "John", birthYear: 1990 },
        { name: "Jane", birthYear: 1985 },
        { name: "Mark", birthYear: 2000 }
    ];
 
    let countAge = people.map(person => {
        return {
            ...person,
            age: 2025 - person.birthYear
        }
    })

    console.log(countAge);
}

function exercise28() {
    let movies = [
        { title: "The Matrix", year: 1999 },
        { title: "Inception", year: 2010 },
        { title: "The Godfather", year: 1972 }
    ];

    let sortMovie = movies.sort((a, b) => a.year - b.year);

    console.log(sortMovie);
}

function exercise29() {
    let users = [
        { firstName: "John", lastName: "Doe", age: 30 },
        { firstName: "Jane", lastName: "Smith", age: 25 },
        { firstName: "Tom", lastName: "Jones", age: 35 }
    ];

    let updateUsers = users.map(user => {
        return {
            ...user,
            fullName: user.firstName + " " + user.lastName
        }
    });

    console.log(updateUsers);
}

function exercise30() {
    let numbers = [1, 2, 3, 4, 5];

    let stringNum = numbers.map(number => number.toString());

    console.log(stringNum);
}

function exercise31() {
    let students = [
        { name: "Alice", averageGrade: 90 },
        { name: "Bob", averageGrade: 82 },
        { name: "Charlie", averageGrade: 88 },
        { name: "David", averageGrade: 79 },
        { name: "Eve", averageGrade: 95 }
    ];

    let filterStudents = students.filter(student => student.averageGrade > 85);

    let updateStudents = filterStudents.map(student => {
        return {
            ...student,
            status: "Excellent"
        }
    })

    console.log(updateStudents);
}

function exercise32() {
    let products = [
        { name: "Laptop", price: 1000, stock: 5 },
        { name: "Phone", price: 450, stock: 10 },
        { name: "Tablet", price: 300, stock: 0 },
        { name: "Monitor", price: 200, stock: 7 }
    ];

    let filterProducts = products.filter(product => product.stock > 0 && product.price < 500);

    console.log(filterProducts);
}

function exercise33() {
    let houses = [
        { address: "Street 1", size: 120, price: 250000 },
        { address: "Street 2", size: 80, price: 200000 },
        { address: "Street 3", size: 150, price: 350000 },
        { address: "Street 4", size: 130, price: 280000 }
    ];

    let filterHouses = houses.filter(house => house.size > 100 && house.price < 300000);

    let updateHouses = filterHouses.map(house => {
        return {
            ...house,
            goodDeal: true
        }
    })

    console.log(updateHouses);
}

function exercise34() {
    let employees = [
        { name: "John", salary: 5000, years: 3 },
        { name: "Jane", salary: 6000, years: 6 },
        { name: "Mark", salary: 7000, years: 8 },
        { name: "Sara", salary: 4000, years: 2 }
    ];

    let updateEmployees = employees.map(employee => {
        if (employee.years > 5) {
            return {
                ...employee,
                bonus: employee.salary * 0.1
            }
        } else {
            return {
                ...employee,
                bonus: 0
            };
        }
    });

    console.log(updateEmployees);
}

function exercise35() {
    let athletes = [
        { name: "Tom", age: 25, rating: 95 },
        { name: "Jerry", age: 31, rating: 88 },
        { name: "Mike", age: 28, rating: 90 },
        { name: "Anna", age: 22, rating: 98 }
    ];
    
    let filterAthletes = athletes.filter(athlete => athlete.age < 30);

    let sortAthletes = filterAthletes.sort((a, b) => b.rating - a.rating);

    console.log(sortAthletes);
}

function exercise36() {
    let books = [
        { title: "Book A", price: 10 },
        { title: "Book B", price: 15 },
        { title: "Book C", price: 8 },
        { title: "Book D", price: 20 }
    ];
    
    let updatePriceBooks = books.map(book => {
        return {
            ...book,
            newPrice: book.price * 1.1
        };
    });

    let filterBooks = updatePriceBooks.filter(book => book.newPrice > 12);

    let sumPriceBooks = filterBooks.reduce((sum, book) => {
        return sum + book.price;
    }, 0);

    console.log(sumPriceBooks);
}

function exercise37() {
    let employees = [
        { name: "Alice", department: "HR", salary: 5000 },
        { name: "Bob", department: "IT", salary: 7000 },
        { name: "Charlie", department: "HR", salary: 5500 },
        { name: "David", department: "IT", salary: 8000 },
        { name: "Eve", department: "Finance", salary: 6000 }
    ];

    let filterEmployees = employees.filter(employee => employee.department === "IT");

    let mapEmployees = filterEmployees.map(employee => {
        return {
            ...employee,
            bonus: employee.salary * 0.1
        }
    })

    let reduceEmployees = mapEmployees.reduce((sum, employee) => {
        return sum + employee.salary
    }, 0);

    console.log(mapEmployees, reduceEmployees);
}

function exercise38() {
    let sales = [
        { product: "Laptop", quantity: 4, price: 1000 },
        { product: "Phone", quantity: 10, price: 500 },
        { product: "Tablet", quantity: 5, price: 700 },
        { product: "Monitor", quantity: 2, price: 300 }
    ];

    let filterSales = sales.filter(sale => sale.quantity > 3);

    let updateSales = filterSales.map(sale => {
        return {
            ...sale,
            totalSale: sale.price * sale.quantity,
        };
    });

    let reduceSales = updateSales.reduce((sum, sale) => {
        return sum + sale.totalSale;
    }, 0);

    console.log(updateSales, reduceSales);
}

function exercise39() {
    let orders = [
        { product: "Laptop", quantity: 3, price: 1000, date: "2023-01-10" },
        { product: "Phone", quantity: 10, price: 500, date: "2022-08-15" },
        { product: "Tablet", quantity: 5, price: 700, date: "2023-05-05" },
        { product: "Monitor", quantity: 2, price: 300, date: "2023-11-11" }
    ];

    let orders2023 = orders.filter(order => new Date(order.date).getFullYear() === 2023);

    let countAvg = orders.map(order => {
        return {
            ...order,
            avgPrice: order.price * order.quantity
        };
    });

    let largeOrder = countAvg.map(order => {
        if (order.avgPrice >= 500) {
            return {
                ...order,
                isLargeOrder: true,
            };
        } else {
            return {
                ...order,
                isLargeOrder: false
            }
        };
    });

    let reduceOrders = largeOrder.reduce((sum, order) => {
        return sum + order.avgPrice;
    }, 0);

    console.log(reduceOrders);
}
// exercise1();
// exercise2();
// exercise3();
// exercise4();
// exercise5();
// exercise6();
// exercise7();
// learnMassive();
// exercise8();
// exercise9();
// exercise9_AnotherMethod();
// exercise10();
// exercise10_AnotherMethod();
// exercise11();
// exercise12();
// exercise13();
// exercise14();
// exercise15();
// exercise16();
// exercise17();
// exercise18();
// exercise19();
// exercise20();
// exercise21();
// exercise22();
// exercise23();
// exercise24();
// exercise25();
// exercise26();
// exercise27();
// exercise28();
// exercise29();
// exercise30();
// exercise31();
// exercise32();
// exercise33();
// exercise34();
// exercise35();
// exercise36();
// exercise37();
// exercise38();
exercise39();