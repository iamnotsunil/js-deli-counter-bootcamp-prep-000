var katzDeli = [];

function takeANumber(katzDeli,newbie){
  katzDeli.push(`${newbie}`);
  return(`Welcome, ${newbie}. You are number ${katzDeli.length} in line.`);
}

function nowServing(){
  if (katzDeli.length > 0) {
    return (`Currently serving ${katzDeli.shift()}.`);
  } else {
    return(`There is nobody waiting to be served!`)
}
}
