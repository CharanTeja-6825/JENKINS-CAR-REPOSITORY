import React, { useState } from 'react';
import axios from 'axios';

function AddCar() {
    const backendUrl = import.meta.env.VITE_API_URL;

    const [formData, setFormData] = useState({
        carName: "",
        carCategory: "",
        carMileage: "",
        carModel: "",
        carPrice: "",
        carVariant: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${backendUrl}/cars`, formData);
            setMessage("Car added successfully!");
            setFormData({
                carName: "",
                carCategory: "",
                carMileage: "",
                carModel: "",
                carPrice: "",
                carVariant: ""
            });
        } catch (err) {
            console.error(err);
            setMessage("Error adding car.");
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <form
                className="flex flex-col gap-4 p-8 rounded-lg w-96 bg-white shadow-2xl"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Add New Car
                </h2>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Car Name</label>
                    <input
                        type="text"
                        name="carName"
                        value={formData.carName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter car name"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        name="carCategory"
                        value={formData.carCategory}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select category</option>
                        <option value="SUV">SUV</option>
                        <option value="SEDAN">Sedan</option>
                        <option value="HATCHBACK">Hatchback</option>
                        <option value="ELECTRIC">Electric</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Mileage</label>
                    <input
                        type="text"
                        name="carMileage"
                        value={formData.carMileage}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 18 km/l or 450 km (EV)"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Model</label>
                    <input
                        type="text"
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter model year"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="carPrice"
                        value={formData.carPrice}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter price"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Variant</label>
                    <input
                        type="text"
                        name="carVariant"
                        value={formData.carVariant}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Base / Sport / Performance"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition transform hover:scale-[1.02]"
                >
                    Add Car
                </button>

                {message && (
                    <div
                        className={`mt-4 p-4 rounded-md text-center flex items-center justify-center ${
                            message.includes("Error")
                                ? "bg-red-50 border border-red-200"
                                : "bg-green-50 border border-green-200"
                        }`}
                    >
                        <div className="flex-shrink-0 mr-3">
                            {message.includes("Error") ? (
                                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                        <span className={`text-sm font-medium ${
                            message.includes("Error") ? "text-red-800" : "text-green-800"
                        }`}>
                            {message}
                        </span>
                    </div>
                )}
            </form>
        </div>
    );
}

export default AddCar;
