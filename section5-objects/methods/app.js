let restaurant = {
    name: 'Five Guys',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft 
    }, 

    seatParty: function (partySize) { 
        this.guestCount = this.guestCount + partySize  
    }, 

    removeParty(partySize) { 
        this.guestCount = this.guestCount - partySize 
    }
}; 


restaurant.seatParty(72);  // seats 72 people 
console.log(restaurant.checkAvailability(4));  // return false as capacity is 75.  
restaurant.removeParty(5); // removes 5 people 
console.log(restaurant.checkAvailability(4)); //return true as there is enough space for 5 