export default {};

// const a: number = 5;
// const b: string = "text";
// const c: Date = new Date();
// const d: "admin" = "admin";
// const e: 1 = 1;

// const arr = [a, b, c, d, e];
// console.log(arr);

// интерфейсы и типы (type aliases) похожи, интерфейсы могут быть дополнены новыми свойствами, в то время как типы нет

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// interface Bear {
//   newF: string;
// }

// function getBear(): Bear {
//   return { honey: true, name: "Bear interface", newF: "some" };
// }

// const bear = getBear();
// bear.name;
// bear.honey;
// bear.newF;

// type Animal1 = {
//   name: string;
// };

// type Bear1 = Animal1 & {
//   honey: boolean;
// };

// function getBear1(): Bear1 {
//   return { honey: true, name: "Bear type" };
// }

// const bear1 = getBear1();
// bear1.name;
// bear1.honey;
