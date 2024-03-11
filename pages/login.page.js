class LoginPage {
    //define the locator of the element
    get emailInput(){
        return $('input[id="email"]'); //locator username field
    }
    get passwordInput(){
        return $('input[id="password"]'); //locator password field
    }
    get loginButton(){
        return $('button[type="submit"]'); //locator login button
    } 

    //defines the action performed on those elements
    async login(email,password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}
module.exports = new LoginPage();