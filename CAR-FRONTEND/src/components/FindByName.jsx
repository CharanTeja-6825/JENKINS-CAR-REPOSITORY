import React, { useState } from 'react'
import axios from 'axios'

function FindByName() {

    const backendUrl = import.meta.env.VITE_API_URL;


    const [name, setName] = useState("")
    const [car, setCar] = useState(null)
    const [message, setMessage] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault()
        setCar(null)
        setMessage("")
        try {
            const res = await axios.get(`${backendUrl}/search?name=${name}`)
            let data = res.data
            if (Array.isArray(data)) {
                data = data.length > 0 ? data[0] : null
            }
            if (data && data.carName) {
                setCar(data)
                setMessage("")
            } else {
                setCar(null)
                setMessage("Car not found.")
            }
        } catch {
            setCar(null)
            setMessage("Car not found.")
        }
    }

    return (
        <div className="flex flex-col items-center mt-10 max-w-2xl mx-auto px-4">
            <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Find Car</h2>
                <form onSubmit={handleSearch} className="flex gap-3 mb-6">
                    <div className="flex-grow">
                        <input
                            type="text"
                            placeholder="Enter Car Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Search
                    </button>
                </form>

                {message && (
                    <div className="w-full p-4 rounded-md bg-red-50 text-red-700 text-center mb-4">
                        {message}
                    </div>
                )}

                {car && car.carName && (
                    <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
                        <div className="px-6 py-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Car Details</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="text-gray-600">Name</span>
                                    <span className="font-medium text-gray-900">{car.carName}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="text-gray-600">Category</span>
                                    <span className="font-medium text-gray-900">{car.carCategory}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="text-gray-600">Model</span>
                                    <span className="font-medium text-gray-900">{car.carModel}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="text-gray-600">Mileage</span>
                                    <span className="font-medium text-gray-900">{car.carMileage}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="text-gray-600">Variant</span>
                                    <span className="font-medium text-gray-900">{car.carVariant}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Price</span>
                                    <span className="font-medium text-gray-900">{car.carPrice}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FindByName
