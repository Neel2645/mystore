"use server";

import { db } from "@/db";
import sqlite from "better-sqlite3";
import { redirect } from "next/navigation";
// const db = sqlite("products.sqlite");

export async function deleteProduct(productId){
    // db.prepare(
    //     `DELETE FROM products WHERE id=?`
    // ).run(productId);

    await db.products.deleteMany({
        where:{
            price : {
                gt : 30
            }
        }
    })

    redirect('/');
}