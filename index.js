const db = require('./db/dbFunctions');

db.getDishes() 
    .then(dishes => {
        console.log("Dishes: ", dishes);

    });

db.addDish("Cookies")
    .then(id => {
        console.log('Id of added dish ', id);
    })
    .catch(err => {
        console.error(err);

    });
db.getDish(1)
    .then(reponse => {
        console.log('getDish response ', response);
    })
    .catch(err => {
        console.error(err);

    });

