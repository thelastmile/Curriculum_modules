
describe('checkPrime', function() {
  it('should return true if the number is prime', function() {
    expect(checkPrime(13)).to.eql(true);
  });

  it('should return false if the number is not prime', function() {
    expect(checkPrime(12)).to.eql(false);
  });
});


describe('primeFactors', function() {
  it('should return an array containing the prime factors of a number', function() {
    expect(primeFactors(21)).to.eql([3,7,]);
    expect(primeFactors(15)).to.eql([3,5]);
  });
});

describe('removeDuplicates', function() {
  it('should remove the duplicate elements in an array', function() {
    expect(removeDuplicates([2,2,3,3,4,4,])).to.eql([2,3,4]);
  });
});


describe('substringMatch', function() {
  it('should return true if the first string is a substring of the second', function() {
    expect(substringMatch('hey', 'yo hey what')).to.eql(true);
  });

  it('should return false if the first string is not a substring of the second', function() {
    expect(substringMatch('xxx', 'How did I get here anyway?')).to.eql(false);
  });

});

  

