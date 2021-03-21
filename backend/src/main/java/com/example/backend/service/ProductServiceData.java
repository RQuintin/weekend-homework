package com.example.backend.service;

import com.example.backend.model.ProductModel;
import com.example.backend.repository.SQLProductRepository;
import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceData implements DataModelBaseService<ProductModel, Long> {
    private final SQLProductRepository repository;

    public ProductServiceData(SQLProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResponseWrapper<ProductModel> update(ProductModel model) {
        return new ResponseWrapper<>(repository.save(model));
    }

    @Override
    public ResponseWrapper<List<ProductModel>> findAll() {
        return new ResponseWrapper<>(repository.findAll());
    }
}
