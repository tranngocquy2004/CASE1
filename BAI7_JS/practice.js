function tamGiac() {
    let a = +prompt("Nhập chiều dài")
    let b = +prompt("Nhập chiều rộng")
    let c = +prompt("Nhập chiều cao")
    if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)){
        alert("Dữ liệu nhập vào không hợp lệ")
    } else {
        if (a + b > c && a + c > b && c + b > a) { 
            alert("Tam giác")
        }else {
            alert("Cút")
        }
    }
}
tamGiac()