let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const car in statistics) {
    if ('r' == car.charAt(0) || statistics[car] % 2 == 1)
        console.log(`${car}: ${statistics[car]}`);
}