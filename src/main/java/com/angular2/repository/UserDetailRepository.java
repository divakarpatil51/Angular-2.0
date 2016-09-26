package com.angular2.repository;

import com.angular2.entity.UserDetails;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author divakar patil
 */
@Repository
public interface UserDetailRepository extends JpaRepository<UserDetails, Long>{
 
    //Added constructor to get query result as List<UserDetails> otherwise it returns as List<Object[]>
    @Query("select new UserDetails(u.userId, u.firstName, u.lastName, u.emailId, u.address, u.phoneNumber) from UserDetails u where u.lastName like %?1% or u.firstName like %?1%")
    List<UserDetails> findByFirstNameOrLastName(String lastName);
}
