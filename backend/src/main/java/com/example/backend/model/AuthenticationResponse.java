package com.example.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AuthenticationResponse {
    private String jwt;
    private String refresh;

    public AuthenticationResponse(String jwt, String refresh) {
        this.jwt = "Bearer " + jwt;
        this.refresh = refresh;
    }
}
