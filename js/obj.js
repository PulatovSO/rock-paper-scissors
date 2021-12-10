
function createCar (model, color, price) {
  return {
    model,
    color,
    price,
    start () {
      console.log('started')
    },
    drive () {
      console.log('drove')
    }
  }
}

let malibu = createCar('malibu', 'black', 25000)
let ferrari = createCar('F510', 'red', 270000)
let damas = createCar('Red line 2022', 'white', 20000)


function CreateAnotherCar (model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
    this.start = function () {
      console.log('started')
    };
    this.drive = function () {
      console.log('drove')
    };
}