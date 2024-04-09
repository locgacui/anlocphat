package com.anlocphat.retail.service;

import com.anlocphat.retail.entity.Account;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;

import java.util.List;
import java.util.UUID;

public interface AccountService {
    List<Account> getAccounts();

    Account getAccountByID (UUID id) throws ResourceNotFoundException;

    Account insertAccount(Account account);

    Account updateAccount(Account account) throws ResourceNotFoundException;

    void deleteAccount(UUID id) throws ResourceNotFoundException;

    Account getAccountByParam (UUID id, String userName, String password,
                               boolean isActive, UUID idEmployee) throws ResourceNotFoundException;
}
