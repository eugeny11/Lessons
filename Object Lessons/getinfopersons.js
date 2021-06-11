//Напишите функцию getInfo(persons), которая принимает массив объектов, описывающих человека, 
//имеющих поля {name, age} и возвращает объект со средним возрастом и именем самого старшего человека

const getInfo = persons =>{
    const ages = persons.map(person => person.age);
    const averageAge = ages.reduce((a,b) => a + b, 0) / ages.length;
    const maxAge = Math.max(...ages);
    const oldestPerson = persons.find( person => person.age === maxAge);
    return {
        averageAge,
        oldestPerson: oldestPerson.name,
    }
}

console.log( getInfo([
    {
        name: 'Kaya',
      age: 10,
    },
    {
        name: 'Vitya',
      age: 20,
    },
    {
        name: 'Kolya',
      age: 30,
    }
  ]) )