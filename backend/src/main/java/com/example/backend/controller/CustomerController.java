package com.example.backend.controller;

import com.example.backend.model.CustomerModel;
import com.example.backend.service.CustomerServiceData;
import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class CustomerController implements RestBaseController<CustomerModel, Long> {

    private final CustomerServiceData supplierCURD;

    public CustomerController(CustomerServiceData supplierCURD) {
        this.supplierCURD = supplierCURD;
    }

    @PostMapping("api/customer/update")
    @Override
    public ResponseEntity<ResponseWrapper<CustomerModel>> update(@RequestBody CustomerModel model) {
        return new ResponseEntity<>(supplierCURD.update(model), HttpStatus.OK);
    }

    @GetMapping("api/customer/list")
    @Override
    public ResponseEntity<ResponseWrapper<List<CustomerModel>>> list() {
        return new ResponseEntity<>(supplierCURD.findAll(), HttpStatus.OK);
    }
}
