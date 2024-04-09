package com.anlocphat.retail.service.impl;

import java.util.HashSet;
import java.util.Set;

import com.anlocphat.retail.entity.Account;
import com.anlocphat.retail.model.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import io.micrometer.common.util.StringUtils;

@Service
public class CustomUserDetailService implements UserDetailsService {

    private AccountServiceImpl accountServiceImpl;

    @Autowired
    public void setAccountServiceImpl(AccountServiceImpl accountServiceImpl) {
        this.accountServiceImpl = accountServiceImpl;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if(StringUtils.isEmpty(username))
            throw new UsernameNotFoundException("User name is empty");

        Account account = new Account();
        try {
            account = accountServiceImpl.getAccountByParam(null, username, null, true, null);
        } catch (Exception e) {
            throw new UsernameNotFoundException(e.getMessage());
        }
        Set<GrantedAuthority> authorities = new HashSet<>();
        // authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        CustomUserDetails userDetails = new CustomUserDetails(account.getUsername(), account.getPassword(), account.isActive(),
                authorities);
        return userDetails;
    }

}
