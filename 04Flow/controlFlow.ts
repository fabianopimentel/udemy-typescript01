// if-else
function driveCar(age: number) {
    if (age >= 18) {
        console.log("Congrats! You have permission to drive.");
    } else {
        console.log("Sorry, You can't drive! :(");
    }
}
driveCar(27);

// ternary
function maxSpeed(speed: number) {
    let permitedSpeed = (speed > 80)
        ? console.log("Sir, you were driving in excess of the speed limit.")
        : console.log("Omg, Are you a turtle?");
}
maxSpeed(95);

//switch
function comboFood(foodType: number) {
    switch (foodType) {
        case 1:
            console.log("Cheeseburger: $ 5.00");
            break;
        case 2:
            console.log("Hotdog: $ 4.00");
            break;
        case 3:
            console.log("Pizza Plus Size: $ 12.00");
            break;
        case 4:
            console.log("Sorry, wrong choice. Choose another one.")
    }
}
comboFood(3);