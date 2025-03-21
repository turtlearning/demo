package com.example.demo.controller;

import com.example.demo.service.LoginService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@Tag(name = "Login API", description = "사용자 로그인 관련 API")
public class LoginController {
    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    /**
     * 로그인 API
     * 요청 예시: POST /login?username=user1&password=password1
     */
    @Operation(
            summary = "사용자 로그인",
            description = "사용자가 제공한 사용자명과 비밀번호로 로그인을 시도합니다.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "로그인 성공", content = @Content(schema = @Schema(example = "로그인 성공!"))),
                    @ApiResponse(responseCode = "401", description = "로그인 실패", content = @Content(schema = @Schema(example = "로그인 실패: 사용자명 또는 비밀번호가 잘못되었습니다.")))
            }
    )
    @PostMapping
    public String login(
            @Parameter(description = "사용자명", example = "user1") @RequestParam String username,
            @Parameter(description = "비밀번호", example = "password1") @RequestParam String password
    ) {
        boolean isAuthenticated = loginService.login(username, password);
        if (isAuthenticated) {
            return "로그인 성공!";
        } else {
            return "로그인 실패: 사용자명 또는 비밀번호가 잘못되었습니다.";
        }
    }
}
