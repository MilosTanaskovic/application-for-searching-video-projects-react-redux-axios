// Base URL
const base_url = 'https://api.rawg.io/api/';

// Getting Year
const currentYear = new Date().getFullYear();
// Getting Month
const getCurrentMonth = () => {
 const month = new Date().getMonth() + 1;
 if(month < 10){
  return `0${month}`;
 }else{
  return month;
 }
}
// Getting Day
const getCurrentDay = () => {
 const day = new Date().getDate()
 if(day < 10){
  return `0${day}`;
 }else{
  return day;
 }
}
// Current year-month-day
const currentMonth = getCurrentMonth();
const curentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${curentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${curentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${curentDay}`;
// Popular-project/video
const popular_project = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularProjectURL = () => `${base_url}${popular_project}`;
