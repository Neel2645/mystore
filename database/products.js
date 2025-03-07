import sqlite from 'better-sqlite3';
const db = sqlite('products.sqlite');

export function getProducts(){
    return db.prepare(`SELECT * FROM products`).all();
}