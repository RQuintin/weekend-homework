package com.example.backend.repository;

import com.example.backend.model.CustomerModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SQLCustomerRepository extends JpaRepository<CustomerModel, Long> {
}
