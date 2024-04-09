package com.anlocphat.retail.config;
import com.anlocphat.retail.model.CustomUserDetails;
import com.anlocphat.retail.service.impl.CustomUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private CustomUserDetailService customUserDetailService;

    @Autowired
    public void setCustomUserDetailService(CustomUserDetailService customUserDetailService) {
        this.customUserDetailService = customUserDetailService;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        CustomUserDetails userDetails = (CustomUserDetails) customUserDetailService.loadUserByUsername(username);
        return checkPassword(userDetails, password);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }

    private Authentication checkPassword(CustomUserDetails user, String rawPassword) {
        if (passwordEncoder().matches(rawPassword, user.getPassword())) {
            return new UsernamePasswordAuthenticationToken(user, user.getPassword(), user.getAuthorities());
        } else
            throw new BadCredentialsException("Bad credentials");
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

