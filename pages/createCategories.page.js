class CreateCategoriesPage {
    get createCategoriesPageUrl(){
        return 'https://kasirdemo.belajarqa.com/categories/create'
    }
    
    //defines the action performed on those elements
    async assertCreateCategoriesUrl(){
        await expect(browser).toHaveUrl(this.createCategoriesPageUrl);
    }

}
module.exports = new CreateCategoriesPage();