function generateReportCard(student) {
  if (
    typeof student !== "object" ||
    typeof student.bangla !== "number" ||
    typeof student.english !== "number" ||
    typeof student.math !== "number"
  ) {
    return "Invalid";
  }
  let total = student.bangla + student.english + student.math;
  console.log(total, "total");
  let avg = total / 3;
  console.log(avg, "avg");
  let grade ;
  if (avg >= 90) {
    grade = "A+";
  } else if (avg >= 80) {
    grade = "A";
  } else if (avg >= 70) {
    grade = "B";
  } else {
    grade = "F";
  }
  return `Report: { name:${student.name}, total:${total}, average:${avg}, grade:${grade} }`;
}
console.log(
  generateReportCard({ name: "Ayan", bangla: 78, english: 85, math: 92 }),
);
