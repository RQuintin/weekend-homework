# Sample App for Spring Boot + Angular

Basic web application consisting of spring boot backend and angular 11 front end to implement [a relative link](spec.pdf)

You can use swagger to view endpoints available at: http://localhost:8090/swagger-ui/index.html after running spring boot. 

![Alt text](/doc/swagger-endpoint.PNG?raw=true "Swagger REST documentation") – log on as an admin role using (admin/admin) or a reader role using (reader/reader).


## Commands
Run `./mvnw spring-boot:run` to start the spring boot backend prior to starting the front end. 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the selenium end-to-end tests via [Protractor](http://www.protractortest.org/).

## Logon Screen

At the ![Alt text](/doc/logon.png?raw=true "logon screen") – log on as an admin role using (admin/admin) or a reader role using (reader/reader).

## Home Screen

Both admin and reader user roles will see the list of available reports (the buttons for Customer and Products will be visible for the admin role). Click on the button highlighted below.

At the ![Alt text](/doc/avail-reports.png?raw=true "home screen") 

## Reports

![Alt text](/doc/top-selling-all-selected.PNG?raw=true "All top selling products")

![Alt text](/doc/top-selling-selected-country.PNG?raw=true "Top selling for selected country")

## Customer & Product Updates
Admin users will have the customer and product button enabled in the navigation bar.

![Alt text](/doc/customer-screen.PNG?raw=true "Customer List Screen")

Clicking the button in the action column will take you to a screen as below to edit the customer. 

![Alt text](/doc/customer-update.PNG?raw=true "Customer Edit Screen")
