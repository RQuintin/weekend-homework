package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "product")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ProductModel {

    @Id
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="productname")
    private String name;

    @Column(name="UNITPRICE")
    private double unitPrice;

    @Column(name="package")
    private String package_;

    private boolean isdiscontinued;

}
