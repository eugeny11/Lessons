//Используя функцию из предыдущего задания, создайте 3 "сервера". Первый принимает {номер продукта} и возвращает продукт, у которого есть поле {номер стеллажа на складе}, 
//второй сервер принимает {номер стеллажа на складе} и {номер продукта} и возвращает {номер коробки}, третий сервер принимает {номер коробки} и возвращает вес продукта. 
//Напишите функцию, которая принимает номер продукта, последовательно обращается к этим "серверам" и возвращает вес коробки в которой этот продукт находится.

const LATENCY = 400;

const getProduct = (productIdx, cb) => {
    const productsById = {
      0: { name: 'Орехи', rackId: 1 },
      1: { name: 'Морковь', rackId: 1 },
      2: { name: 'Спаржа', rackId: 1 },
      3: { name: 'Печенье', rackId: 2 },
      4: { name: 'Наушники', rackId: 2 },
      5: { name: 'Молоко', rackId: 2 },
      6: { name: 'Сок', rackId: 1 },
      7: { name: 'Контейнер', rackId: 1 },
      8: { name: 'JS-разработчик', rackId: 1 },
      9: { name: 'Прямые руки', rackId: 2 },
      10: { name: 'Водка', rackId: 2 },
    };
    setTimeout(cb, LATENCY, productsById[productIdx]);
  };

  const getBoxById = (rackId, productIdx, cb) => {
      const rackIdToBoxes = {
        1: [2, 0, 1, 6, 7, 8],
        2: [5, 3, 4, 10, 9],
      };

      setTimeout(cb, LATENCY, rackIdToBoxes[rackId].indexOf(productIdx));
  };

  const getBoxMass = (rackId, boxId, cb) => {
      const boxIdToMass = {
          // rackId: boxes: { boxId0: massProductId2, boxId1: massProductId0 }
    1: [10, 11, 12, 13, 14, 15],
    2: [16, 17, 18, 19, 20],
      }
      setTimeout(cb, LATENCY, boxIdToMass[rackId][boxId]);
  };

  const printProductMass = (productIdx) => {
      getProduct(productIdx, ({name, rackId}) => {
          getBoxById(rackId, productIdx, (boxId) => {
              getBoxMass(rackId, boxId, (boxMass) => {
                console.log(`Коробка №${boxId} c ${name} находится на стеллаже №${rackId} и весит ${boxMass} кг`);
              });
          });
      });
  };

  printProductMass(10);