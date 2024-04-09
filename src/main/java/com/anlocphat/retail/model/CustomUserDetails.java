package com.anlocphat.retail.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

public class CustomUserDetails extends User {

    public CustomUserDetails(String username, String password, boolean isActive, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.isActive = isActive;
    }

    private boolean isActive;

    public boolean isIsActive() {
        return this.isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }
}
