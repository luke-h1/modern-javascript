let temp = '55' ; 

// logical and operator + logical or operator 

// || = or operator  

// && = and operator  



if (temp >= 60 && temp <=90) { 
    console.log('it is nice out. Go outside !')
}else if (temp <= 0 || temp >= 120) { 
    console.log('do not go outside. ')
}else { 
    console.log('it should be fine')
}

//challenge 
let isGuestOneVegan = false; 
let isGuestTwoVegan = false; 

if (isGuestTwoVegan && isGuestOneVegan) { 
    console.log('both guests are vegan. Only offer vegan dishes')
}else if (isGuestTwoVegan || isGuestOneVegan) { 
    console.log('one of these guests is a vegan. Offer both dishes')
}else { 
    console.log('netiher are vegan. don\'t offer vegan dishes...')
}; 




