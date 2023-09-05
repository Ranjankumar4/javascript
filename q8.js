function calculateRemainingDays(eventDate) {
    const currentdate = new Date();
    const eventDatetime= new Date(eventDate);

    const timeDifference = eventDatetime - currentdate;
    const daysremaining = Math.ceil(timeDifference / (1000*60*60*24));

    return daysremaining;
}

const eventDate = '2023-08-31'
console.log(calculateRemainingDays(eventDate));
