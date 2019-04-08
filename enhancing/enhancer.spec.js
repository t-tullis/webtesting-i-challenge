const {succeed , fail , repair, get} = require('./enhancer.js');
// test away!

//Repair Test
it('should repair a item with the durabilty restored to 100', () => {
    expect(repair(75).durability).toBe(100);
});

// Succeed Test
it('should increase enhancement by 1 if not maxed out at 20', () => {
    expect(succeed(15).enhancement).toEqual(16);
    expect(succeed(20).enhancement).toBe(20);
    expect(succeed(13).enhancement).toEqual(14);
});