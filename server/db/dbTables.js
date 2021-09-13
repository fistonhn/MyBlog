import { pool } from '../config/configulation';

const createTables = `
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY NOT NULL,
  firstName VARCHAR (255) NOT NULL,
  lastName VARCHAR (255) NOT NULL,
  email VARCHAR (100) NOT NULL,
  isAdmin VARCHAR (100) NOT NULL,
  password VARCHAR (255) NOT NULL,
  createdOn VARCHAR (50) NOT NULL
  );
CREATE TABLE IF NOT EXISTS news (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR (100) NOT NULL,
  title VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  urlToImage VARCHAR(500) NOT NULL,
  author VARCHAR (255) NOT NULL,
  topic VARCHAR (100) NOT NULL,
  category VARCHAR (100) NOT NULL,
  isPublished VARCHAR (255) NOT NULL,
  place VARCHAR (255) NOT NULL,
  views VARCHAR (255) NOT NULL,
  createdOn VARCHAR (50) NOT NULL
);
CREATE TABLE IF NOT EXISTS comments(
  id SERIAL PRIMARY KEY NOT NULL,
  newsId VARCHAR (255) NOT NULL,
  newsTitle VARCHAR (255) NOT NULL,
  name VARCHAR (100) NOT NULL,
  email VARCHAR (100) NOT NULL,
  comment VARCHAR (500) NOT NULL,
  isPublished VARCHAR (100) NOT NULL,
  createdOn VARCHAR (50) NOT NULL
  );
CREATE TABLE IF NOT EXISTS topics(
  id SERIAL PRIMARY KEY NOT NULL,
  countNews VARCHAR (500) NOT NULL,
  topic VARCHAR (255) NOT NULL,
  activated VARCHAR (100) NOT NULL,
  createdOn VARCHAR (50) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS images(
    id SERIAL PRIMARY KEY NOT NULL,
    urlToImage VARCHAR(500) NOT NULL,
    createdOn VARCHAR (50) NOT NULL
    );
 `;
pool.query(createTables).then(() => {
  pool.end();
}).catch((err) => {
  process.stdout.write(err.message);
  process.exit(0);
});

process.stdout.write('tables successfull created ');
