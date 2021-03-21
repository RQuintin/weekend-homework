package com.example.backend.service.report;

import com.example.backend.wrapper.ResponseWrapper;

public interface Report<T> {

    ResponseWrapper<T> generate(String country);

}
