package com.example.backend.controller;

import com.example.backend.dto.BarChartDTO;
import com.example.backend.dto.ReportFilterDTO;
import com.example.backend.service.report.ReportFilterService;
import com.example.backend.service.report.SalesByMonthService;
import com.example.backend.service.report.TopSellingProductService;
import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class ReportController {

    private final ReportFilterService reportFilterService;
    private final SalesByMonthService salesByMonthService;
    private final TopSellingProductService topSellingProductService;

    public ReportController(ReportFilterService reportFilterService, SalesByMonthService salesByMonthService, TopSellingProductService topSellingProductService) {
        this.reportFilterService = reportFilterService;
        this.salesByMonthService = salesByMonthService;
        this.topSellingProductService = topSellingProductService;
    }

    @GetMapping("api/report/filter")
    public ResponseEntity<ResponseWrapper<ReportFilterDTO>> filter() {
        return new ResponseEntity<>(reportFilterService.filters(), HttpStatus.OK);
    }

    @GetMapping("api/report/sales-by-month")
    public ResponseEntity<ResponseWrapper<BarChartDTO>> salesByMonth(@RequestParam(required = false, name = "country") String country) {
        return new ResponseEntity<>(salesByMonthService.generate(country), HttpStatus.OK);
    }

    @GetMapping("api/report/top-selling-product")
    public ResponseEntity<ResponseWrapper<BarChartDTO>> topSellingProduct(@RequestParam(required = false, name = "country") String country) {
        return new ResponseEntity<>(topSellingProductService.generate(country), HttpStatus.OK);
    }
}
