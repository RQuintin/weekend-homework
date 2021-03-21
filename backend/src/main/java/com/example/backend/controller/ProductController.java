package com.example.backend.controller;

import com.example.backend.model.ProductModel;
import com.example.backend.service.ProductServiceData;
import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ProductController implements RestBaseController<ProductModel, Long> {

    private final ProductServiceData supplierCURD;

    public ProductController(ProductServiceData supplierCURD) {
        this.supplierCURD = supplierCURD;
    }

    @PostMapping("api/product/update")
    @Override
    public ResponseEntity<ResponseWrapper<ProductModel>> update(@RequestBody ProductModel model) {
        return new ResponseEntity<>(supplierCURD.update(model), HttpStatus.OK);
    }

    @GetMapping("api/product/list")
    @Override
    public ResponseEntity<ResponseWrapper<List<ProductModel>>> list() {
        return new ResponseEntity<>(supplierCURD.findAll(), HttpStatus.OK);
    }
}
