package com.app.repository;

import com.app.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Provides basic CURD operations with User entity
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Finds user by email
     *
     * @param email to look for
     * @return user by given email
     */
    User findByEmail(String email);

    /**
     * Finds user by name
     *
     * @param username to look for
     * @return user by given name
     */
    User findByUsername(String username);
}
