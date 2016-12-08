class BankService {
    constructor(urls, $http){
        this.$http = $http;
        this.urls = urls;
    }

    closeBankDay(){
        return this.$http.post(this.urls.closeBankDay);
    }

    GetBankAccount(accountPlanId){
        return this.$http.get(this.urls.getBankAccount, {
            params: {
                accountPlanId: accountPlanId
            }
        });
    }

    getBankAccountFormQuestions(){
        return this.$http.get(this.urls.getBankAccountForm);
    }

    getAllBankAccounts(){
        return this.$http.get(this.urls.getBankAccountList);
    }
    
    getBankDate(){
        return this.$http.get(this.urls.getBankDate);
    }
    
    getAnnualReportData(){
        return this.$http.get(this.urls.getAnnualReportData);
    }
}

export default BankService;