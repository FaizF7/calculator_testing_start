const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expect(sum(10250, 20250)).toBe(30500);
  });

  test('can add two negative numbers', () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  test('can add zero', () => {
    expect(sum(-10, 0)).toBe(-10);    
  });

});

describe('subtract', () => {

  test('can subtract two small numbers', ()=> {
    expect(subtract(10,6)).toBe(4);
  });

  test('can subtract negative numbers', ()=> {
    expect(subtract(-10,-6)).toBe(-4);
  });

});

describe('multiply', () => {

  test('can multiply two small numbers', ()=>{
    expect(multiply(3,5)).toBe(15);
  });

  test('can multiply a number by zero', ()=>{
    expect(multiply(3,0)).toBe(0);
  });

});

describe('divide', () => {

  test('can divide two small numbers', ()=> {
    expect(divide(20,4)).toBe(5);
  });

  test('can divide two decimal numbers', ()=> {
    expect(divide(20.5,4.1)).toBe(5);
  });

});

describe('modulus', () => {

  test('can calculate modulus', ()=>{
    expect(modulus(15,6)).toBe(3);
  })

  test('can calculate negative modulus', ()=>{
    expect(modulus(-15,6)).toBe(-3);
  })

});

describe('even', () => {
  
  test('number is even', ()=>{
    expect(even(36)).toBe(true)
  })

  test('number is not even', ()=>{
    expect(even(23)).toBe(false)
  })

});

describe('odd', () => {

  test('number is odd', ()=>{
    expect(odd(36)).toBe(false)
  })

  test('number is not odd', ()=>{
    expect(odd(15)).toBe(true)
  })

});
