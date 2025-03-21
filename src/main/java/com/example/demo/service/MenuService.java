package com.example.demo.service;

import com.example.demo.dto.Menu;
import com.example.demo.repository.MenuRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {
    private final MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    public Optional<Menu> getMenuById(Long id) {
        return menuRepository.findById(id);
    }

    public void addMenu(String name, String category, double price, String description, String purchaseLink) {
        Menu newMenu = new Menu(null, name, category, price, description, purchaseLink);
        menuRepository.save(newMenu);
    }

    public List<Menu> getMenuByCategory(String category) {
        return menuRepository.findByCategory(category);
    }
}
