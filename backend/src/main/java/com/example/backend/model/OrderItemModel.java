package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "ORDERITEM")
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemModel {

    @Id
    @Column(name="id", nullable=false)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "ORDERID")
    private OrderModel order;

    @Column(name="UNITPRICE")
    private double unitPrice;
    private int quantity;

    @ManyToOne()
    @JoinColumn(name = "PRODUCTID", updatable = false)
    private ProductModel product;

}
