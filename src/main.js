const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', 'password', {
    dialect: 'mysql',
    host: "db"
});

sequelize
  .authenticate()
  .then(() => {
    sequelize.query("SELECT * FROM db").then(myTableRows => {
        console.log(myTableRows)
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });;