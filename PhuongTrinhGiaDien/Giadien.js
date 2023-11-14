// tính gía điện
// bậc 1: Cho kWh từ 0 - 50: 1.805 đồng
// bậc 2: Cho kWh từ 51 - 100: 1.866 đồng
// bậc 3: Cho kWh từ 101 - 150: 2.167 đồng
// bậc 4: Cho kWh từ 151 - 200: 2.729 đồng
let kwh = +prompt('number');
let bac1 = 1805;
let bac2 = 1866;
let bac3 = 2167;
let tinhtien;

if (kwh <= 50) {
    tinhtien = kwh * bac1;
    document.write(tinhtien);
} else if (kwh <= 100) {
    tinhtien = kwh * bac1 + (kwh - 50) * bac2;
    document.write(tinhtien)
} else if (kwh <= 200) {
    tinhtien = kwh * bac1 + 50 * bac2 + (kwh - 50 - 50) * bac3;
    document.write(tinhtien)
} else {
    document.write('dùng ít điện thôi')
}
