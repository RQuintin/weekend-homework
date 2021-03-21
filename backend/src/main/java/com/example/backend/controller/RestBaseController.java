package com.example.backend.controller;

import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface RestBaseController<T, K> {

    ResponseEntity<ResponseWrapper<T>> update(T model);

    ResponseEntity<ResponseWrapper<List<T>>> list();
}
