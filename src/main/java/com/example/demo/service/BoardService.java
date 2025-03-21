package com.example.demo.service;

import com.example.demo.dto.Post;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    private List<Post> posts = new ArrayList<>();
    private long idCounter = 1;

    // 게시글 목록 조회
    public List<Post> getAllPosts() {
        return posts;
    }

    // 게시글 작성
    public Post createPost(String title, String content) {
        Post post = new Post();
        post.setId(idCounter++);
        post.setTitle(title);
        post.setContent(content);
        posts.add(post);
        return post;
    }

    // 게시글 ID로 조회
    public Post getPostById(Long id) {
        return posts.stream()
                .filter(post -> post.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
