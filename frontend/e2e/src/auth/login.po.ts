import { browser, by, element, ElementFinder, logging } from 'protractor';

var PageObject = function() {
    this.username = element(by.id('username'));
    this.password = element(by.id('password'));
    this.logonButton = element(by.id('login.submit'));
    this.customerMenuButton = element(by.id('CustomerID'));
    this.productMenuButton = element(by.id('ProductID'));
};

class AuthenticationFlow {

    pageObject = new PageObject();

    async beginFlow() {
        await browser.get('');
    }

    async logonAsAdmin() {
        await this.pageObject.username.sendKeys('admin');
        await this.pageObject.password.sendKeys('admin');
        await this.pageObject.logonButton.click();
    };

    async logonAsReader() {
        await this.pageObject.username.sendKeys('reader');
        await this.pageObject.password.sendKeys('reader');
        await this.pageObject.logonButton.click();
    };

    async isCustomerMenuVisible() {
        return await this.pageObject.customerMenuButton.isPresent();        
    };

    async isProductMenuVisible() {
        return await this.pageObject.productMenuButton.isPresent();        
    };

    async isBackendReady() {

        let canConnectToBackend = true;

        await browser.driver.get('http://localhost:8090/api/report/filter')
            .catch((e) => {
                canConnectToBackend = false;
            });
        var response = await browser.driver.getPageSource();

        if (canConnectToBackend && (response !== null)) {
            return true; 
        } else {
            return false;
        }    
    }

} 

export {AuthenticationFlow as AuthenticationFlow};