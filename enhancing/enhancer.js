module.exports = {
  succeed,
  fail,
  repair,
  get,
};

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

function fail(item) {
  return { ...item };
}

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
