enum reversedDaysEnum {
  "Monday" = 1,
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
}

function reversedDayOfTheWeek(day: string): number | string {
  return (reversedDaysEnum as any)[day] ?? 'error';
}

console.log(reversedDayOfTheWeek('Monday'))