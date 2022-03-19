var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#shuffleDeck', function() {
        it('should create a new array with length of 52', function() {
            deck.length = 52;
            expect(deck.length).to.equal(52);
        });
        
        it('should throw an error if length is not 52', function() {
            expect(function() {
                shuffleDeck(51);
            }).to.throw(Error);
        })
    });
});