package com.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
	
	@Autowired
    private CarRepository carRepository;


    // Add product
    public Car addProduct(Car product) {
        return carRepository.save(product);
    }

    // Get all products
    public List<Car> getAllProducts() {
        return carRepository.findAll();
    }

    // Find by name
    public List<Car> getProductsByName(String name) {
        return carRepository.findByCarName(name);
    }

    // Delete product
    public void deleteProduct(Long id) {
        carRepository.deleteById(id);
    }
}
