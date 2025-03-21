package com.example.demo.repository;

import com.example.demo.dto.User;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class UserRepository {

    // 하드코딩된 사용자 데이터
    private final Map<String, User> users = new HashMap<>();

    public UserRepository() {
        users.put("admin", new User("admin", "admin123"));
        users.put("user1", new User("user1", "password1"));
    }

    public User findByUsername(String username) {
        return users.get(username);
    }
}
