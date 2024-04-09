package com.anlocphat.retail.repository;

import com.anlocphat.retail.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AccountRepository extends JpaRepository<Account, UUID> {
    @Query(value = "EXEC GetAccountByParam  @id = :id, @username = :username, @password = :password, @isActive = :isActive, @idEmployee = :idEmployee", nativeQuery = true)
    Account getAccountByParam(@Param(value = "id") UUID id, @Param(value = "username") String userName, @Param(value = "password") String password,
                              @Param(value = "isActive") boolean isActive, @Param(value = "idEmployee") UUID idEmployee);
}
