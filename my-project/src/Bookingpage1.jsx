import React from "react";

const BookingPage1 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4">
        <h1 className="text-xl font-bold">Book Tickets</h1>
        <i className="fa fa-user-circle text-2xl text-gray-600"></i>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4">
        {/* Hero Section */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/1200x400" // Replace with Taj Mahal image URL
            alt="Taj Mahal"
            className="w-full rounded-md"
          />
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-md p-6 mt-6">
          <img
            src="https://via.placeholder.com/100" // Replace with a user image
            alt="John Smith"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-lg font-bold">John Smith</h2>
          <p className="text-gray-500">@johnsmith</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
            Book Now
          </button>
        </div>

        {/* Ticket Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-200 text-center p-4 rounded-md">Agra</div>
          <div className="bg-gray-200 text-center p-4 rounded-md">7:00 AM</div>
          <div className="bg-gray-200 text-center p-4 rounded-md">₹50</div>
          <div className="bg-green-500 text-center text-white p-4 rounded-md">
            Available
          </div>
        </div>

        {/* Places Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <PlaceCard
            image="https://via.placeholder.com/300"
            title="Red Fort"
            description="Historic fort in Delhi"
          />
          <PlaceCard
            image="https://via.placeholder.com/300"
            title="Qutub Minar"
            description="Tallest brick minaret"
          />
          <PlaceCard
            image="https://via.placeholder.com/300"
            title="Lotus Temple"
            description="Bahá'í House of Worship"
          />
          <PlaceCard
            image="https://via.placeholder.com/300"
            title="Hampi"
            description="UNESCO World Heritage Site"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white shadow-md p-4 flex justify-around">
        <button className="text-gray-500 hover:text-blue-500">Home</button>
        <button className="text-gray-500 hover:text-blue-500">Search</button>
        <button className="text-gray-500 hover:text-blue-500">Bookings</button>
        <button className="text-gray-500 hover:text-blue-500">Profile</button>
      </footer>
    </div>
  );
};

const PlaceCard = ({ image, title, description }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </div>
);

export default BookingPage1;
