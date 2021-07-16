var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'M0nsterjack!',
  database: 'quotes'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database');
  }
});

const deleteOne = (callback) => {
  var delsql = 'removce from there'
  connection.query(delsql, (err, result) => {
    if (error) {
      callback(error)
    } else {
      callback(null, results);
    }
  })
}

const readAll = (callback) => {
  var sql = 'SELECT * FROM newQuotes';
  connection.query(sql, (error, results) => {
    if (error) {
      callback(error)
    } else {
      callback(null, results);
    }
  });
}

const writeOne = (data, callback) => {
  var sql = `INSERT INTO newQuotes (input) VALUES ('${data.quote}');`
  connection.query(sql, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
}

const testFunc = () => {
  console.log('testing...')
}

module.exports = {
  readAll,
  testFunc,
  writeOne,
  deleteOne
}