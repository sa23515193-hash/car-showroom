import React from "react";
import { useParams, Link } from "react-router-dom";
import { CARS } from "../data/cars";

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = CARS.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="container py-20">
        <h2 className="text-2xl font-bold">Car not found</h2>
        <Link to="/cars" className="text-red-600 hover:underline">Back to Cars</Link>
      </div>
    );
  }

  return (
    <div className="container py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img src={car.image} alt={car.name} className="w-full rounded-lg object-cover" />
      <div>
        <h2 className="text-3xl font-bold mb-2">{car.name}</h2>
        <p className="text-gray-500 mb-4">{car.brand} • {car.year} • {car.kms}</p>
        <div className="text-2xl text-red-600 font-bold mb-4">{car.price}</div>
        <p className="mb-6">{car.description}</p>

        <form className="space-y-3 max-w-md">
          <h3 className="font-semibold">Send Inquiry</h3>
          <input placeholder="Your name" className="w-full px-3 py-2 border rounded" />
          <input placeholder="Email or Phone" className="w-full px-3 py-2 border rounded" />
          <textarea placeholder="Message" className="w-full px-3 py-2 border rounded" rows={4} />
          <button type="button" className="px-4 py-2 bg-red-600 text-white rounded">Send Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default CarDetail;