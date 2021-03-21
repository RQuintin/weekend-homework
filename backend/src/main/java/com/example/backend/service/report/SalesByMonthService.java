package com.example.backend.service.report;

import com.example.backend.dto.BarChartDTO;
import com.example.backend.dto.ChartData;
import com.example.backend.report.SalesByMonthReport;
import com.example.backend.repository.SQLOrderRepository;
import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class SalesByMonthService implements Report<BarChartDTO> {
    private final SQLOrderRepository orderRepository;

    public SalesByMonthService(SQLOrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public ResponseWrapper<BarChartDTO> generate(String country) {

        List<ChartData> chartDataList = new ArrayList<>();

        List<SalesByMonthReport> list = orderRepository.saleByMonthForCountry(country);
        Set<String> labels = list.stream().map(SalesByMonthReport::getMonth).collect(Collectors.toSet());
        Set<String> countryName = list.stream().map(SalesByMonthReport::getCountry).collect(Collectors.toSet());

        Map<String, List<SalesByMonthReport>> groupByCountryNameMap = new HashMap<>();
        countryName.forEach((name) -> {
            groupByCountryNameMap.put(name, list.stream().filter((model) -> model.getCountry().equals(name)).collect(Collectors.toList()));
        });
        groupByCountryNameMap.forEach((s, v) -> {
            Map<String, Double> monthValue = new HashMap<>();
            v.forEach((t) -> {
                monthValue.put(t.getMonth(), t.getTotalAmount());
            });

            List<Double> data = new ArrayList<>();
            labels.forEach((monthName) -> {
                data.add(monthValue.getOrDefault(monthName, 0.0));
            });
            chartDataList.add(new ChartData(data,s));
        });

        return new ResponseWrapper<>(new BarChartDTO(labels, chartDataList, true));
    }

}
