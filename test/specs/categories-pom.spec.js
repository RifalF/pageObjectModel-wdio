const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const DashboardPage = require('../../pages/dashboard.page')
const CategoriesPage = require('../../pages/cetegories.page')
const CreateCategoriesPage = require('../../pages/createCategories.page')

describe('Kasir Aja Login Test with Function', () =>{
    beforeEach(async () => {
        //open browser
        Page.open('/')
    })

    it('should login successfully with valid credentials', async () =>{
        //call login function
        await LoginPage.login('rfr@qa.com','12345');
        //inventory
        await DashboardPage.assertDashboardUrl();
    })

    it('should successfully enter to categories page', async () =>{
        //call function
        await DashboardPage.dashboard();
        //categories
        await CategoriesPage.assertCategoriesUrl();
    })

    it('should successfully enter to create categories page', async () =>{
        //call function
        await CategoriesPage.addCategories();
        //categories
        await CreateCategoriesPage.assertCreateCategoriesUrl();
    })
})