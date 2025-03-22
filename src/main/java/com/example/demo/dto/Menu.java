package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Menu {

    private Long id;
    private String name;
    private String category;
    private double price;
    private String description;
    private String purchaseLink;
    private String image;

    public Menu(Long id, String name, String category, double price, String description, String purchaseLink, String image) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.purchaseLink = purchaseLink;
        this.image = image;
    }
}
