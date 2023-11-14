function solveLinear() {
    // Lấy các giá trị từ input
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let x = -b / a;
    // Kiểm tra a có bằng 0 hay không
    if (a === 0) {
        if (b === 0) {
            document.getElementById("result").innerHTML = "Phương trình vô số nghiệm.";
        } else {
            document.getElementById("result").innerHTML = "Phương trình vô nghiệm.";
        }
    } else {
        document.getElementById("result").innerHTML = "Nghiệm của phương trình là x = " + x;
    }
}