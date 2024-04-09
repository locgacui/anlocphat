package com.anlocphat.retail.thymeleafController;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NotAuthorizedController {
    @GetMapping("/notAuthorized")
    @PreAuthorize("permitAll()")
    public String notAuthorized() {
        return "pages-misc-not-authorized";
    }
}
