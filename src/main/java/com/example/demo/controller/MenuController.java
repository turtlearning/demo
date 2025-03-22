package com.example.demo.controller;

import com.example.demo.dto.Menu;
import com.example.demo.service.MenuService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/menu")
@Tag(name = "Menu API", description = "메뉴 관리 API")
public class MenuController {
    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    /**
     * 모든 메뉴 조회 API
     */
    @Operation(
            summary = "모든 메뉴 조회",
            description = "등록된 모든 메뉴를 조회합니다.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "메뉴 목록 조회 성공",
                            content = @Content(schema = @Schema(implementation = Menu.class)))
            }
    )
    @GetMapping
    public List<Menu> getAllMenus() {
        return menuService.getAllMenus();
    }

    /**
     * 특정 메뉴 조회 API
     */
    @Operation(
            summary = "특정 메뉴 조회",
            description = "ID를 사용하여 특정 메뉴를 조회합니다.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "메뉴 조회 성공",
                            content = @Content(schema = @Schema(implementation = Menu.class))),
                    @ApiResponse(responseCode = "404", description = "메뉴를 찾을 수 없음")
            }
    )
    @GetMapping("/{id}")
    public Optional<Menu> getMenuById(
            @Parameter(description = "메뉴 ID", example = "1") @PathVariable Long id
    ) {
        return menuService.getMenuById(id);
    }

    /**
     * 카테고리 별 메뉴 조회 API
     * @param category
     * @return List<Menu>
     * 요청 예시 : GET /menu/category/DESSERT
     */
    @Operation(
            summary = "카테고리 별 메뉴 조회",
            description = "카테고리를 사용하여 메뉴를 조회합니다.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "메뉴 조회 성공",
                            content = @Content(schema = @Schema(implementation = Menu.class))),
                    @ApiResponse(responseCode = "404", description = "메뉴를 찾을 수 없음")
            }
    )
    @GetMapping("/category/{category}")
    public List<Menu> getMenuByCategory(
            @Parameter(description = "메뉴 카테고리", example = "DESSERT") @PathVariable String category
    ) {
        return menuService.getMenuByCategory(category);
    }


    /**
     * 메뉴 추가 API
     */
    @Operation(
            summary = "메뉴 추가",
            description = "새로운 메뉴를 추가합니다.",
            responses = {
                    @ApiResponse(responseCode = "201", description = "메뉴 추가 완료",
                            content = @Content(schema = @Schema(example = "메뉴 추가 완료"))),
                    @ApiResponse(responseCode = "400", description = "잘못된 요청")
            }
    )
    @PostMapping
    public String addMenu(
            @Parameter(description = "메뉴 이름", example = "아메리카노") @RequestParam String name,
            @Parameter(description = "메뉴 카테고리", example = "커피") @RequestParam String category,
            @Parameter(description = "가격", example = "4500") @RequestParam double price,
            @Parameter(description = "설명", example = "깊고 진한 맛의 아메리카노") @RequestParam String description,
            @Parameter(description = "구매 링크", example = "http://example.com") @RequestParam String purchaseLink,
            @RequestParam String image
    ) {
        menuService.addMenu(name, category, price, description, purchaseLink, image);
        return "메뉴 추가 완료";
    }
}
