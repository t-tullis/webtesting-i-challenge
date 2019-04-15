const {succeed , fail , repair, get} = require('./enhancer.js');
// test away!

//Repair Test
it('should repair a item with the durabilty restored to 100', () => {
    expect(repair(75).durability).toBe(100);
});

// Succeed Test
it('should increase enhancement by 1 if not maxed out at 20', () => {
    expect(succeed(15).enhancement).toEqual(16);
    expect(succeed(20).enhancement).toEqual(20);
    expect(succeed(13).enhancement).toEqual(14);
});

//Fail test
it('should decrease durability by 5 if enhancement level is less than 15, \n if enhancement level is greater than 15 durability decreases by 10, \n if greater than 16 ehancement level decreases by 1 and durability decreases by 10', () => {
    expect(fail(15).enhancement).toEqual(15);
    expect(fail(20).enhancement).toEqual(19);
    expect(fail(13).enhancement).toEqual(13);
});