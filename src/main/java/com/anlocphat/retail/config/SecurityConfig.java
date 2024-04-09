package com.anlocphat.retail.config;

import com.anlocphat.retail.service.impl.CustomUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;

import javax.sql.DataSource;

@Configuration
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfig {

    private CustomAuthenticationProvider customAuthenticationProvider;
    private CustomUserDetailService customUserDetailService;

    @Autowired
    public SecurityConfig(CustomAuthenticationProvider customAuthenticationProvider, CustomUserDetailService customUserDetailService) {
        this.customAuthenticationProvider = customAuthenticationProvider;
        this.customUserDetailService = customUserDetailService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {

        httpSecurity.authorizeHttpRequests((authorrize) -> authorrize.requestMatchers("/assets/**")
                .permitAll().anyRequest().authenticated());

        httpSecurity.formLogin((formLogin) -> formLogin.loginPage("/login").permitAll()
                .loginProcessingUrl("/authenticate").permitAll()
                .defaultSuccessUrl("/homeHorizontal")
                // .successForwardUrl("/homeHorizontal")
                .successHandler(new SimpleUrlAuthenticationSuccessHandler("/homeHorizontal")));

        //access deny handler
        // httpSecurity.exceptionHandling().accessDeniedHandler(this.customAccessDeniedHandler);
        httpSecurity.exceptionHandling((exceptionHandling) -> exceptionHandling.accessDeniedPage("/notAuthorized"));

        httpSecurity.logout((logout) -> logout.permitAll()
                // .logoutUrl("/logout")
                // .logoutSuccessUrl("/login")
                .deleteCookies("JSESSIONID", "remember-me"));

        httpSecurity.rememberMe((rememberMe) -> rememberMe.key("uniqueAndSecret")
                .rememberMeCookieName("remember-me")
                .tokenValiditySeconds(60 * 60 * 24 * 7)// 7 days
                .rememberMeServices(tokenBasedRememberMeServices()));

        // disable Cross Site Request Forgery (CSRF)
        httpSecurity.csrf(csrf -> csrf.disable());

        return httpSecurity.build();
    }

    @Bean
    public TokenBasedRememberMeServices tokenBasedRememberMeServices() {
        TokenBasedRememberMeServices service = new TokenBasedRememberMeServices("uniqueAndSecret",
                customUserDetailService);
        service.setAlwaysRemember(true);
        return service;
    }
}
