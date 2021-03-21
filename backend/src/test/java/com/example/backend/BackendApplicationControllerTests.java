package com.example.backend;

import com.example.backend.controller.AuthController;
import com.example.backend.model.AuthenticationModel;
import com.example.backend.service.auth.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static org.hamcrest.Matchers.*;

@SpringBootTest
@Import(com.example.backend.service.auth.JwtUtil.class)
class BackendApplicationControllerTests {

    @Autowired
    JwtUtil foo;

    @Test public void
    valid_admin_role_login_returns_200() throws Exception {

        ObjectMapper mapper = new ObjectMapper();
        given().
            auth().none().
            standaloneSetup(new AuthController(foo)).
            contentType(ContentType.JSON).
            body(mapper.writeValueAsString(new AuthenticationModel("admin", "admin"))).
        when().
            post("/api/auth/authenticate").
        then().
            statusCode(200).
            body("success", equalTo(true)).
            body("data", hasKey("jwt"))
        ;

    }

}
