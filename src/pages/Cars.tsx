import React, { useMemo, useState } from "react";
import { CARS, Car } from "../data/cars";
import CarCard from "../components/CarCards";

const Cars: React.FC = () => {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");

  const brands = useMemo(() => Array.from(new Set(CARS.map(c => c.brand))), []);

  const filtered = useMemo(() => {
    return CARS.filter((c) => {
      const matchesQuery = (c.name  + c.brand).toLowerCase().includes(query.toLowerCase());
      const matchesBrand = brand ? c.brand === brand : true;
      return matchesQuery && matchesBrand;
    });
  }, [query, brand]);

  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold mb-4">All Cars</h2>

      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or brand..."
            className="px-3 py-2 border rounded-md"
          />
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="px-3 py-2 border rounded-md">
            <option value="">All Brands</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div className="text-sm text-gray-600">{filtered.length} result(s)</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(c => <CarCard key={c.id} car={c as Car} />)}
      </div>
    </section>
  );
};

export default Cars;