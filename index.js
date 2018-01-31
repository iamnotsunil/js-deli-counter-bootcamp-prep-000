var katzDeli = [];

function takeANumber(katzDeli,newbie){
  katzDeli.push(`${newbie}`);
  return(`Welcome, ${newbie}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){

  if (katzDeli.length === 0) {
    return(`There is nobody waiting to be served!`)

  } else
    return (`Currently serving ${katzDeli.shift()}.`);
    katzDeli.shift();
}
