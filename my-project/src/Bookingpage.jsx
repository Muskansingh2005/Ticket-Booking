import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import tajMahalImage from "./assets/tajmahal.png";

const BookingPage = () => {
  const [today, setToday] = useState("");
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const [guidedTour, setGuidedTour] = useState(false);
  const [audioGuide, setAudioGuide] = useState(false);
  const [total, setTotal] = useState(0);

  // Pricing Constants
  const ticketPrices = {
    adult: 500,
    child: 250,
    senior: 300,
    guidedTour: 100,
    audioGuide: 50,
  };

  useEffect(() => {
    // Get today's date in the format YYYY-MM-DD
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setToday(formattedDate);
  }, []);

  useEffect(() => {
    const ticketTotal =
      adultCount * ticketPrices.adult +
      childCount * ticketPrices.child +
      seniorCount * ticketPrices.senior;
    const extrasTotal =
      (guidedTour ? ticketPrices.guidedTour : 0) +
      (audioGuide ? ticketPrices.audioGuide : 0);
    setTotal(ticketTotal + extrasTotal);
  }, [adultCount, childCount, seniorCount, guidedTour, audioGuide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">Tourism Booking</h1>
        <p className="text-lg text-gray-600 mt-2">
          Book your trip to the Taj Mahal effortlessly!
        </p>
      </header>
      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col">
          <div className="bg-white h-96 rounded-lg shadow-lg overflow-hidden">
            <img
              src={tajMahalImage}
              alt="Taj Mahal"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800">Taj Mahal</h2>
              <p className="text-gray-600 mt-2 text-sm">
                Experience the Taj Mahal, one of the Seven Wonders of the World, a
                stunning symbol of love and Mughal architecture.
              </p>
            </div>
          </div>

          {/* Animated Cards */}
          <div className="flex flex-col gap-y-6 pt-5 items-center">
            {/* Animated Card 1 */}
            <motion.div
              className="bg-black h-[300px] w-[600px] rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-semibold cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              Card 1
            </motion.div>


            {/* Animated Card 2 */}
            <motion.div
              className="bg-black h-[300px] w-[600px] rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-semibold cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Card 2
            </motion.div>

            {/* Animated Card 3 */}
            <motion.div
              className="bg-black h-[300px] w-[600px] rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-semibold cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Card 3
            </motion.div>
          </div>
        </div>

        {/* Right Section - Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Visit Date */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Visit Date</label>
            <input
              type="date"
              min={today}
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Ticket Details Card */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 shadow-md mb-6">
            <h2 className="text-xl font-bold text-gray-700">Ticket Details</h2>
            <div className="space-y-4 mt-4">
              {[{ label: "Adult", price: ticketPrices.adult, count: adultCount, setCount: setAdultCount },
                { label: "Child", price: ticketPrices.child, count: childCount, setCount: setChildCount },
                { label: "Senior Citizen", price: ticketPrices.senior, count: seniorCount, setCount: setSeniorCount },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm lg:text-base">
                  <span>{item.label} (₹{item.price})</span>
                  <div className="flex items-center">
                    <button onClick={() => { if (item.count > 0) item.setCount(item.count - 1); }}
                      className="px-3 py-1 bg-indigo-100 hover:bg-indigo-200 rounded-l">-</button>
                    <span className="px-4">{item.count}</span>
                    <button onClick={() => { item.setCount(item.count + 1); }}
                      className="px-3 py-1 bg-indigo-100 hover:bg-indigo-200 rounded-r">+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-4 shadow-md mb-6">
            <h2 className="text-xl font-bold text-gray-700">Pricing Table</h2>
            <div className="text-gray-600 mt-4 space-y-2">
              <p>Adult Tickets: ₹{adultCount * ticketPrices.adult}</p>
              <p>Child Tickets: ₹{childCount * ticketPrices.child}</p>
              <p>Senior Citizen Tickets: ₹{seniorCount * ticketPrices.senior}</p>
              {guidedTour && <p>Guided Tour: ₹{ticketPrices.guidedTour}</p>}
              {audioGuide && <p>Audio Guide: ₹{ticketPrices.audioGuide}</p>}
              <p className="mt-2 font-bold text-lg text-gray-800">Total: ₹{total}</p>
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-4 shadow-md mb-6">
            <h2 className="text-xl font-bold text-gray-700">Additional Options</h2>
            <label className="flex items-center mt-4 space-x-2">
              <input type="checkbox" checked={guidedTour} onChange={(e) => setGuidedTour(e.target.checked)} />
              <span>Guided Tour (+₹100)</span>
            </label>
            <label className="flex items-center mt-4 space-x-2">
              <input type="checkbox" checked={audioGuide} onChange={(e) => setAudioGuide(e.target.checked)} />
              <span>Audio Guide (+₹50)</span>
            </label>
          </div>

          {/* Payment Section */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold text-gray-700">Payment Options</h2>
            <div className="mt-4 space-y-2">
              {["Credit/Debit Card", "PayTM", "UPI"].map((method, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="radio" name="payment" />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Confirm Button */}
          <button className="mt-6 w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
