class ClientService {
    constructor(urls, $http){
        this.$http = $http;
        this.urls = urls;
    }

    getClient(id){
        return this.$http.get(this.urls.client, {
            params: {
                id: id
            }
        });
    }

    getAllClients(){
        return this.$http.get(this.urls.getClientList);
    }

    saveClient(client){
        return this.$http.post(this.urls.client, client);
    }

    getClientFormQuestions(){
        return this.$http.get(this.urls.getClientForm);
    }
}

export default ClientService;