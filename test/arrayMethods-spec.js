var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var arrayMethods = require('./../arrayMethods.js');

var expect = chai.expect;
var should = chai.should();
chai.use(sinonChai);

var spy;

var methodList = ['push', 'pop', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'concat', 'join', 'slice', 'toString', 'indexOf', 'lastIndexOf', 'toLocaleString'];

describe('push()', function () {
  var appendToArray = arrayMethods.appendToArray;

  beforeEach(function () {
    spy = sinon.spy(Array.prototype, 'push');
  });

  afterEach(function () {
    Array.prototype.push.restore();
  });

  it('should have a function named `appendToArray`', function () {
    expect(appendToArray).to.be.defined;
    expect(appendToArray).to.be.a('function');
  });

  it('should append a new item to an array', function () {
    var newValue = '4';
    var genericNumberArray = [1, 2, 3];
    appendToArray(genericNumberArray, newValue);
    expect(spy.args[0][0]).to.equal('4');
  });
});

describe('pop()', function () {
  var removeFromArray = arrayMethods.removeFromArray;

  beforeEach(function () {
    spy = sinon.spy(Array.prototype, 'pop');
  });

  afterEach(function () {
    Array.prototype.pop.restore();
  });

  it('should have a function name `removedFromArray`', function () {
    expect(removeFromArray).to.be.defined;
    expect(removeFromArray).to.be.a('function');
  });

  it('should remove and return the last element of an array', function () {
    var genericWordArray = ['Picard', 'Riker', 'LaForge', 'Worf'];
    var returnValue = removeFromArray(genericWordArray);
    expect(returnValue).to.be.equal('Worf');
    expect(genericWordArray).to.deep.equal(['Picard', 'Riker', 'LaForge']);
    expect(spy).to.have.been.calledOn;
  });
});

describe.skip('reverse()', function () {

});

describe.skip('shift()', function () {

});

describe.skip('sort()', function () {

});

describe.skip('splice()', function () {

});

describe.skip('unshift()', function () {

});

describe('concat()', function () {

});

describe('join()', function () {

});

describe('slice()', function () {

});

describe('toString()', function () {

});

describe('indexOf()', function () {

});

describe('lastIndexOf()', function () {

});

describe('toLocaleString()', function () {

});