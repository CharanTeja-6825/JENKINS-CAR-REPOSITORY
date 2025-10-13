import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Manage() {

    const backendUrl = import.meta.env.VITE_API_URL;

    const [cars, setCars] = useState([])
    const [message, setMessage] = useState("")

    const fetchCars = async () => {
        try {
            const res = await axios.get(`${backendUrl}/all`)
            setCars(res.data)
        } catch (err) {
            setMessage("Error fetching cars.")
        }
    }

    useEffect(() => {
        fetchCars()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendUrl}/${id}`)
            setMessage("Car deleted successfully!")
            fetchCars()
        } catch {
            setMessage("Error deleting car.")
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h2 className="text-2xl font-bold text-gray-900">Manage Cars</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all cars in your inventory including their name, model, variant, and price.
                    </p>
                </div>
            </div>
            
            {message && (
                <div className="mt-4 p-4 rounded-md bg-green-50 border border-green-200">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">{message}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Model</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Variant</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Mileage</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                                        <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {cars.map(car => (
                                        <tr key={car.id} className="hover:bg-gray-50">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{car.carName}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.carCategory}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.carModel}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.carVariant}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.carMileage}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.carPrice}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <button
                                                    onClick={() => handleDelete(car.id)}
                                                    className="text-red-600 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 inline-flex items-center px-3 py-1 border border-transparent rounded-md"
                                                >
                                                    <svg className="h-4 w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage
