##THESE ARE THE SETUP STEPS

createdb plantr # creates a database called "plantr"
mkdir plantr
cd plantr
npm init -y # the -y will skip all those pesky questions
git init
npm install sequelize pg pg-hstore # pg and pg-hstore are peer dependencies of sequelize
touch models.js seed.js