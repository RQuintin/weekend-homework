package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
public class OrderModel {

    @Id
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="ORDERNUMBER")
    private String orderNo;

    @Column(name="ORDERDATE")
    private Date orderDate = new Date();

    @Column(name="TOTALAMOUNT")
    private double totalAmount;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "ORDERID")
    private Set<OrderItemModel> items = new HashSet<>();

    @ManyToOne()
    @JoinColumn(name = "customerid", updatable = false)
    private CustomerModel customer;

}
