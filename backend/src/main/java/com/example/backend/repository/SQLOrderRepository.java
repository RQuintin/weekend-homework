package com.example.backend.repository;

import com.example.backend.report.SalesByMonthReport;
import com.example.backend.model.OrderModel;
import com.example.backend.report.TopSellingProductReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SQLOrderRepository extends JpaRepository<OrderModel, Long> {

    @Query(value = " select MONTHNAME(orderdate) || ' ' || YEAR(orderdate) as month , country, Sum(totalamount) as totalAmount " +
            " from Customer inner join orders on (customer.Id = orders.customerid) " +
//            "       inner join orderitem on (orders.id = orderitem.orderid) " +
            " where ('ALL'=?1 or country=?1) " +
            " group by MONTHNAME(orderdate) || ' ' || YEAR(orderdate), customer.country ", nativeQuery = true)
    List<SalesByMonthReport> saleByMonthForCountry(String country);

    @Query(value = " select productname, MONTHNAME(orderdate) || ' ' || YEAR(orderdate) as month , Sum(Quantity) as saleAmount " +
            " from Customer  " +
            "    inner join orders on (customer.id = orders.customerid)  " +
            "    inner join orderitem on (orders.id = orderitem.orderid)  " +
            "    inner join product on (product.id = orderitem.productid)  " +
            " where ('ALL'=?1 or country=?1) " +
            " group by productname, MONTHNAME(orderdate) || ' ' || YEAR(orderdate)  " +
            " order by saleAmount desc ", nativeQuery = true)
    List<TopSellingProductReport> topSellingProductForCountry(String country);

}
