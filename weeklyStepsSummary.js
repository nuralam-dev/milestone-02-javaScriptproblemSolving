function weeklyStepsSummary(stepsArray) {
  let steps = 0;
  for (let item of stepsArray) {
    let sum = steps + item;
    steps = sum;
  }
  let goalReached = false;
  if(steps>= 50000){
    goalReached = true
  }
  let returnObj ={
    totalSteps : steps,
    goalReached : goalReached
  }
  return returnObj
}
let steps = [8000, 7500, 9200, 6000, 10000, 5500, 4000];
console.log(weeklyStepsSummary(steps));
