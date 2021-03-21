package com.example.backend.service;

import com.example.backend.model.CustomerModel;
import com.example.backend.repository.SQLCustomerRepository;
import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceData implements DataModelBaseService<CustomerModel, Long> {
    private final SQLCustomerRepository repository;

    public CustomerServiceData(SQLCustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResponseWrapper<CustomerModel> update(CustomerModel model) {
        return new ResponseWrapper<>(repository.save(model));
    }

    @Override
    public ResponseWrapper<List<CustomerModel>> findAll() {
        return new ResponseWrapper<>(repository.findAll());
    }


}
