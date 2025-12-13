enum daysEnum {
  "Monday" = 1,
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
}

function dayOfTheWeek(day: number) {
  return daysEnum[day] || 'error';
}

console.log(dayOfTheWeek(-1))