function weeklyStepsSummary(stepsArray) {
  if (!Array.isArray(stepsArray)) {
    return "Invalid";
  }

  let steps = 0;
  for (let item of stepsArray) {
    if(typeof item !== "number"){
        return "Invalid"
    }
    let sum = steps + item;
    steps = sum;
  }
  let goalReached = false;
  if (steps >= 50000) {
    goalReached = true;
  }
  let returnObj = {
    totalSteps: steps,
    goalReached: goalReached,
  };
  return returnObj;
}
let steps = [8000, 7500, 9200, 6000, 10000, 5500, 4000];
console.log(weeklyStepsSummary(steps));
