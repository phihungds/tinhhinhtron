function tinh() {
let R = Number(document.getElementById("R").value)
let D = R * 2
let C = 2 * R * 3.14
let S = R * R * 3.14
let hienthiD = "Đường kính hình tròn là: " + D
let hienthiC = "Chu vi hình tròn là: " + C
let hienthiS = "Diện tích hình tròn là: " + S
document.getElementById("hienthiD").innerText = hienthiD
document.getElementById("hienthiC").innerText = hienthiC
document.getElementById("hienthiS").innerText = hienthiS
document.getElementById("R").focus()
}