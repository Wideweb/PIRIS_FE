class ClientAccountService {
    constructor(urls, $http){
        this.$http = $http;
        this.urls = urls;
    }

    getClientAccount(id){
        return this.$http.get(this.urls.clientAccount, {
            params: {
                id: id
            }
        });
    }

    saveClientAccount(clientAccount){
        return this.$http.post(this.urls.clientAccount, clientAccount);
    }

    getClientAccountFormQuestions(){
        return this.$http.get(this.urls.getClientAccountForm);
    }

    getAllClientAccounts(){
        return this.$http.get(this.urls.getClientAccountList);
    }
}

export default ClientAccountService;