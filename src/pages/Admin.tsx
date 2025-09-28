import React, { useState } from "react";

interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: string;
  engine: string;
  topSpeed: string;
  color: string;
  description: string;
  image: string;
}

const Admin: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [form, setForm] = useState<Omit<Car, "id">>({
    name: "",
    brand: "",
    year: new Date().getFullYear(),
    price: "",
    engine: "",
    topSpeed: "",
    color: "",
    description: "",
    image: "",
  });

  const [editId, setEditId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      setCars(cars.map(car => (car.id === editId ? { ...form, id: editId } : car)));
      setEditId(null);
    } else {
      const newCar: Car = { ...form, id: Date.now() };
      setCars([...cars, newCar]);
    }
    setForm({
      name: "",
      brand: "",
      year: new Date().getFullYear(),
      price: "",
      engine: "",
      topSpeed: "",
      color: "",
      description: "",
      image: "",
    });
  };

  const handleEdit = (car: Car) => {
    setForm({ ...car });
    setEditId(car.id);
  };

  const handleDelete = (id: number) => {
    setCars(cars.filter(car => car.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Admin Panel</h1>

      {/* Add / Edit Car Form */}
      <form className="bg-gray-100 p-6 rounded-lg shadow-md mb-12" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">{editId ? "Edit Car" : "Add New Car"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Car Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={form.brand}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="engine"
            placeholder="Engine"
            value={form.engine}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="topSpeed"
            placeholder="Top Speed"
            value={form.topSpeed}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={form.color}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            className="p-2 border rounded md:col-span-2"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {editId ? "Update Car" : "Add Car"}
        </button>
      </form>

      {/* Cars Management Table */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Manage Cars</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Brand</th>
              <th className="py-2 px-4 text-left">Year</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id} className="border-b">
                <td className="py-2 px-4">
                  <img src={car.image} alt={car.name} className="w-20 h-12 object-cover rounded" />
                </td>
                <td className="py-2 px-4">{car.name}</td>
                <td className="py-2 px-4">{car.brand}</td>
                <td className="py-2 px-4">{car.year}</td>
                <td className="py-2 px-4">{car.price}</td>
                <td className="py-2 px-4 space-x-2">
                  <button
                    onClick={() => handleEdit(car)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(car.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {cars.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No cars added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;