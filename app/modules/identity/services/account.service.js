class AccountService {
    constructor(urls, $http){
        this.$http = $http;
        this.urls = urls;
    }

    getAccount(id){
        return this.$http.get(this.urls.account, {
            params: {
                id: id
            }
        });
    }

    getAccountTransactionList(accountId){
        return this.$http.get(this.urls.getAccountTransactionList, {
            params: {
                accountId: accountId
            }
        });
    }
}

export default AccountService;