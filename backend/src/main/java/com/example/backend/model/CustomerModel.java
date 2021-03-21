package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "CUSTOMER", uniqueConstraints={@UniqueConstraint(name="UN_CUSTOMER_ID", columnNames={"ID"})})
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CustomerModel {

    @Id
    @Column(name="id", nullable=false)
    private Long id;

    private String firstname;
    private String lastname;
    private String city;
    private String country;
    private String phone;

//    @JsonIgnore
//    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
//    @JoinColumn(name = "customerid")
//    private Set<OrderModel> orders =  new HashSet<>();
}
