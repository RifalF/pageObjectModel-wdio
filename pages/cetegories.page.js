class CategoriesPage {
    get categoriesPageUrl(){
        return 'https://kasirdemo.belajarqa.com/categories'
    }
    get tambahButton(){
        return $('a[href="/categories/create"]').toHaveText('tambah');
    }

    //defines the action performed on those elements
    async assertCategoriesUrl(){
        await expect(browser).toHaveUrl(this.categoriesPageUrl);
    }

    async addCategories(){
        await this.tambahButton.isClickable();
    }
}

module.exports = new CategoriesPage();