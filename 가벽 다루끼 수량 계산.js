var sub1 = 0;
var inch = 1;
var cm = 2.54;

function addRow() {
    const $width = document.getElementById("width");
    const $height = document.getElementById("height");
    const $room = document.getElementById("room");
    // $table element 찾기

    if ($width.value == '' || $height.value == '') { alert('가벽 규격을 입력 해주세여~') }
    else {
        let value_str = document.getElementById("inSelect");
        var p = value_str.options[value_str.selectedIndex];

        // $table element 찾기
        var $table = document.getElementById('fruits');

        // 새 행(Row) 추가 (테이블 중간에)
        var newRow = $table.insertRow();

        // 새 행(Row)에 Cell 추가
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        var newCell4 = newRow.insertCell(3);
        var newCell5 = newRow.insertCell(4);
        var newCell6 = newRow.insertCell(5);

        var pyeong = Number($width.value * 0.001 * Number($height.value * 0.001));
        var pyeong1 = (pyeong*0.3).toFixed(1);
        var gypsum = Number((pyeong1*2*1.2).toFixed(0))*p.value;
        var plywood = Number((pyeong1*0.9*1.2).toFixed(0));
        var gagjae = Number((pyeong1*4*1.2)).toFixed(0);

       // Cell에 텍스트 추가
       newCell1.innerText = $room.value;
       newCell2.innerText = (pyeong*0.3).toFixed(1);
       newCell3.innerText = p.text;
       newCell4.innerText = gypsum;

        if (p.value == "1") {
       newCell5.innerText = plywood;
        
            };
            if (p.value == "2") {
                newCell5.innerHTML=0;
                };

      newCell6.innerText = gagjae;
        // if (p.value == "2") {newCell3.innerText = p.text; newCell5.innerText = gagjae1;}
        $width.value = '';
        $height.value = '';
    }
}
function deleteRow(rownum) {
    if (num1[0].length > 1) {
        // $table element 찾기
        var $table = document.getElementById('fruits');

        // 행(Row) 삭제
        var newRow = $table.deleteRow(rownum);
        for (let i = 0; i < num1.length; i++) {

        num1[i].pop();
    }
}
}
function sub() {
    var $rows = document.getElementById("fruits").getElementsByTagName("tr");
    if ($rows.length == 0) { alert('목록을 추가 해주세여~') }
    else {
        const $sum_pyeong = document.getElementById('sum-pyeong');
        const $sum_gypsum = document.getElementById('sum-gypsum');
        const $sum_plywood = document.getElementById('sum-plywood');
        const $sum_gagjae = document.getElementById('sum-gagjae');

        let sum = 0;
        let sum_gypsum = 0;
        let sum_plywood = 0;
        let sum_gagjae = 0;

for (let i = 0; i < $rows.length; i++) {
    sum += Number($rows[i].cells[1].innerText);
    sum_gypsum+= Number($rows[i].cells[3].innerText);
    sum_plywood+= Number($rows[i].cells[4].innerText);
    sum_gagjae+= Number($rows[i].cells[5].innerText);
};

let sum_gagjae1 = Math.ceil(sum_gagjae/12);

$sum_pyeong.innerHTML=sum+'평';
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
}