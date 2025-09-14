const data = "202408",
  period = "m";

const bankURL = "https://bank.gov.ua/";

const myURL = new URL("/NBUStatService/v1/statdirectory/banksincexp", bankURL);
//інший спосіб додавання шляху

//myURL.pathname = "/NBUStatService/v1/statdirectory/banksincexp";

myURL.searchParams.append("date", data);
myURL.searchParams.append("period", period);
myURL.searchParams.append("json", "");

console.log(myURL.toString());

//https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp?date=202408&period=m&json
