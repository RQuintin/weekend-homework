package com.example.backend.repository;

import com.example.backend.model.ProductModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SQLProductRepository extends JpaRepository<ProductModel, Long> {
}
