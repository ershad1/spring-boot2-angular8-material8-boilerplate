package com.app.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Data
@Entity
public class Role implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "RolesPrivileges",
            joinColumns = @JoinColumn(
                    name = "roleId", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "privilegeId", referencedColumnName = "id")
    )
    private Collection<Privilege> privileges;

    public Role() {
    }

    public Role(Long id, String name) {
        this.id = id;
        this.name = name;
    }

}
