package com.example.backend.service;

import com.example.backend.wrapper.ResponseWrapper;

import java.util.List;

public interface DataModelBaseService<T,K> {
      ResponseWrapper<T> update(T model);
      ResponseWrapper<List<T>> findAll();
}
