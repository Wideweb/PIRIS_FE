class DepositService {
    constructor(urls, $http){
        this.$http = $http;
        this.urls = urls;
    }

    getDeposit(id){
        return this.$http.get(this.urls.deposit, {
            params: {
                id: id
            }
        });
    }

    saveDeposit(deposit){
        return this.$http.post(this.urls.deposit, deposit);
    }

    getDepositFormQuestions(){
        return this.$http.get(this.urls.getDepositForm);
    }
}

export default DepositService;