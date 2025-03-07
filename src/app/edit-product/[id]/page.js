import sqlite from "better-sqlite3";
import { redirect } from "next/navigation";

const db = sqlite("products.sqlite");

export default function EditProduct({ params }) {
    const product = db.prepare(`SELECT * FROM products WHERE id=?`).get(params.id);
    if (!product) {
        return <div>Product not found</div>;
    }
    
  console.log(product);

  async function handleSubmit(formData) {
    "use server";

    const updatedData = {
      name: formData.get("name"),
      price: formData.get("price"),
      image: formData.get("image"),
    };

    db.prepare(
      `UPDATE products SET name=?, price=?, image=? WHERE id=?`
    ).run(updatedData.name, updatedData.price, updatedData.image.name, params.id);

    redirect("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <form
        className="w-full max-w-3xl p-6 md:p-12 bg-white border border-gray-300 rounded-lg shadow-lg"
        action={handleSubmit}
      >
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-2xl font-semibold text-gray-900 text-center">
              Edit Product
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-md font-medium text-gray-900">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={product.name}
                className="w-full p-2 rounded-md border border-gray-300 shadow-sm 
                           focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="E.g., Fruit"
              />
            </div>
            <div>
              <label className="block text-md font-medium text-gray-900">
                Price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={product.price}
                className="w-full p-2 rounded-md border border-gray-300 shadow-sm 
                           focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="$0"
              />
            </div>
          </div>

          <div>
            <label className="block text-md font-medium text-gray-900">
              Product Image
            </label>
            <div className="mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-300 px-6 py-5">
              <div className="text-center">
                <input
                  type="file"
                  name="image"
                  className="block w-full text-md text-gray-700
                             file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 
                             file:text-md file:font-semibold file:bg-indigo-50 
                             file:text-indigo-700 hover:file:bg-indigo-100"
                />
                <p className="text-xs text-gray-600 mt-2">Allowed: .PNG, .JPG, .HEIC</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            className="w-full sm:w-auto text-sm font-semibold text-gray-900 px-4 py-2 border border-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto bg-indigo-600 text-white px-4 py-2 rounded-md 
                       text-sm font-semibold shadow-sm hover:bg-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
