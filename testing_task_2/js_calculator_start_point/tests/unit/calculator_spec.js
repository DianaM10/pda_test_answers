var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add 2 and 3', function(){
    calculator.previousTotal = 2
    calculator.add(3)
    assert.equal(5,calculator.runningTotal)
  })

  it('should be able to subtract 5 from 10', function(){
    calculator.previousTotal = 10
    calculator.subtract(5)
    assert.equal(5, calculator.runningTotal)
  })

  it('should be able to divide 9 by 3', function() {
    calculator.previousTotal = 9
    calculator.divide(3)
    assert.equal(3, calculator.runningTotal)
  })

  it('should be able to multiply 3 by 3', function() {
    calculator.previousTotal = 3
    calculator.multiply(3)
    assert.equal(9, calculator.runningTotal)
  })

  it('should concatenate multiple number clicks', function() {
    calculator.previousTotal = 0
    calculator.numberClick(3)
    calculator.numberClick(3)
    assert.equal(33, calculator.runningTotal)
  })

  it('should chain multiple operations together', function() {
    calculator.previousTotal = 0
    calculator.numberClick(3)
    calculator.operatorClick("+")
    calculator.numberClick(3)
    calculator.operatorClick("-")
    calculator.numberClick(1)
    calculator.operatorClick("=")
    assert.equal(5, calculator.runningTotal)
  })

  it('should clear the running total without affecting the calculation', function() {
    calculator.previousTotal = 0
    calculator.numberClick(3)
    calculator.operatorClick("+")
    calculator.numberClick(3)
    calculator.operatorClick("-")
    calculator.numberClick(1)
    calculator.clearClick()
    calculator.numberClick(3)
    calculator.operatorClick("=")
    assert.equal(3, calculator.runningTotal)
    })
  
});

// calculator.add()
// calculator.subtract()
// calculator.multiply()
// calculator.divide()
// calculator.numberClick()
// calculator.operatorClick()
// calculator.clearClick()