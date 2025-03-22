package com.example.demo.repository;

import com.example.demo.dto.Menu;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class MenuRepository {

    private final List<Menu> menuList = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(1);

    public MenuRepository() {
        // 초기 데이터
        menuList.add(new Menu(counter.getAndIncrement(), "수제유자잼쿠키 디저트선물세트", "DESSERT", 40000, "수제 유자잼쿠키세트. 리얼유자, 고급앵커버터, 국산전분이들어간 맛과 영양 그리고 의미까지 담은 착한 수제잼쿠키세트. 낱개 40개입", "https://smartstore.naver.com/hygafe2022/products/11326088935?site_preference=device&NaPm=ct%3Dm8iy7huy%7Cci%3Dshopn%7Ctr%3Dmo%7Chk%3D67bcb4a77b2d5a62e94e2c855deb3679f3bd15ab%7Ctrx%3Dundefined", "https://shop-phinf.pstatic.net/20250106_59/1736153516070vHGmJ_JPEG/62646821807085071_515036684.jpg?type=f296_296"));
        menuList.add(new Menu(counter.getAndIncrement(), "수제바나나브레드 디저트선물세트", "DESSERT", 32000, "수제 바나나브레드. 리얼 바나나, 고급 머스코바도 황설탕, 시나몬가루, 피칸, 호두앵커버터, 국산 전분이 들어간 맛과 영양 그리고 의미까지 담은 착한 수제 바나나브레드. 홀케이크 2개", "https://smartstore.naver.com/hygafe2022/products/11326040830?site_preference=device&NaPm=ct%3Dm8iye6q0%7Cci%3Dshopn%7Ctr%3Dmo%7Chk%3Dd0b059d942f6a91a9ee333a977dbc84471df838a%7Ctrx%3Dundefined", "https://shop-phinf.pstatic.net/20250106_202/1736152488028GMLA6_JPEG/4503741811847043_2036104014.jpg?type=f296_296"));
        menuList.add(new Menu(counter.getAndIncrement(), "고래바리스타가 함께하는 출장케이터링", "CATER", 300000, "출장케이터링 서비스", "https://smartstore.naver.com/hygafe2022/products/9901479371", "https://shop-phinf.pstatic.net/20241220_277/1734676588584vtzMS_JPEG/47951762372855986_811665635.jpg?type=f296_296"));
        menuList.add(new Menu(counter.getAndIncrement(), "스페셜티 드립백커피 세트(10개입)", "BEVERAGE", 15000, "드립백10개(12gx10EA). 다크초콜릿의 풍미와, 묵직한 바디감, 산미를 잘 억제하여 깔끔하며 단맛이 매력적인 커피의 신사같은 블렌딩입니다.", "https://smartstore.naver.com/hygafe2022/products/8709202650", "https://shop-phinf.pstatic.net/20240129_274/1706490265444hfzN1_JPEG/107626049068057028_143486202.jpg?type=f296_296"));
        menuList.add(new Menu(counter.getAndIncrement(), "친환경 리트머그컵", "MD", 15000, "Unroll surface를 통해 제작한 컵으로 나무로부터 만들어진 CXP 소재를 이용해 만들어진 컵입니다.", "https://smartstore.naver.com/hygafe2022/products/9736715387", "https://shop-phinf.pstatic.net/20240129_173/1706490097261O1FTo_JPEG/107625880896865428_477216627.jpg?type=f296_296"));
        menuList.add(new Menu(counter.getAndIncrement(), "고래 바리스타 스티커", "MD", 2000, "노트북, 다이어리, 핸드폰 등 원하는 곳에 붙여보세요!", "https://smartstore.naver.com/hygafe2022/products/10922575288", "https://shop-phinf.pstatic.net/20240926_158/1727316555376atY6k_JPEG/61449368481972265_1553691962.jpg?type=f296_296"));
        menuList.add(new Menu(counter.getAndIncrement(), "고래 바리스타 미니노트", "MD", 5500, "어디서나 편하게 들고 다닐 수 있는 미니노트입니다. 고래 바리스타가 후배 바리스타에게 하고 싶은 메시지를 담아 보았어요!", "https://smartstore.naver.com/hygafe2022/products/10922352059", "https://shop-phinf.pstatic.net/20240926_255/1727313550926LdyYq_JPEG/3681141953817893_1970226136.jpg?type=f295_381"));

    }

    public List<Menu> findAll() {
        return menuList;
    }

    public Optional<Menu> findById(Long id) {
        return menuList.stream().filter(menu -> menu.getId().equals(id)).findFirst();
    }

    public void save(Menu menu) {https://shop-phinf.pstatic.net/20240926_255/1727313550926LdyYq_JPEG/3681141953817893_1970226136.jpg?type=f296_296
        menu.setId(counter.getAndIncrement());
        menuList.add(menu);
    }

    public List<Menu> findByCategory(String category) {
        List<Menu> result = new ArrayList<>();
        for (Menu menu : menuList) {
            if (menu.getCategory().equals(category)) {
                result.add(menu);
            }
        }
        return result;
    }
}
