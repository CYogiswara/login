// Algoritma Login
// 1.Akun memiliki username Yogi
// 2.Akun memiliki password Halo
// 3.Jika username atau password yang dimasukan tidak sesuai maka,
// 4.akan muncul alert Salah
// 5.Jika username dan password yang diinput benar maka muncul alert Welcome

let person = prompt("Masukan username anda!")
let password = prompt("Masukan password!")

if(person == "Yogi" || password == "Halo"){
    alert("Welcome")
}else{
    alert("Salah")
}


