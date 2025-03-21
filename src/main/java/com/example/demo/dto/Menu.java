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

    public Menu(Long id, String name, String category, double price, String description, String purchaseLink) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.purchaseLink = purchaseLink;
    }
}
