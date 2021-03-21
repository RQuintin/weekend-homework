package com.example.backend.service.report;

import com.example.backend.dto.ReportFilterDTO;
import com.example.backend.repository.SQLCustomerRepository;
import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.stereotype.Service;

@Service
public class ReportFilterService {
    private final SQLCustomerRepository customerRepository;

    public ReportFilterService(SQLCustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public ResponseWrapper<ReportFilterDTO> filters() {
        return new ResponseWrapper<>(new ReportFilterDTO(customerRepository.findAll()));
    }

}
