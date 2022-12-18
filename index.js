// Code your solution in this file!
const blockLength = 264;
const minDistance = 400;
const maxDistance1 = 2000;
const maxDistance2 = 2500;

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * blockLength;
}

function distanceTravelledInFeet(start, destination){
    const blocks = Math.abs(destination - start);
    return blocks * blockLength;
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < minDistance) {
        return 0;
    } else if (distance < maxDistance1) {
        return (distance - minDistance) * 0.02;
    } else if (distance < maxDistance2) {
        return 25;
    } else if (distance > maxDistance2) {
        return 'cannot travel that far';
    }
}