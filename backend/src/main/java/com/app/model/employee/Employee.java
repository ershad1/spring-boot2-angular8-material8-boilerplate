package com.app.model.employee;

import com.app.model.department.Department;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    String email;
    String fullName;
    String gender;
    boolean isPermanent;
    String mobile;

    @ManyToOne
    Department department;

}
