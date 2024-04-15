import { v4 as uuidv4 } from "uuid";
import { Course } from "./Course.js";
//total sales
let totalSales = 0;
//total sales by continent
let totalSales_Africa = 0;
let totalSales_Antarctica = 0;
let totalSales_Asia = 0;
let totalSales_Australia = 0;
let totalSales_Europe = 0;
let totalSales_North_America = 0;
let totalSales_South_America = 0;
//total sales by course topic
let totalSales_ArtificialIntelligence = 0;
let totalSales_Web3 = 0;
let totalSales_DataScience = 0;
let totalSales_CyberSecurity = 0;
let totalSales_CloudComputing = 0;
let totalSales_IoT = 0;
let totalSales_Analytics = 0;
let totalSales_Graphics = 0;
let totalSales_WebDevelopment = 0;
let totalSales_AppDevelopment = 0;
//total online sales by month
let totalSales_Online_January = 0;
let totalSales_Online_February = 0;
let totalSales_Online_March = 0;
let totalSales_Online_April = 0;
let totalSales_Online_May = 0;
let totalSales_Online_June = 0;
let totalSales_Online_July = 0;
let totalSales_Online_August = 0;
let totalSales_Online_September = 0;
let totalSales_Online_October = 0;
let totalSales_Online_November = 0;
let totalSales_Online_December = 0;
//total offline sales by month
let totalSales_Classroom_January = 0;
let totalSales_Classroom_February = 0;
let totalSales_Classroom_March = 0;
let totalSales_Classroom_April = 0;
let totalSales_Classroom_May = 0;
let totalSales_Classroom_June = 0;
let totalSales_Classroom_July = 0;
let totalSales_Classroom_August = 0;
let totalSales_Classroom_September = 0;
let totalSales_Classroom_October = 0;
let totalSales_Classroom_November = 0;
let totalSales_Classroom_December = 0;
//total online sales by year
let totalSales_Online_2021 = 0;
let totalSales_Online_2022 = 0;
let totalSales_Online_2023 = 0;
let totalSales_Online_2024 = 0;
//total offline sales by year
let totalSales_Classroom_2021 = 0;
let totalSales_Classroom_2022 = 0;
let totalSales_Classroom_2023 = 0;
let totalSales_Classroom_2024 = 0;
let totalSales_Classroom = 0;

export const Sales = [
  {
    id: uuidv4(),
    continent: "South America",
    sale_amount: 1000,
    sale_date: "2024-08-01",
  },
  {
    id: uuidv4(),
    continent: "Antarctica",
    sale_amount: 500,
    sale_date: "2024-09-02",
  },
  {
    id: uuidv4(),
    continent: "Africa",
    sale_amount: 2500,
    sale_date: "2024-04-03",
  },
  {
    id: uuidv4(),
    continent: "Asia",
    sale_amount: 3000,
    sale_date: "2023-05-04",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 4000,
    sale_date: "2023-06-05",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 3000,
    sale_date: "2021-01-03",
  },
  {
    id: uuidv4(),
    continent: "North America",
    sale_amount: 4000,
    sale_date: "2022-01-04",
  },
  {
    id: uuidv4(),
    continent: "South America",
    sale_amount: 5000,
    sale_date: "2021-03-05",
  },
  {
    id: uuidv4(),
    continent: "Australia",
    sale_amount: 5000,
    sale_date: "2021-01-06",
  },
  {
    id: uuidv4(),
    continent: "Antarctica",
    sale_amount: 6000,
    sale_date: "2021-01-07",
  },
  {
    id: uuidv4(),
    continent: "Africa",
    sale_amount: 7000,
    sale_date: "2021-02-08",
  },
  {
    id: uuidv4(),
    continent: "Asia",
    sale_amount: 4000,
    sale_date: "2021-02-09",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 3000,
    sale_date: "2021-04-10",
  },
  {
    id: uuidv4(),
    continent: "North America",
    sale_amount: 2000,
    sale_date: "2022-05-11",
  },
  {
    id: uuidv4(),
    continent: "South America",
    sale_amount: 1000,
    sale_date: "2022-06-12",
  },
  {
    id: uuidv4(),
    continent: "Australia",
    sale_amount: 6000,
    sale_date: "2022-07-13",
  },
  {
    id: uuidv4(),
    continent: "Antarctica",
    sale_amount: 7000,
    sale_date: "2022-06-14",
  },
  {
    id: uuidv4(),
    continent: "Africa",
    sale_amount: 5000,
    sale_date: "2022-04-15",
  },
  {
    id: uuidv4(),
    continent: "Asia",
    sale_amount: 4000,
    sale_date: "2022-10-16",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 2000,
    sale_date: "2022-12-17",
  },
  {
    id: uuidv4(),
    continent: "North America",
    sale_amount: 3000,
    sale_date: "2022-11-18",
  },
  {
    id: uuidv4(),
    continent: "South America",
    sale_amount: 6000,
    sale_date: "2022-12-19",
  },
  {
    id: uuidv4(),
    continent: "Australia",
    sale_amount: 8000,
    sale_date: "2022-11-20",
  },
  {
    id: uuidv4(),
    continent: "Antarctica",
    sale_amount: 1000,
    sale_date: "2023-10-21",
  },
  {
    id: uuidv4(),
    continent: "Africa",
    sale_amount: 2000,
    sale_date: "2023-09-22",
  },
  {
    id: uuidv4(),
    continent: "Asia",
    sale_amount: 3000,
    sale_date: "2023-08-23",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 4000,
    sale_date: "2023-07-24",
  },
  {
    id: uuidv4(),
    continent: "North America",
    sale_amount: 5000,
    sale_date: "2024-06-25",
  },
  {
    id: uuidv4(),
    continent: "South America",
    sale_amount: 6000,
    sale_date: "2024-05-26",
  },
  {
    id: uuidv4(),
    continent: "Australia",
    sale_amount: 7000,
    sale_date: "2024-04-27",
  },
  {
    id: uuidv4(),
    continent: "Antarctica",
    sale_amount: 1000,
    sale_date: "2024-03-28",
  },
  {
    id: uuidv4(),
    continent: "Africa",
    sale_amount: 5000,
    sale_date: "2023-02-29",
  },
  {
    id: uuidv4(),
    continent: "Asia",
    sale_amount: 6000,
    sale_date: "2023-08-30",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 1000,
    sale_date: "2021-09-31",
  },
];

// Calculating total sales and sales by continent and course topic
Sales.forEach((sale, index) => {
  sale.course_id = Course[index % Course.length].id;
  totalSales += sale.sale_amount;
  switch (sale.continent) {
    case "Africa":
      totalSales_Africa += sale.sale_amount;
      break;
    case "Antarctica":
      totalSales_Antarctica += sale.sale_amount;
      break;
    case "Asia":
      totalSales_Asia += sale.sale_amount;
      break;
    case "Australia":
      totalSales_Australia += sale.sale_amount;
      break;
    case "Europe":
      totalSales_Europe += sale.sale_amount;
      break;
    case "North America":
      totalSales_North_America += sale.sale_amount;
      break;
    case "South America":
      totalSales_South_America += sale.sale_amount;
      break;
  }
});

// Calculating total sales by course topic
Sales.forEach((sale) => {
  const course = Course.find((course) => course.id === sale.course_id);
  if (course) {
    switch (course.courseTopic) {
      case "Aritificial Intelligence":
        totalSales_ArtificialIntelligence += sale.sale_amount;
        break;
      case "Web3":
        totalSales_Web3 += sale.sale_amount;
        break;
      case "Data science":
        totalSales_DataScience += sale.sale_amount;
        break;
      case "Cyber Security":
        totalSales_CyberSecurity += sale.sale_amount;
        break;
      case "Cloud Computing":
        totalSales_CloudComputing += sale.sale_amount;
        break;
      case "IoT":
        totalSales_IoT += sale.sale_amount;
        break;
      case "Analytics":
        totalSales_Analytics += sale.sale_amount;
        break;
      case "Graphics":
        totalSales_Graphics += sale.sale_amount;
        break;
      case "Web Development":
        totalSales_WebDevelopment += sale.sale_amount;
        break;
      case "App Development":
        totalSales_AppDevelopment += sale.sale_amount;
        break;
    }
  } else {
    totalSales_Classroom += sale.sale_amount;
  }
});

// Calculating total  sales by month
Sales.forEach((sale) => {
  const course = Course.find((course) => course.id === sale.course_id);
  if (course.courseMode === "Online") {
    const date = new Date(sale.sale_date);
    const month = date.getMonth();
    switch (month) {
      case 0:
        totalSales_Online_January += sale.sale_amount;
        break;
      case 1:
        totalSales_Online_February += sale.sale_amount;
        break;
      case 2:
        totalSales_Online_March += sale.sale_amount;
        break;
      case 3:
        totalSales_Online_April += sale.sale_amount;
        break;
      case 4:
        totalSales_Online_May += sale.sale_amount;
        break;
      case 5:
        totalSales_Online_June += sale.sale_amount;
        break;
      case 6:
        totalSales_Online_July += sale.sale_amount;
        break;
      case 7:
        totalSales_Online_August += sale.sale_amount;
        break;
      case 8:
        totalSales_Online_September += sale.sale_amount;
        break;
      case 9:
        totalSales_Online_October += sale.sale_amount;
        break;
      case 10:
        totalSales_Online_November += sale.sale_amount;
        break;
      case 11:
        totalSales_Online_December += sale.sale_amount;
        break;
    }
  } else {
    const date = new Date(sale.sale_date);
    const month = date.getMonth();
    switch (month) {
      case 0:
        totalSales_Classroom_January += sale.sale_amount;
        break;
      case 1:
        totalSales_Classroom_February += sale.sale_amount;
        break;
      case 2:
        totalSales_Classroom_March += sale.sale_amount;
        break;
      case 3:
        totalSales_Classroom_April += sale.sale_amount;
        break;
      case 4:
        totalSales_Classroom_May += sale.sale_amount;
        break;
      case 5:
        totalSales_Classroom_June += sale.sale_amount;
        break;
      case 6:
        totalSales_Classroom_July += sale.sale_amount;
        break;
      case 7:
        totalSales_Classroom_August += sale.sale_amount;
        break;
      case 8:
        totalSales_Classroom_September += sale.sale_amount;
        break;
      case 9:
        totalSales_Classroom_October += sale.sale_amount;
        break;
      case 10:
        totalSales_Classroom_November += sale.sale_amount;
        break;
      case 11:
        totalSales_Classroom_December += sale.sale_amount;
        break;
    }
  }
});

// Calculating total sales by year
Sales.forEach((sale) => {
  const course = Course.find((course) => course.id === sale.course_id);
  if (course.courseMode === "Online") {
    const date = new Date(sale.sale_date);
    const year = date.getFullYear();
    switch (year) {
      case 2021:
        totalSales_Online_2021 += sale.sale_amount;
        break;
      case 2022:
        totalSales_Online_2022 += sale.sale_amount;
        break;
      case 2023:
        totalSales_Online_2023 += sale.sale_amount;
        break;
      case 2024:
        totalSales_Online_2024 += sale.sale_amount;
        break;
    }
  } else {
    const date = new Date(sale.sale_date);
    const year = date.getFullYear();
    switch (year) {
      case 2021:
        totalSales_Classroom_2021 += sale.sale_amount;
        break;
      case 2022:
        totalSales_Classroom_2022 += sale.sale_amount;
        break;
      case 2023:
        totalSales_Classroom_2023 += sale.sale_amount;
        break;
      case 2024:
        totalSales_Classroom_2024 += sale.sale_amount;
        break;
    }
  }
});

Sales.push({
  totalSales,
  //total sales by continent
  totalSales_Africa,
  totalSales_Antarctica,
  totalSales_Asia,
  totalSales_Australia,
  totalSales_Europe,
  totalSales_North_America,
  totalSales_South_America,
  //total sales by course topic
  totalSales_ArtificialIntelligence,
  totalSales_Web3,
  totalSales_DataScience,
  totalSales_CyberSecurity,
  totalSales_CloudComputing,
  totalSales_IoT,
  totalSales_Analytics,
  totalSales_Graphics,
  totalSales_WebDevelopment,
  totalSales_AppDevelopment,
  //total  sales by month
  January: {
    totalSales_Online_January,
    totalSales_Classroom_January,
  },
  February: {
    totalSales_Online_February,
    totalSales_Classroom_February,
  },
  March: {
    totalSales_Online_March,
    totalSales_Classroom_March,
  },
  April: {
    totalSales_Online_April,
    totalSales_Classroom_April,
  },
  May: {
    totalSales_Online_May,
    totalSales_Classroom_May,
  },
  June: {
    totalSales_Online_June,
    totalSales_Classroom_June,
  },
  July: {
    totalSales_Online_July,
    totalSales_Classroom_July,
  },
  August: {
    totalSales_Online_August,
    totalSales_Classroom_August,
  },
  September: {
    totalSales_Online_September,
    totalSales_Classroom_September,
  },
  October: {
    totalSales_Online_October,
    totalSales_Classroom_October,
  },
  November: {
    totalSales_Online_November,
    totalSales_Classroom_November,
  },
  December: {
    totalSales_Online_December,
    totalSales_Classroom_December,
  },
  // total sales by year
  2021: {
    totalSales_Online_2021,
    totalSales_Classroom_2021,
  },
  2022: {
    totalSales_Online_2022,
    totalSales_Classroom_2022,
  },
  2023: {
    totalSales_Online_2023,
    totalSales_Classroom_2023,
  },
  2024: {
    totalSales_Online_2024,
    totalSales_Classroom_2024,
  },
});
