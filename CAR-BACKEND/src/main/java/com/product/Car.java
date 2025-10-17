package com.product;

import jakarta.persistence.*;

@Entity
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String carName;
    private String carCategory;
    private String carMileage;
    private String carModel;
    private String carPrice;
    private String carVariant;
	
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCarName() {
		return carName;
	}
	public void setCarName(String carName) {
		this.carName = carName;
	}
	public String getCarCategory() {
		return carCategory;
	}
	public void setCarCategory(String carCategory) {
		this.carCategory = carCategory;
	}
	public String getCarMileage() {
		return carMileage;
	}
	public void setCarMileage(String carMileage) {
		this.carMileage = carMileage;
	}
	public String getCarModel() {
		return carModel;
	}
	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}
	public String getCarPrice() {
		return carPrice;
	}
	public void setCarPrice(String carPrice) {
		this.carPrice = carPrice;
	}
	public String getCarVariant() {
		return carVariant;
	}
	public void setCarVariant(String carVariant) {
		this.carVariant = carVariant;
	}
    
}
