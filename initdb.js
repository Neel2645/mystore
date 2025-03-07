import sqlite from 'better-sqlite3';
const db = sqlite('products.sqlite');

db.prepare(
    `create table if not exists products(
    id integer primary key autoincrement,
    name text,
    price REAL,
    image text
    )`
).run();

db.prepare(
    `insert into products(name,price,image) values
    ('Apple',10,'apple.jpg'),
    ('Banana',20,'banana.jpg'),
    ('Orange',30,'orange.jpg'),
    ('Lemmon',40,'lemmon.jpg')
    `
).run();

const data = db.prepare(
    `select * from products`
).all();

console.log(data);