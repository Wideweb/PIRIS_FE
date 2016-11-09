class ClientService {
    constructor(urls, $http, $q){
        this.$http = $http;
        this.urls = urls;
        this.$q = $q;
    }

    getClientFormQuestions(){
        //return $http.get(urls.clientForm);

        let defer = this.$q.defer();
        defer.resolve({
            data: [
                {
                    label: 'First Name',
                    key: 'firstName',
                    value: null,
                    controlType: 1,
                    required: true
                },
                {
                    label: 'Last Name',
                    key: 'lastName',
                    value: null,
                    controlType: 1,
                    required: true
                },
                {
                    label: 'Middle Name',
                    key: 'middleName',
                    value: null,
                    controlType: 1,
                    required: true
                },
                {
                    label: 'Marrital Status',
                    key: 'marritalStatusId',
                    value: null,
                    controlType: 2,
                    required: true,
                    options: [
                        { key: 1, value: 'Женат(а) или Замужем)' },
                        { key: 2, value: 'Разведен(а)' },
                        { key: 3, value: 'Холост' }
                    ]
                }
            ]
        });
        return defer.promise;
    }
}

export default ClientService;