package com.example.backend.wrapper;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResponseWrapper<T> {
    private T data;
    private String message = "Success";
    private boolean success = true;
    private String error;

    public ResponseWrapper(T data, String message, boolean success) {
        this.data = data;
        this.message = message;
        this.success = success;
    }

    public ResponseWrapper(T data) {
        this.data = data;
    }
}
