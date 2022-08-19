
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('/');
        //await browser.switchWindow('[id="mat-dialog-0"]');
        //await browser.dismissAlert();
        //browser.switchToFrame(id)
        //await $('button[aria-label="Close Welcome Banner"]').click();
        //browser.keys("Tab");

        await browser.keys("Escape");
        await $('[id="navbarAccount"]').click();
        await $('#navbarLoginButton').click();
        await $('[href="#/register"]').click();
        await $('[id="emailControl"]').setValue('test@test.ua');
        await $('[id="passwordControl"]').setValue('Passw0rd');
        await $('[id="repeatPasswordControl"]').setValue('Passw0rd');
        await $('span[class="mat-select-placeholder mat-select-min-line ng-tns-c130-21 ng-star-inserted"]').click();
        await $('//span[contains(text(), "maiden")]').click();
        await $('[id="repeatPasswordControl"]').setValue('mom');
        await $('[id="registerButton"]').click();


        //await expect($('//*[.="Login"]')).toBeExisting();
        //await expect($('#flash')).toHaveTextContaining(
          //  'You logged into a secure area!'); 

    });
});

//  Не підтягує підказок після крапки (toBeExisting, click)