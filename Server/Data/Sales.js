import { v4 as uuidv4 } from "uuid";
import { Course } from "./Course.js";
let totalSales = 0;
let totalSales_Africa = 0;
let totalSales_Antarctica = 0;
let totalSales_Asia = 0;
let totalSales_Australia = 0;
let totalSales_Europe = 0;
let totalSales_North_America = 0;
let totalSales_South_America = 0;
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
export const Sales = [
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
    sale_date: "2021-01-04",
  },
  {
    id: uuidv4(),
    continent: "South America",
    sale_amount: 5000,
    sale_date: "2021-01-05",
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
    sale_date: "2022-02-08",
  },
  {
    id: uuidv4(),
    continent: "Asia",
    sale_amount: 4000,
    sale_date: "2022-03-09",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 3000,
    sale_date: "2022-04-10",
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
    sale_date: "2021-06-14",
  },
  {
    id: uuidv4(),
    continent: "Africa",
    sale_amount: 5000,
    sale_date: "2021-4-15",
  },
  {
    id: uuidv4(),
    continent: "Asia",
    sale_amount: 4000,
    sale_date: "2021-10-16",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 2000,
    sale_date: "2021-12-17",
  },
  {
    id: uuidv4(),
    continent: "North America",
    sale_amount: 3000,
    sale_date: "2021-1-18",
  },
  {
    id: uuidv4(),
    continent: "South America",
    sale_amount: 6000,
    sale_date: "2021-12-19",
  },
  {
    id: uuidv4(),
    continent: "Australia",
    sale_amount: 8000,
    sale_date: "2021-11-20",
  },
  {
    id: uuidv4(),
    continent: "Antarctica",
    sale_amount: 1000,
    sale_date: "2021-10-21",
  },
  {
    id: uuidv4(),
    continent: "Africa",
    sale_amount: 2000,
    sale_date: "2021-09-22",
  },
  {
    id: uuidv4(),
    continent: "Asia",
    sale_amount: 3000,
    sale_date: "2021-08-23",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 4000,
    sale_date: "2021-07-24",
  },
  {
    id: uuidv4(),
    continent: "North America",
    sale_amount: 5000,
    sale_date: "2021-06-25",
  },
  {
    id: uuidv4(),
    continent: "South America",
    sale_amount: 6000,
    sale_date: "2021-05-26",
  },
  {
    id: uuidv4(),
    continent: "Australia",
    sale_amount: 7000,
    sale_date: "2021-04-27",
  },
  {
    id: uuidv4(),
    continent: "Antarctica",
    sale_amount: 1000,
    sale_date: "2021-03-28",
  },
  {
    id: uuidv4(),
    continent: "Africa",
    sale_amount: 5000,
    sale_date: "2021-02-29",
  },
  {
    id: uuidv4(),
    continent: "Asia",
    sale_amount: 6000,
    sale_date: "2024-01-30",
  },
  {
    id: uuidv4(),
    continent: "Europe",
    sale_amount: 1000,
    sale_date: "2023-01-31",
  },
];

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
  }
});

Sales.push({
  totalSales,
  totalSales_Africa,
  totalSales_Antarctica,
  totalSales_Asia,
  totalSales_Australia,
  totalSales_Europe,
  totalSales_North_America,
  totalSales_South_America,
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
});
