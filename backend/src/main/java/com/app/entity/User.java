package com.app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Data
@NoArgsConstructor
@Entity
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(nullable = false, unique = true)
    private String username;

    @Email
    @Column(nullable = false, unique = true)
    private String email;

    @NotNull
    private String password;

    @OneToOne
    @JoinColumn(name = "roleId")
    private Role role;

    public User(String username, String email, String password, Role role) {
        this.setUsername(username);
        this.setEmail(email);
        this.setPassword(password);
        this.setRole(role);
    }

    public User(Long id, String username, String email, String password, Role role) {
        this(username, email, password, role);
        this.setId(id);
    }

    @JsonIgnore
    public String getPassword() {
        return this.password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }
}
