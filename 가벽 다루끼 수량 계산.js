var num1 = [[0], [0],[0],[0]];
var sub1 = 0;

const inch = 1;
const cm = 2.54;

function addRow() {
    var $width = document.getElementById("width");
    var $height = document.getElementById("height");
    var $room = document.getElementById("room");
    // $table element 찾기

    if ($width.value == '' || $height.value == '') { alert('가벽 규격을 입력 해주세여~') }
    else {
        let value_str = document.getElementById("inSelect");
        var p = value_str.options[value_str.selectedIndex];

        // $table element 찾기
        const $table = document.getElementById('fruits');

        // 새 행(Row) 추가 (테이블 중간에)
        const newRow = $table.insertRow();

        // 새 행(Row)에 Cell 추가
        const newCell1 = newRow.insertCell(0);
        const newCell2 = newRow.insertCell(1);
        const newCell3 = newRow.insertCell(2);
        const newCell4 = newRow.insertCell(3);
        const newCell5 = newRow.insertCell(4);
        const newCell6 = newRow.insertCell(5);

        const pyeong = Number($width.value * 0.001 * Number($height.value * 0.001));
        const pyeong1 = (pyeong*0.3).toFixed(1);
        var gypsum = Number((pyeong1*2*1.2).toFixed(0))*p.value;
        var plywood = Number((pyeong1*0.9*1.2).toFixed(0))*p.value;
        var gagjae = Number((pyeong1*4*1.2)).toFixed(0);

        num1[0].push(Number(pyeong*0.3));
        num1[1].push(gypsum);
        num1[2].push(plywood);
        num1[3].push(gagjae);

        // Cell에 텍스트 추가
        newCell1.innerText = $room.value;
        newCell2.innerText = (pyeong*0.3).toFixed(1);
        newCell3.innerText = p.text;
        newCell4.innerText = num1[1].at(-1);
        newCell5.innerText = num1[2].at(-1);
       newCell6.innerText = num1[3].at(-1);
        // if (p.value == "1") { }
        // if (p.value == "2") {newCell3.innerText = p.text; newCell5.innerText = gagjae1;}

        $width.value = '';
        $height.value = '';
    }
}
function deleteRow(rownum) {
    if (num1[0].length > 1) {
        // $table element 찾기
        const $table = document.getElementById('fruits');

        // 행(Row) 삭제
        const newRow = $table.deleteRow(rownum);
        for (let i = 0; i < num1.length; i++) {

        num1[i].pop();
    }
}
}
function sub() {
     if (num1[0].length == 1) { alert('각재재단 할 목록을 추가 해주세여~') }
    else {
        let $sum_pyeong = document.getElementById('sum-pyeong');
        let $sum_gypsum = document.getElementById('sum-gypsum');
        let $sum_plywood = document.getElementById('sum-plywood');
        let $sum_gagjae = document.getElementById('sum-gagjae');

        
        const $table = document.getElementById('fruits');
        
        let sum = 0;
        let sum_gypsum = 0;
        let sum_plywood = 0;
        let sum_gagjae = 0;

for (let i = 1; i < num1[0].length; i++) {
    sum += num1[0][i];
    sum_gypsum+= Number($table.rows[i].cells[3].innerText);
    sum_plywood+= Number($table.rows[i].cells[4].innerText);
    sum_gagjae+= Number($table.rows[i].cells[5].innerText);
}
let sum_gagjae1 = Math.ceil(sum_gagjae/12);

$sum_pyeong.innerHTML=sum.toFixed(1)+'평';
$sum_gypsum.innerHTML=sum_gypsum+'장';
$sum_plywood.innerHTML=sum_plywood+'장';
$sum_gagjae.innerHTML=sum_gagjae1+'단('+sum_gagjae+'개)';
    };
        
}


function tab(field, event) {

    if (event.which == 13 /* IE9/Firefox/Chrome/Opera/Safari */ || event.keyCode == 13 /* IE8 and earlier */ ) {

        for (i = 0; i < field.form.elements.length; i++) {

            if (field.form.elements[i].tabIndex == field.tabIndex + 1) {

                field.form.elements[i].focus();

                if (field.form.elements[i].type == "text") {

                    field.form.elements[i].select();

                    break;

                }

            }

        }

        return false;

    }

    return true;

}

function reset() {
    let selEle = document.mForm.sel;
    for (let i = 0; i < sel.options.length; i++) {
        selEle.options[i] = null;
        selEle.options.length = 0;
    }
    sub1 = 0;
var num1 = [[0], [0],[0]];
}