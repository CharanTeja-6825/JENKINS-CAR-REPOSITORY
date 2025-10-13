package com.product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/car-api")
public class CarController {
	
	@Autowired
    private CarService carService;

    @GetMapping("/")
    public String home(){
        return "Jenkins Practice using Product Demo";
    }

    // Add product
    @PostMapping("/cars")
    public Car addProduct(@RequestBody Car product) {
        return carService.addProduct(product);
    }

    // Get all products
    @GetMapping("/all")
    public List<Car> getAllProducts() {
        return carService.getAllProducts();
    }

    // Find by name
    @GetMapping("/search")
    public List<Car> getProductsByName(@RequestParam String name) {
        return carService.getProductsByName(name);
    }

    // Delete product
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        carService.deleteProduct(id);
        return "Product deleted successfully!";
    }
}
