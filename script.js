document.getElementById('task1').addEventListener('click', task1);
document.getElementById('task2').addEventListener('click', task2);
document.getElementById('task3').addEventListener('click', task3);
document.getElementById('task4').addEventListener('click', task4);
document.getElementById('task5').addEventListener('click', task5);

function task1() {
  let user = {
    name: "Джон",
    age: 30
  };
  user.sayHi = function() {
    alert("Привет!");
  };
  user.sayHi();
  document.getElementById('task1Result').textContent = "Метод sayHi вызван.";
}

function task2() {
  const buyer = {
    name: "Иван Иванов",
    address: "ул. Ленина, 15",
    phone: "+7 900 123 45 67",
    email: "ivan.ivanov@example.com",
    purchaseDate: "2001-03-08"
  };
  document.getElementById('task2Result').textContent = `Имя: ${buyer.name}, Адрес: ${buyer.address}, Телефон: ${buyer.phone}`;
}

function task3() {
    const users = [{id:1, name:"Иван"}, {id:2, name:"Дмитрий"}];
    const orders = [{id:1, userId:1, restaurantId:1}, {id:2, userId:2, restaurantId:2}];
    const restaurants = [{id:1, name:"Вкусно и точка"}, {id:2, name:"Додо пицца"}];

    let output = "";
    for (let order of orders){
      let user = users.find(u => u.id === order.userId);
      let restaurant = restaurants.find(r => r.id === order.restaurantId);
      output += `Заказ №${order.id}: Пользователь: ${user.name}, Ресторан: ${restaurant.name}\n`;
    }
    document.getElementById('task3Result').textContent = output;
  }

function task4() {
  function GroupMember(name) {
    this.name = name;
  }

  const members = [
    new GroupMember("Аня"),
    new GroupMember("Сава"),
    new GroupMember("Даша") 
  ];

  const names = members.map(member => member.name).join(", ");
  document.getElementById('task4Result').textContent = `Члены группы: ${names}`;
}

function task5() {
  function Student(name, course, grades) {
    this.name = name;
    this.course = course;
    this.grades = grades;
    this.sayHi = function() { alert(`Меня зовут: ${this.name}`); };
    this.averageGrade = function(){
      return this.grades.reduce((sum,grade)=>sum+grade,0)/this.grades.length;
    }
  }

  const vasya = new Student("Вася", "Математика", [4, 5, 4, 3, 5]);
  vasya.sayHi();
  document.getElementById('task5Result').textContent = `Студент ${vasya.name}, курс ${vasya.course}, средний балл: ${vasya.averageGrade()}`;
}


//Доп. задание
document.getElementById('calculate').addEventListener('click', calculate);

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b === 0) { return "Деление на ноль!"; }
      return a / b;
    }
  };

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('Result').textContent = "Пожалуйста, введите числа.";
    return;
  }

  let result;
  try{
    result = calculator[operation](num1, num2);
  } catch (error){
    result = "Ошибка вычисления";
  }

  document.getElementById('Result').textContent = `Результат: ${result}`;
}
