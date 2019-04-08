module.exports = {
  succeed,
  fail,
  repair,
  get,
};

//Success
function succeed(item) {
  console.log(`Enhancement starts at ${item}`)
  item = {
    ...item,
    enhancement: item 
  }

  if(item.enhancement !== 20){
    item.enhancement++
  }
  console.log(`After success, enhancement is at ${item.enhancement}`)
  return { ...item };
}

//Fail
/*
If the item's enhancement is less than 15, the durability of the item is decreased by 5.
If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
*/

function fail(item) {
  console.log(`Enhancement:${item}`)
  item = {
    ...item,
    enhancement: item,
    durability: 100
  }

  if(item.enhancement <= 14){
    item.durability -= 5
  }else if(item. enhancement >= 16){
    item.enhancement--
    item.durability -= 10
  }else if(item.enhancement >= 15){
    item.durability -= 10
  }
  console.log(`After fail Enhancement is:${item.enhancement} and durability is:${item.durability}`)
  return { ...item };
}

//Repair
function repair(item) {
  console.log(`Durability starts at ${item}`)
    item = {
      ...item,
      durability: 100
    }
    console.log(`After repair durability is at ${item.durability}`)
    
    return { ...item };
}

function get(item) {
  return { ...item };
}
