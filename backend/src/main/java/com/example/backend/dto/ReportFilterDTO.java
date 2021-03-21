package com.example.backend.dto;

import com.example.backend.model.CustomerModel;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
public class ReportFilterDTO {
    private Set<String> countries;

    public ReportFilterDTO(List<CustomerModel> customers) {
        this.countries = customers.stream().map(CustomerModel::getCountry).collect(Collectors.toSet());
    }
}
