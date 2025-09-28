import React from "react";
import { Link } from "react-router-dom";
import { Car } from "../data/cars";

const CarCard: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform">
      <img src={car.image} alt={car.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{car.name}</h3>
        <p className="text-sm text-gray-500">{car.brand} • {car.year}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="text-red-600 font-bold">{car.price}</div>
          <Link to={'/cars/${car.id}'} className="text-sm px-3 py-1 bg-gray-900 text-white rounded hover:bg-gray-800">
            View
          </Link>
          

        </div>
      </div>
    </div>
  );
};

export default CarCard;