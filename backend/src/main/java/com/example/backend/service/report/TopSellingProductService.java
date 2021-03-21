package com.example.backend.service.report;

import com.example.backend.dto.BarChartDTO;
import com.example.backend.dto.ChartData;
import com.example.backend.report.TopSellingProductReport;
import com.example.backend.repository.SQLOrderRepository;
import com.example.backend.wrapper.ResponseWrapper;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TopSellingProductService implements Report<BarChartDTO> {

    private final SQLOrderRepository orderRepository;

    public TopSellingProductService(SQLOrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public ResponseWrapper<BarChartDTO> generate(String country) {

        List<ChartData> chartDataList = new ArrayList<>();
        List<TopSellingProductReport> list = orderRepository.topSellingProductForCountry(country);
        Set<String> labels = list.stream().map(TopSellingProductReport::getMonth).collect(Collectors.toSet());
        Set<String> productName = list.stream().map(TopSellingProductReport::getProductName).collect(Collectors.toSet());

        Map<String, List<TopSellingProductReport>> groupByProductNameMap = new HashMap<>();
        productName.forEach((name) -> {
            groupByProductNameMap.put(name, list.stream().filter((model) -> model.getProductName().equals(name)).collect(Collectors.toList()));
        });

        groupByProductNameMap.forEach((s, v) -> {
            Map<String, Double> monthValue = new HashMap<>();
            v.forEach((t) -> {
                monthValue.put(t.getMonth(), t.getSaleAmount());
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
