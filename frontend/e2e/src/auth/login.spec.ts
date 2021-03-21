import { AuthenticationFlow } from './login.po';

describe("Authentication and Role Priviledges", function() {

    it('should require the backend to be running to authenticate', async function() { 
        var authenticationFlow = new AuthenticationFlow();
        var isBackendRunning = await authenticationFlow.isBackendReady();
        expect(isBackendRunning).toBe(true);
    });

    describe("App role UI Role Priviledges", function() {
        var authenticationFlow : AuthenticationFlow;

        beforeEach(async function() {
            authenticationFlow = new AuthenticationFlow();
            await authenticationFlow.beginFlow();
        });

        it('should have customer & product functionality for admin role', async function() {
            await authenticationFlow.logonAsAdmin();

            expect(await authenticationFlow.isCustomerMenuVisible()).toBe(true);
            expect(await authenticationFlow.isProductMenuVisible()).toBe(true);
        });

        it('should not have customer & product functionality for reader role', async function() {
            await authenticationFlow.logonAsReader();

            expect(await authenticationFlow.isCustomerMenuVisible()).toBe(false);
            expect(await authenticationFlow.isProductMenuVisible()).toBe(false);
        });
    });
});

//   //   browser.wait(result =>{
//   //     return element(by.className('toast-success')).isPresent();
//   // }, 20000);