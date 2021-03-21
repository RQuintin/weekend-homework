package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BarChartDTO {
    private Set<String> barChartLabels;
    private List<ChartData> barChartData;
    private boolean barChartLegend ;
}
