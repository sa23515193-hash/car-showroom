import React from "react";

// TypeScript interface for car
interface Car {
  name: string;
  image: string;
  description: string;
}

const About: React.FC = () => {
  const cars: Car[] = [
    {
       name: "Lamborghini Aventador",
    image : process.env.PUBLIC_URL +"/images/lam.jpg.jpg" ,
      description:` The Lamborghini Aventador is a masterpiece of automotive engineering, featuring a naturally aspirated V12 6.5L engine producing 770 horsepower. It accelerates from 0-100 km/h in just 2.9 seconds with a top speed of 350 km/h. Advanced aerodynamics and all-wheel drive ensure precision handling. Inside, it boasts luxurious leather interiors, cutting-edge technology, and a driver-focused cockpit. This supercar offers extreme speed, exclusivity, and unmatched driving experience.`
    },
    {
      name: "Toyota Land Cruiser",
      image: process.env.PUBLIC_URL +"/images/toy.jpg.jpg",
      description:` The Toyota Land Cruiser is a legendary SUV powered by a robust V8 4.6L engine with a top speed of 210 km/h. Renowned for its off-road capability, it features spacious interiors, advanced safety systems, and smooth handling. Ideal for long journeys and rugged terrains, it combines reliability, comfort, and durability, making it one of the most trusted SUVs worldwide.`
    },
    {
      name: "Audi R8",
      image: process.env.PUBLIC_URL +"/images/audi.jpg.jpg",
      description: `The Audi R8 features a V10 5.2L engine with Quattro all-wheel drive, achieving 0-100 km/h in 3.2 seconds and a top speed of 330 km/h. Lightweight frame, precision handling, and aerodynamic design deliver an exhilarating experience. The interior combines luxury and technology, making it ideal for drivers seeking performance and elegance.`
    },
    {
      name: "BMW M5",
      image: process.env.PUBLIC_URL +"/images/bmw.jpg.jpg",
      description:` The BMW M5 is a high-performance sedan with a 4.4L Twin-Turbo V8 engine, producing over 600 hp. Accelerating 0-100 km/h in 3.3 seconds, it features sport suspension, adaptive handling, and dynamic driving modes. Interiors are crafted with premium materials, ergonomic seats, and advanced technology, balancing speed, comfort, and luxury.`
    },
    {
      name: "Ford Mustang",
      image: process.env.PUBLIC_URL +"/images/for.jpg.jpg",
      description: `The Ford Mustang is an iconic American muscle car with a 5.0L V8 engine, accelerating from 0-100 km/h in 4.2 seconds and a top speed of 250 km/h. It offers aggressive styling, responsive handling, and a thrilling driving experience. Interiors combine modern technology with driver-focused ergonomics, making it exciting yet practical.`
    },
    {
      name: "Mercedes-Benz G63",
      image: process.env.PUBLIC_URL + "/images/mer.jpg.jpg",
      description: `The Mercedes-Benz G63 AMG is a luxury SUV with a 4.0L V8 Biturbo engine delivering 585 hp, top speed 240 km/h. Known for off-road prowess, premium interiors, and cutting-edge tech, it combines power, style, and comfort. Perfect for urban and adventurous driving.`
    },
    {
      name: "Chevrolet Camaro",
      image: process.env.PUBLIC_URL +"/images/char.jpg.jpg",
      description: `The Chevrolet Camaro is a muscle car powered by a 6.2L V8 engine with a top speed of 290 km/h. Sleek design, sporty suspension, and modern tech deliver thrilling performance. Comfortable interiors and aggressive looks make it perfect for enthusiasts seeking speed and style.`
    },
    {
      name: "Porsche 911",
      image: process.env.PUBLIC_URL +"/images/por.jpg.jpg",
      description: `The Porsche 911 is a legendary sports car with a 3.0L Turbo Flat-six engine, 0-100 km/h in 3.5 seconds, and top speed 330 km/h. Aerodynamic design, precise handling, and lightweight chassis deliver exhilarating performance. Luxury interiors and advanced tech make it a perfect blend of speed and comfort.`
    },
    {
      name: "Maserati Levante",
      image:process.env.PUBLIC_URL + "/images/car.jpg.jpg",
      description: `The Maserati Levante is a luxury SUV powered by a 3.0L Twin-Turbo V6 engine with top speed 264 km/h. Smooth handling, Italian craftsmanship, and luxurious interiors create an elegant driving experience. Advanced suspension and refined technology make it perfect for those valuing style, comfort, and performance.`
    },
    {
      name: "Ferrari SF90",
      image: process.env.PUBLIC_URL +"/images/frar.jpg.jpg",
      description:` The Ferrari SF90 is a hybrid supercar with a 4.0L V8 engine plus three electric motors producing 986 hp. It accelerates 0-100 km/h in 2.5 seconds with top speed 340 km/h. Track-focused aerodynamics, adaptive handling, and luxurious interior deliver ultimate speed, innovation, and driving excitement.`
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Showroom Info */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Our Showroom</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to <span className="font-semibold">Car Showroom</span>, a premium destination for luxury and performance vehicles for over a decade. We provide an exclusive selection of branded cars with top-quality service.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our mission is to give customers complete freedom to choose their dream cars. From iconic supercars to luxury SUVs, each vehicle is carefully selected to ensure performance, style, safety, and comfort.
      </p>

      {/* Cars Details */}
      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Our Premium Cars</h2>
      <div className="space-y-12">
        {cars.map((car, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-6">
            <img src={car.image} alt={car.name} className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg" />
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{car.name}</h3>
              <p className="text-gray-700">{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;