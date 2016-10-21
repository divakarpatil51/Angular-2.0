package com.angular2.repository;

import com.angular2.entity.UserDetails;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author divakar patil
 */
@Repository
public interface UserDetailRepository extends JpaRepository<UserDetails, Long>{
 
    @Query("select u from UserDetails u where u.lastName like %:lastname% or u.firstName like %:lastname%")
    List<UserDetails> findByFirstNameOrLastName(@Param("lastname") String lastName);
}