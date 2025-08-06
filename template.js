//template literals
const nama = "artha";
const pesan = `halo,$(nama)! Selamat datang`;
console.log (pesan);


//destructuring array
const angka = [1, 2, 3];
const [satu, dua, tiga] = angka;
console.log(satu, dua , tiga);

//destructuring objek
const user = {namae: "artha", umur: 17};
const {namae, umur} = user;
console.log(namae,umur);

//spread and rest operators
//Spread Operator pada array
const angka1 = [1,2];
const angka2 = [...angka1, 3 , 4 ,5];
console.log(angka2)

//spread operator pada objek
const user1 = {nama:"artha", umur: 17};
const user2 = {...user1, pekerjaan: "programing"};
console.log(user2);

//spread operator pada fungsi
function hitung(...angka) {
    return angka.reduce((acc, curr)=> acc + curr, 0);
}
console.log(hitung(1,2,3,4,5,6,7,8,9,));

//modules import/export
//file utils.js

export function tambah(a,b) {
    return a + b;
}
export const PI = 3.14;

import {tambah, PI} from './variable.js';
console.log(tambah(2,3));
console.log(PI);

