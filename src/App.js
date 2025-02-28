import React from "react";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { ShoppingCart, Search } from "lucide-react";

const SneakerStore = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold">Sneaker Haven</h1>
        <div className="flex gap-4">
          <Button variant="ghost">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </header>
      
      {/* Sneaker Collection */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Card key={item} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={`https://via.placeholder.com/300x200?text=Sneaker+${item}`}
              alt={`Sneaker ${item}`}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Sneaker Model {item}</h2>
              <p className="text-gray-600">$120.00</p>
              <Button className="mt-2 w-full">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SneakerStore;
