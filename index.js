// Load Chance
var faker = require('faker')

module.exports = () => {
  var employees = []

  for (var id = 0; id < 50; id++) {

    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();

    const nrDays = [21, 22, 23, 24, 25];
    const totalVacationDays = nrDays[Math.floor(Math.random() * nrDays.length)];

    const restanta2019 = [1,2,3,4,5];
    const leftovers2019 = restanta2019[Math.floor(Math.random() * restanta2019.length)];

    const christmasDays = 5

    const vacationRandomDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15];
    const vacantionDaysTaken = vacationRandomDays[Math.floor(Math.random() * vacationRandomDays.length)];

    const availableVacationDays = totalVacationDays - (leftovers2019 + christmasDays + vacantionDaysTaken)
//comment 1
    //comment2
    employees.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "total_vacantion_days": totalVacationDays,
      "leftovers_2019": leftovers2019,
      "christmas_days": christmasDays,
      "vacantion_days_taken": vacantionDaysTaken,
      "available_vacation_days": availableVacationDays
    })
  }

  return { "employees": employees }
}