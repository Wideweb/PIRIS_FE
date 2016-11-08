export default ngModule => {
    describe('client-list', () => {
        beforeEach(window.module(ngModule.name));

        it('should do smth', () => {
            expect(false).to.be.false;
        });
    })
}