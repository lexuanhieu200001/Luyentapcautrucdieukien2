let tncn = +prompt('number')
let bac1 = tncn * (5 / 100);
let bac2 = tncn * (10 / 100) - 0.25;
let bac3 = tncn * (15 / 100) - 0.75;
let bac4 = tncn * (20 / 100) - 1.65;
let tinhtien;
if (tncn <= 5) {
    tinhtien = bac1;
    document.write(tinhtien);
} else if (5 < tncn <= 10) {
    tinhtien = bac2
    document.write(tinhtien);
} else if (10 < tncn <= 20) {
    tinhtien = bac3
    document.write(tinhtien);
} else {
    tinhtien = bac4
    document.write(tinhtien);
}