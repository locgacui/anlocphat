package com.anlocphat.retail.service.impl;

import com.anlocphat.retail.entity.Account;
import com.anlocphat.retail.repository.AccountRepository;
import com.anlocphat.retail.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class AccountServiceImpl implements AccountService {

    AccountRepository accountRepository;

    @Autowired
    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }

    @Override
    public Account getAccountByID(UUID id) throws ResourceNotFoundException {
        Account account = accountRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Account not found for this id: " + id)
        );
        return account;
    }

    @Override
    public Account insertAccount(Account account) {
        account.setId(null);
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Account account) throws ResourceNotFoundException {
        accountRepository.findById(account.getId()).orElseThrow(
                () -> new ResourceNotFoundException("Account not found for this id: " + account.getId())
        );

        //encrypt password
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String passwordString = passwordEncoder.encode(account.getPassword());
        account.setPassword(passwordString);

        accountRepository.save(account);

        Account accountUpdated = this.getAccountByID(account.getId());
        return accountUpdated;
    }

    @Override
    public void deleteAccount(UUID id) throws ResourceNotFoundException {
        accountRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Account not found for this id: " + id)
        );
        accountRepository.deleteById(id);
    }

    @Override
    public Account getAccountByParam(UUID id, String userName, String password, boolean isActive, UUID idEmployee) throws ResourceNotFoundException {
        Account account = accountRepository.getAccountByParam(id, userName, password, isActive, idEmployee);
        if(Objects.isNull(account))
            throw new ResourceNotFoundException("Account not found");
        return account;
    }
}
