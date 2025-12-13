function summarizePerson(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string,
  hobbies?: string[],
  workInfo?: [string, number]
): [number, string, number, string, string] {
  const fullName: string =
    middleName && middleName !== ""
      ? `${firstName} ${middleName} ${lastName}`
      : `${firstName} ${lastName}`;

  const currHobbies: string = hobbies && hobbies.length > 0 ? hobbies?.join(", ") : "-";

  const salary: string = workInfo ? `${workInfo[0]} -> ${workInfo[1]}`: "-";

  return [id, fullName, age, currHobbies, salary];
}
// console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]))
console.log(summarizePerson(21, "Joseph", "Angler", 28));
