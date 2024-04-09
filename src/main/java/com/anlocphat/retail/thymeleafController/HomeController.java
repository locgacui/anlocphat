package com.anlocphat.retail.thymeleafController;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/homeHorizontal")
    public String homeHorizontal() {
        return "index-horizontal";
    }
}