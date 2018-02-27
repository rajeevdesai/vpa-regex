const chai = require('chai');
const should = chai.should();
const expect = chai.expect();

const vpa_regex = require('../index.js');

const validMatches = [
  'avinash@icici', 'prachi@okaxis', 'raman@ybl', '9897605011@paytm',
];

const invalidMatches = [
  'avinash@gmail.com', 'prachi', 'raman@yamaha.in',
];

describe('VPA-regex', function() {
  describe('#vpa-regex()', function() {
    it('should return regex that matches valid vpa\'s', function() {
      validMatches.forEach(function(text) {
        text.should.be.a('string');
        should.exist(text.match(vpa_regex()));
      })
    });
    it('should return regex that doesn\'t match invalid vpa\'s', function() {
      invalidMatches.forEach(function(text) {
        text.should.be.a('string');
        should.not.exist(text.match(vpa_regex()));
      })
    });
  });
});
