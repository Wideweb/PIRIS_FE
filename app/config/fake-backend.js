export default ngModule => {
    ngModule.run(($httpBackend) => {
        $httpBackend
            .whenGET('api/client')
            .respond({
                firstName: 'fake client'
            });

        $httpBackend
            .whenGET('api/client/getAll')
            .respond([{
                firstName: 'fake client'
            }]);

        $httpBackend
            .whenGET('api/Lookup/GetCityLookups')
            .respond([
                {
                    id: 1,
                    text: 'Minsk'
                },
                {
                    id: 2,
                    text: 'Vitebsk'
                }
            ]);
    });
}