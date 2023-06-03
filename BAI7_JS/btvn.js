function namNhuan() {
    let a = +prompt ("Nhập số năm của bạn")
    if (a <= 0 || isNaN(a)) {
        alert("Dữ liệu người dùng không hợp lệ")
} else {
    if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) {
        result = "Đây là năm nhuận"
    }else {
        result = "Đây là năm thường"
    
    } 
    alert(result)
}
}
namNhuan()