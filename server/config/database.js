const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  waitForConnections: true, // Wait instead of failing when connections are full
  connectionLimit: 5, // Match Clever Cloud's limit
  queueLimit: 0, // Allow unlimited waiting connections
});

const pool = mysql.createconnection (process.env.MYSQL_ADDON_URI );

let registration = `CREATE TABLE if not exists registration(
  user_id int auto_increment,
  user_name varchar(255) not null,
  user_email varchar(255) not null,
  user_password varchar(255) not null,
  PRIMARY KEY (user_id),
  UNIQUE KEY (user_name)
  )`;
let profile = `CREATE TABLE if not exists profile(
  user_profile_id int auto_increment,
  user_id int not null,
  first_name varchar(255) not null,
  last_name varchar(255) not null,        
  PRIMARY KEY (user_profile_id)
)`;

let question = `CREATE TABLE if not exists question(
  question_id int auto_increment,
  question varchar(255) not null,
  question_description varchar (255),
  question_code_block varchar(255),
  tags varchar (255),
  user_id int not null,
  PRIMARY KEY (question_id)
  )`;

let answer = `CREATE TABLE if not exists answer (
  answer_id int auto_increment PRIMARY KEY,
  answer varchar(255) not null,
  answer_code_block varchar (255),
  user_id int not null,
  question_id int not null
  )`;

pool.query(registration, (err, results) => {
  if (err) throw err;
  console.log("registration table created");
});
pool.query(profile, (err, results) => {
  if (err) throw err;
  console.log("profile table created");
});
pool.query(question, (err, results) => {
  if (err) throw err;
  console.log("question table created");
});
pool.query(answer, (err, results) => {
  if (err) throw err;
  console.log("answer table created");
});

module.exports = pool;
