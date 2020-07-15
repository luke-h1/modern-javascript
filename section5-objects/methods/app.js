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
