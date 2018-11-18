//First, we need to create a Sequelize instance, representing our connection to the database
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr')

//setting up the Gardener columns
const Gardener = db.define('gardener', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
})

const Plot = db.define('plot', {
    size: {
        type: Sequelize.INTEGER
    },
    shaded: {
        type: Sequelize.BOOLEAN
    },
})

const Vegetable = db.define('vegetable', {
    name: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    planted_on: {
        type: Sequelize.DATE
    },
})

Plot.belongsTo(Gardener); //creates a foreign key on the plots for the gardener's ID
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})

Gardener.belongsTo(Vegetable, {as: 'favoriteVegetable'})

module.exports = {db, Vegetable, Gardener, Plot}