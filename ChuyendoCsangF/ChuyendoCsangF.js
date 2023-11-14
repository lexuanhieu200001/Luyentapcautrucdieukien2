function chuyendoi() {
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let d = document.getElementById('doc').value;
    let result;
    if (from == to) {
        result = ('khong can chuyen doi')
        document.getElementById('convest').innerText= result
    } else if (from == 'Độ C' && to == "Độ F") {
        result = d * 9 / 5 + 32 + "Do F"
        document.getElementById('convest').innerText= result
    } else {
        result = (d - 32) * (5 / 9) + "Do C"
        document.getElementById('convest').innerText= result
    }
}
