class DashboardPage {
    get dashboardPageUrl(){
        return 'https://kasirdemo.belajarqa.com/dashboard'
    }

    get categoriesButton(){
        return $('a[href="/categories"]'); //locator categories button
    } 

    //defines the action performed on those elements
    async assertDashboardUrl(){
        await expect(browser).toHaveUrl(this.dashboardPageUrl);
    }

    async dashboard(){
        await this.categoriesButton.click();
    }
}

module.exports = new DashboardPage();