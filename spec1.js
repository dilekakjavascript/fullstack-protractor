describe('UI/Frontend Testing', () => {
    it('Test Case 1 - Login to the website (Hard Coded)', () => {
        browser.get("https://cybertek-reservation-qa.herokuapp.com/");

        $('[name="email"]').sendKeys("efewtrell8c@craigslist.org");
        $('[name="password"]').sendKeys("jamesmay");
        element(by.buttonText("sign in")).click();
        browser.sleep(2000);
        expect($(".title").getText()).toEqual("VA");
        browser.sleep(2000);
    });
});