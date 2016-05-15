var companies = [
  {
    "name" : "AdventNet",
    "category_code" : "enterprise",
    "number_of_employees" : 600,
    "founded_year" : 1996,
    "total_money_raised" : "$0"
  },
  {
    "name" : "TechnologyGuide",
    "category_code" : "web",
    "number_of_employees" : 10,
    "founded_year" : 2001,
    "total_money_raised" : "$0"
  },
  {
    "name" : "Wetpaint",
    "category_code" : "web",
    "number_of_employees" : 47,
    "founded_year" : 2005,
    "total_money_raised" : "$39.8M"
  },
  {
    "name" : "Zoho",
    "category_code" : "software",
    "number_of_employees" : 1600,
    "founded_year" : 2005,
    "total_money_raised" : "$0"
  },
  {
    "name" : "Omnidrive",
    "category_code" : "network_hosting",
    "number_of_employees" : null,
    "founded_year" : 2005,
    "total_money_raised" : "$800k"
  },
  {
    "name" : "Digg",
    "category_code" : "news",
    "number_of_employees" : 60,
    "founded_year" : 2004,
    "total_money_raised" : "$45M"
  },
  {
    "name" : "Geni",
    "category_code" : "web",
    "number_of_employees" : 18,
    "founded_year" : 2006,
    "total_money_raised" : "$16.5M"
  },
  {
    "name" : "StumbleUpon",
    "category_code" : "web",
    "number_of_employees" : null,
    "founded_year" : 2002,
    "total_money_raised" : "$18.5M"
  }
];

// use this function to return an array of all the company names founded last century
var collectCompaniesFoundedLastCentury = function (companies) {
  return companies.filter(function(company){
    return company['founded_year'] > 2000;
  }).map(function(company){
    return company['name'];
  });
};

// use this function to return an array of all the company names that raised 20 million dollars or more
var collectTwentyMillionDollarCompanies = function (companies) {
  return companies.filter(function(company){
    return company['total_money_raised'].slice(1).slice(-1) == 'M' && parseInt(company['total_money_raised'].slice(1)) > 20;
  }).map(function(company){
    return company.name;
  });
};

console.log(
  '$20m+ companies: ',collectTwentyMillionDollarCompanies(companies)
);

console.log(
  'Companies founded in the 2000s: ',collectCompaniesFoundedLastCentury(companies)
);

