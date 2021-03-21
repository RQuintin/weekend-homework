package com.example.backend.report;

public interface SalesByMonthReport {
    String getMonth();
    String getCountry();
    double getTotalAmount();
}
