package com.anlocphat.retail.thymeleafController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;

@Controller
public class LoginController {
    @GetMapping("/login")
    public String login(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        if (authentication.isAuthenticated()) {
            response.sendRedirect("homeHorizontal");
            return "index-horizontal";
        } else
            return "/login/auth-login-basic";
    }
}
