import React from "react";
import { CARS } from "../data/cars";
import CarCard from "../components/CarCards";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
 const brands = [
    { name: "Tesla", logo: process.env.PUBLIC_URL + "/images/tesb.jpg.jpg" },
    { name: "Lamborghini", logo: process.env.PUBLIC_URL +"/images/lamb.jpg.jpg" },
    { name: "Ferrari", logo: process.env.PUBLIC_URL + "/images/ferb.jpg.jpg" },
    { name: "Audi", logo:process.env.PUBLIC_URL + "/images/audib.jpg.jpg" },
  ];

  const services = [
    { title: "Financing Options", description: "Flexible financing plans for all customers." },
    { title: "After-Sales Service", description: "Reliable service and maintenance for your cars." },
    { title: "Warranty & Authenticity", description: "Every car is genuine with warranty included." },
    { title: "Luxury Experience", description: "Personalized support to enhance your buying experience." },
  ];
const testimonials = [
    { name: "John Doe", text: "Amazing showroom! Found my dream car with excellent service.", image: process.env.PUBLIC_URL + "/images/john.jpg.jpg" },
    { name: "Sarah Smith", text: "Highly recommend! Luxury cars at their best.", image: process.env.PUBLIC_URL + "/images/sar.jpg.jpg" },
    { name: "Mike Johnson", text: "Professional staff and fantastic options for every brand.", image: process.env.PUBLIC_URL + "/images/mike.jpg.jpg" },
  ];

  

  return (
    <div>
      {/* Hero */}
      <header className="bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center h-[420px] flex items-center">
        <div className="container text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">Find Your Dream Car</h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow">Premium cars for sale and lease — explore our exclusive collection.</p>
          <Link to="/cars" className="inline-block mt-6 px-6 py-3 bg-red-600 rounded text-white font-semibold hover:bg-red-700">Browse Cars</Link>
        </div>
      </header>

      {/* Featured Cars */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Cars</h2>
          <Link to="/cars" className="text-red-600 hover:underline">See all</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARS.slice(0, 3).map((c) => <CarCard key={c.id} car={c} />)}
        </div>
      </section>

{/* Brands Section */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Trusted Brands & Owners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-24 h-24 object-contain"
              />
              <span className="text-gray-700 font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-purpule-800 mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-purpule-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Trusted Expertise</h3>
            <p className="text-gray-700">Over a decade of experience in luxury and premium cars.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Wide Selection</h3>
            <p className="text-gray-700">Top brands and exclusive models for every car enthusiast.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Personalized Service</h3>
            <p className="text-gray-700">Tailored experience to help you choose the perfect car.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Customer Satisfaction</h3>
            <p className="text-gray-700">Our priority is your happiness and a seamless buying experience.</p>
          </div>
        </div>
      </section>

{/* Testimonials Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 mb-4 text-center">"{t.text}"</p>
              <span className="font-semibold text-gray-800">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-6 rounded-lg mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span>© {new Date().getFullYear()} Car Showroom. All rights reserved.</span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Github</a>
            <a href="#" className="hover:text-white">linkedin</a>
             <a href="#" className="hover:text-white">fiver</a>
              <a href="#" className="hover:text-white">upwork</a>


          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;