let yearBirth = prompt('Який твій рік народження', '1982');
let age;

if (yearBirth === null || yearBirth === '') {
  alert('Шкода, що Ви не захотіли ввести свій рік народження');
} else {
  let numYearBirth = Number(yearBirth); // liquidation undefind in alert
  if (!isNaN(numYearBirth)) {
    let currentYear = new Date().getFullYear();
    age = `Твій вік: ${currentYear - yearBirth}`;
  } else {
    alert('The date is not correct. Please enter a number');
  }
}
age = age || '';

let cityLive = prompt('В якому місті ти живеш?', 'Харків');
let resultCity;

if (cityLive === null || cityLive.trim() === '' || !isNaN(cityLive)) {
  alert('Шкода, що Ви не захотіли ввести свое місто');
} else {
  switch (cityLive) {
    case 'Київ':
      resultCity = `Ти живеш у столиці України`;
      break;
    case 'Вашингтон':
      resultCity = `Ти живеш у столиці США`;
      break;
    case 'Лондон':
      resultCity = `Ти живеш у столиці Великобританії`;
      break;
    default:
      resultCity = `Ти живеш у місті ${cityLive}`;
  }
}

// Set a default message if resultCity is undefined
resultCity = resultCity || '';

let sport = prompt('Який твій улюбленний вид спорту?', 'Футбол');
let star;

if (sport === null || sport.trim() === '' || !isNaN(cityLive)) {
  alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
} else {
  switch (sport) {
    case 'Теніс':
      star = 'Круто! Хочеш стати як Андрій Медведев';
      break;
    case 'Футбол':
      star = 'Круто! Хочеш стати як Андрій Шевченко?';
      break;
    case 'Дзюдо':
      star = 'Круто! Хочеш стати як Дар`я Білодід?';
      break;
  }
}
star = star || '';

alert(`${age}
${resultCity}
${star}`);
