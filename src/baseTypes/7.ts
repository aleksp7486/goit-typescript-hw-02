/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// Monday, Tuesday, Wednesday, Thursday, and Friday; while Saturday and Sunday
enum Days {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

function isWeekend(day: Days): boolean {
  if (day === Days.saturday || day === Days.sunday) {
    return true;
  }
  return false;
}

console.log(isWeekend(Days.saturday));
console.log(isWeekend(Days.monday));
