package com.example.demo.controller;

import com.example.demo.dto.Post;
import com.example.demo.service.BoardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
@Tag(name = "Board API", description = "커뮤니티 게시판 관련 API")
public class BoardController {
    private final BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    /**
     * 모든 게시글 조회 API
     * 요청 예시: GET /board
     */
    @Operation(
            summary = "모든 게시글 조회",
            description = "모든 게시글 목록을 조회합니다.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "게시글 조회 성공"),
                    @ApiResponse(responseCode = "404", description = "게시글 없음")
            }
    )
    @GetMapping
    public List<Post> getAllPosts() {
        return boardService.getAllPosts();
    }

    /**
     * 게시글 작성 API
     * 요청 예시: POST /board?title=제목1&content=내용1
     */
    @Operation(
            summary = "게시글 작성",
            description = "새로운 게시글을 작성합니다.",
            responses = {
                    @ApiResponse(responseCode = "201", description = "게시글 작성 성공"),
                    @ApiResponse(responseCode = "400", description = "잘못된 요청")
            }
    )
    @PostMapping
    public Post createPost(
            @Parameter(description = "게시글 제목", example = "제목1") @RequestParam String title,
            @Parameter(description = "게시글 내용", example = "내용1") @RequestParam String content
    ) {
        return boardService.createPost(title, content);
    }

    /**
     * 특정 게시글 조회 API
     * 요청 예시: GET /board/{id}
     */
    @Operation(
            summary = "게시글 조회",
            description = "게시글의 ID로 특정 게시글을 조회합니다.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "게시글 조회 성공"),
                    @ApiResponse(responseCode = "404", description = "게시글 없음")
            }
    )
    @GetMapping("/{id}")
    public Post getPostById(
            @Parameter(description = "게시글 ID", example = "1") @PathVariable Long id
    ) {
        return boardService.getPostById(id);
    }
}
