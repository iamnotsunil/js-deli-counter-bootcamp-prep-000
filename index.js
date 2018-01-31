var katzDeli = [];

function takeANumber(katzDeli,newbie){
  katzDeli.push(`${newbie}`);
  return(`Welcome, ${newbie}. You are number ${katzDeli.length} in line.`);
}

function nowServing(){
  if (katzdeli.length > 0) {
    return katzDeli(0);
    katzDeli.shift();
  } else {
    return(`There is nobody waiting to be served!`)
