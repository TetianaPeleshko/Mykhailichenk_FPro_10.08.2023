class SuperMath {
  check(obj) {
    if (this.isValidOperator(obj.znak)) {
      // Виконати математичну дію, якщо оператор правильний
      this.calculate(obj);
    } else {
      // Запитати нові дані через метод input()
      this.input();
    }
  }

  isValidOperator(operator) {
    // Перевірити, чи є оператор допустимим
    const validOperators = ['+', '-', '*', '/', '%'];
    return validOperators.includes(operator);
  }

  calculate(obj) {
    // Виконати математичну дію
    const { X, Y, znak } = obj;
    let result;

    switch (znak) {
      case '+':
        result = X + Y;
        break;
      case '-':
        result = X - Y;
        break;
      case '*':
        result = X * Y;
        break;
      case '/':
        result = X / Y;
        break;
      case '%':
        result = X % Y;
        break;
    }

    console.log(`Результат: ${result}`);
  }

  input() {
    // Запитати нові дані від користувача
    const X = prompt('Введіть число X:');
    const Y = prompt('Введіть число Y:');
    const znak = prompt('Введіть математичний оператор (+, -, *, /, %):');

    const newObj = { X: parseFloat(X), Y: parseFloat(Y), znak };
    this.check(newObj);
  }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: '/' };
p.check(obj);
