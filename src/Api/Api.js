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
// Popular-projects/videos
const popular_projects = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// Upcoming-projects/videos
const upcoming_projects = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// New-projects/videos
const new_projects = `games?dates=${lastYear},${currentDate}&ordering=-release&page_size=10`;

export const popularProjectsURL = () => `${base_url}${popular_projects}`;
export const upcomingProjectsURL = () => `${base_url}${upcoming_projects}`;
export const newProjectsURL = () => `${base_url}${new_projects}`;
// Project Details
export const projDetailsURL = (id) => `${base_url}games/${id}`;
// Project Screenshots/img
export const screenShotURL = (id) => `${base_url}games/${id}/screenshots`; 
// Searched project
export const searchGameURL = (proj_name) => `${base_url}games?search=${proj_name}$page_size=9`;