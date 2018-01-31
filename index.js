var katzDeli = [];

function takeANumber(katzDeli,newbie){
  katzDeli.push(`${newbie}`);
  return(`Welcome, ${newbie}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){

  if (katzDeli.length > 0) {
//    return(`There is nobody waiting to be served!`)
    return (`Currently serving ${katzDeli.shift()}.`);
    katzDeli.shift();
  } else
//    return (`Currently serving ${katzDeli.shift()}.`);
//    katzDeli.shift();
    return(`There is nobody waiting to be served!`)
}
