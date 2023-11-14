function canbac2(){
    let a = +document.getElementById("nhapa").value;
    let b = +document.getElementById("nhapb").value;
    let c = +document.getElementById("nhapc").value;
    let delta = b * b - 4 * a * c;
    let nghiem1= (-b + Math.sqrt(delta)) / (2 * a);
    let nghiem2= (-b - Math.sqrt(delta)) / ( 2* a );
    if (delta > 0){
        document.getElementById('result').innerHTML = "Phương trình có 2 nghiệm phân biệt:<br>nghiem1=" + nghiem1 + "<br>nghiem2=" + nghiem2;
    } else if (delta === 0){
        let nghiemkep= -b/( 2 * a);
        document.getElementById('result').innerHTML = "Phương trình có nghiệm kép:<br>nghiemkep=" + nghiemkep;
    } else {
        document.getElementById('result').innerHTML = 'phương trình vô nghiệm';
    }
}
