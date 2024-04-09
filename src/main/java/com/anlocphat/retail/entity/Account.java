package com.anlocphat.retail.entity;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Adjust if using IDENTITY column
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @Column(name = "password", nullable = false)
    private String password; // Consider using a secure hashing algorithm for password storage

    @Column(name = "isactive", nullable = false)
    private boolean isActive;

    @Column(name = "idemployee", nullable = false)
    private UUID idEmployee;

    // Getters and setters omitted for brevity
    public Account(UUID id, String username, String password, boolean isActive, UUID idEmployee) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isActive = isActive;
        this.idEmployee = idEmployee;
    }

    public Account() {
    }

    @Override
    public String toString() {
        return "account{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", isActive=" + isActive +
                ", idEmployee=" + idEmployee +
                '}';
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public UUID getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(UUID idEmployee) {
        this.idEmployee = idEmployee;
    }
}
