package com.example.backend.controller;

import com.example.backend.model.AuthenticationModel;
import com.example.backend.model.AuthenticationResponse;
import com.example.backend.service.auth.JwtUtil;
import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("api/auth/authenticate")
    public ResponseEntity<ResponseWrapper<AuthenticationResponse>> authenticate(@RequestBody AuthenticationModel authenticationModel) {

        boolean isAuthorised = (
                ("admin".equals(authenticationModel.getUsername()) && "admin".equals(authenticationModel.getPassword()))
            ||  ("reader".equals(authenticationModel.getUsername()) && "reader".equals(authenticationModel.getPassword()))
                                );

        if (isAuthorised) {
            return new ResponseEntity<>(new ResponseWrapper<>(new AuthenticationResponse(createToken(authenticationModel), "")), HttpStatus.OK);
        }
        return new ResponseEntity<>(new ResponseWrapper<>(new AuthenticationResponse("", ""), "Not authorised", false, "Not authorised"), HttpStatus.OK);

    }

    private String createToken(AuthenticationModel authenticationModel) {
        return jwtUtil.generateToken(authenticationModel);
    }
}
