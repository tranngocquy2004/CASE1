function xepLop() {
    let t = +prompt("Nhập điểm toán")
    let v = +prompt("Nhập điểm văn")
    let a = +prompt("Nhập điểm anh")
    let total = 2 * (t + v) + a;
    if (total >= 30 || t > 8 || v > 8) {
        alert("ĐỖ GÒI");
        if (total >= 40 && t >= 8) {
            alert("Vào lớp chọn Toán")
        } else if (total >= 40 && v >= 8) {
            alert("Vào lớp chọn Văn")
        } else {
            alert("Vào lớp thường")
        }
    } else {
            alert("CÚT")
    }

}
xepLop();