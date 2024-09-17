const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'root',
});

let getRandomUser = () => {  //this will return array
    return [
       faker.string.uuid(),
       faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password(),
    ];
};

let q = "INSERT INTO user (id, username, email, passworrd) VALUES ?"; // spelling of password is wrong bcz i have mistakenly entered wrong in sql workbech 
// let user = ["12345", "123_newuser45", "a4bc5@gmail.com", "abs45"];

let data = [];
for(let i =0; i<=100 ; i++) {
    // console.log(getRandomUser());
    data.push(getRandomUser());  //this will push all the data in array of 100 fake users 
}

connection.query(q, [data], (err, result) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    console.log('Result:', result);
});

connection.end();

// let getRandomUser = () => {  //this will return object
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
// };


