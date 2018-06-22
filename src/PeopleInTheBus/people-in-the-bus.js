const peopleInTheBus = stops => {
    let people = 0;
    stops.forEach( arr => {
        people = people + arr[0] - arr[1];
    });
    return people;
};

module.exports = peopleInTheBus;