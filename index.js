function scuberGreetingForFeet(someValue) { 
  if(someValue <= 400) {
    return "This one is on me!"
  }else {
    if(someValue <=1500) {
      return "That will be twenty bucks."
  }
    else {
      if(someValue <= 2500) {
        return "I will gladly take your thirty bucks."
      }
      else {
        if(someValue >= 2501) {
          return "No can do."
        }
      }
    } 

} 
} 
  
  
  // Write your code here!


function ternaryCheckCity(town) { 
  return town === 'NYC' ? "Ok, sounds good.": "No go."
}

  

  
function switchOnCharmFromTip(tip){
    switch (tip) {
        case 'generous':
            return 'Thank you so much.';
        case 'not as generous':
            return 'Thank you.';
        case 'cheap':
            return 'Thanks.';
        default:
            return 'Bye.';
    }
}