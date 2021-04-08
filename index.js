// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    //returns the number of blocks given a value
    if (blocks > 42) {
        return blocks - 42
    } else {
        return 42 - blocks
    }
}
  
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

function distanceTravelledInFeet(startBlock, endBlock) {
    let distance = (startBlock - endBlock) * 264;
        return Math.abs(distance);
}

function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }