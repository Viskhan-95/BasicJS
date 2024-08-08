
const hasLicence = true;
const age = 18;
isDrunk = false;

const canDrive = age > 17 && hasLicence && !isDrunk;

console.log(`Могу вести машину: ${canDrive}`);