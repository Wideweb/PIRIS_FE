class CreditService {
    constructor(urls, $http){
        this.$http = $http;
        this.urls = urls;
    }

    getCredit(id){
        return this.$http.get(this.urls.credit, {
            params: {
                id: id
            }
        });
    }

    saveCredit(credit){
        return this.$http.post(this.urls.credit, credit);
    }

    getCreditPlan(creditPlanId){
        return this.$http.get(this.urls.getCreditPlan, {
            params: {
                creditPlanId: creditPlanId
            }
        });
    }
}

export default CreditService;