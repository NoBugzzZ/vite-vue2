// const modules1 = import.meta.glob("./dir/*.js");
// console.log(modules1);
// for (let name in modules1) {
//   modules1[name]().then((res) => console.log(res));
// }

// const modules2 = import.meta.glob("./dir/*.js", { eager: true });

// const modules3 = import.meta.glob(
//   ["./dir/*.js", "!**/a.js", "./another/*.js"],
//   {
//     eager: true,
//   }
// );

// const modules4 = import.meta.glob("./dir/a.js", {
// //   eager: true,
//   import: "setup",
// });
// console.log(modules4);
// for (let name in modules4) {
//   modules4[name]().then((res) => res());
// }

// const modules5=import.meta.glob("./dir/b.js",{
//     import:"default"
// })
// console.log(modules5)
// for(let name in modules5){
//     modules5[name]().then(res=>res())
// }

let file='a'

import(`./dir/${file}.js`).then(res=>{
    console.log(res)
    res.setup()
})