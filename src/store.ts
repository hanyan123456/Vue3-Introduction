import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//别名
// type userDateType={
//   id:number;
//   name:string;
//   age:number
// }
//接口
// Array<userDateType> 数组的泛型
// interface stateType{
//   userDate: Array<userDateType>;
//   count:number
// }
// const state: stateType={
//   count:1,
//   userDate:[
//     {
//       id: 0,
//       name: 'ssss',
//       age: 24
//     },
//     {
//       id: 1,
//       name: 'dddd',
//       age: 24
//     }
//   ]
// }

export default new Vuex.Store({
  // state,
  state: {
    count:'我是vue3',
    total:4
  },
  mutations: {},
  actions: {}
});
