export type Car = {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: string;
  image: string;
  kms?: string;
  color?: string;
  description?: string;
};

export const CARS: Car[] = [
  {
    id: "1",
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    year: 2022,
    price: "$450,000",
    image:
     process.env.PUBLIC_URL +  "/images/lam.jpg.jpg",
    kms: "1200 km",
    color: "Yellow",
    description: "A high-performance V12 supercar with cutting-edge aerodynamics."
  },
  {
    id: "2",
    name: "Ferrari 488",
    brand: "Ferrari",
    year: 2021,
    price: "$350,000",
    image:
      process.env.PUBLIC_URL +"/images/frar.jpg.jpg",
    kms: "2500 km",
    color: "Red",
    description: "A sports car designed for track and road with thrilling performance."
  },
  {
    id: "3",
    name: "Porsche 911",
    brand: "Porsche",
    year: 2020,
    price: "$120,000",
    image:
      process.env.PUBLIC_URL +"/images/por.jpg.jpg",
    kms: "8000 km",
    color: "Black",
    description: "Classic Porsche handling and timeless design."
  },
  // add more entries as you like
  {
    id: "4",
    name: "Toyota Land Cruiser",
    brand: "Toyota",
    year: 2023,
    price: "$90,000",
    image: process.env.PUBLIC_URL +"/images/toy.jpg.jpg",   // ✅ aapki Toyota image public/images me honi chahiye
    kms: "500 km",
    color: "White",
    description: "A rugged and reliable SUV, perfect for both city and off-road adventures."
  },
  
   {
    id: "5",
    name: "Audi R8",
    brand: "Audi",
    year: 2022,
    price: "$170,000",
    image: process.env.PUBLIC_URL +"/images/audi.jpg.jpg",
    kms: "800 km",
    color: "Red",
    description: "A sleek and sporty supercar with Quattro all-wheel drive."
  },
  {
    id: "6",
    name: "BMW M5",
    brand: "BMW",
    year: 2023,
    price: "$110,000",
    image: process.env.PUBLIC_URL +"/images/bmw.jpg.jpg",
    kms: "600 km",
    color: "Blue",
    description: "A high-performance luxury sedan combining speed and comfort."
  },
  {
    id: "7",
    name: "Ford Mustang",
    brand: "Ford",
    year: 2022,
    price: "$85,000",
    image: process.env.PUBLIC_URL +"/images/for.jpg.jpg",
    kms: "700 km",
    color: "Black",
    description: "An iconic American muscle car with thrilling performance."
  },
  {
    id: "8",
    name: "Mercedes-Benz G63",
    brand: "Mercedes",
    year: 2023,
    price: "$160,000",
    image: process.env.PUBLIC_URL +"/images/mer.jpg.jpg",
    kms: "400 km",
    color: "Silver",
    description: "A luxurious SUV with exceptional power and off-road capabilities."
  },
  {
    id: "9",
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    year: 2022,
    price: "$70,000",
    image: process.env.PUBLIC_URL +"/images/char.jpg.jpg",
    kms: "900 km",
    color: "Yellow",
    description: "A stylish muscle car known for speed, design, and performance."
  },
{
  id: "9",
  name: "Maserati Levante",
  brand: "Maserati",
  year: 2023,
  price: "$120,000",
  image: process.env.PUBLIC_URL +"/images/car.jpg.jpg",   // ✅ public/images folder me ye image honi chahiye
  kms: "400 km",
  color: "Blue",
  description: "A luxury SUV combining Italian elegance, performance, and comfort."
}
];