export const utilService = {
  getDayByDate
}

function getDayByDate(date) {
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = new Date(date);
  return week[day.getDay()];
}