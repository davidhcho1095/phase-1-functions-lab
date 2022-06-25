//Distance from HQ in blocks
const hq = 42
const feet = 264

function distanceFromHqInBlocks(blocks){
    if (blocks > hq){
        return blocks - hq;
    } else if (blocks < hq){
        return hq - blocks;
    }
}
//Distance from HQ in feet
function distanceFromHqInFeet(feet){
    if (feet > 42){
        return (feet - 42)*264
    } else if (feet < 42){
        return (42 - feet)*264
    }
}
//Distance travelled in Feet
function distanceTravelledInFeet(Location1, Location2){
    if (Location1 > Location2){
        return (Location1 - Location2)*264
    }  else if (Location1 < Location2){
        return (Location2 - Location1)*264
    }
}
//Fare Price Calculation
function calculatesFarePrice(start, destination){
    let blockLength = Math.abs(start - destination);
    let distanceTravelled = blockLength*264;
    
    if (distanceTravelled <= 400){
        console.log('give customers a free sample')
        return 0
    } else if (distanceTravelled <= 2000){
        console.log('remember the first 400 feet are free!')
        return 2.56
    } else if (distanceTravelled >= 2500) {
        return 'cannot travel that far'
    } else {
        return 25
    }
}