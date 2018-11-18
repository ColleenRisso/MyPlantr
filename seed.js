const {db, Vegetable, Gardener, Plot} = require('./models')

const vegetableData = [
    {name: 'Carrot', color: 'orange', planted_on: Date()},
    {name: 'Tomato', color: 'red', planted_on: Date()},
    {name: 'Cucumber', color: 'green', planted_on: Date()},
    {name: 'Pepper', color: 'yellow', planted_on: Date()}
]

const gardenerData = [
    {name: 'McGregor', age: 60},
    {name: 'Hashimoto', age: 37},
    {name: 'Giancarlo', age: 19},
    {name: 'McDonald', age: 100},
]

const plotData = [
    { size: 20, shaded: false },
    { size: 40, shaded: true },
    { size: 10, shaded: false },
]

//force:true tells our database to drop the created data evertime our code is restarted (for dev purposes). This returns a promise, which will resolve if the sync is successful and reject with an error otherwise. Either way we will need to use bd.close() to end our database connection.
db.sync({force: true})
    .then(() => {
        console.log('Database has synced!');
        db.close();
    })
    .catch(error => {
        console.log(`Error detected: ${error} Something went wrong!`);
        db.close();
    })
