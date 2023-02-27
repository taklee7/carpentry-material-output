var num1 = [[0], [0],[0]];
var sub1 = 0;

const inch = 1;
const cm = 2.54;

function addRow() {
    var $width = document.getElementById("width");
    var $height = document.getElementById("height");
    var $room = document.getElementById("room");
    // $table element 찾기

    if ($width.value == '' || $height.value == '') { alert('길이 및 수량을 입력 해주세여~') }
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

        const pyeong = Number($width.value * 0.001 * Number($height.value * 0.001));
        var gypsum = pyeong / 1.62;
        var gagjae = (gypsum * 3).toFixed(0);
        var gagjae1 = pyeong.toFixed(1) * 5 -1 * 1.2;

        num1[0].push(Number(pyeong*0.3));
        num1[1].push(Math.ceil(gypsum));
        num1[2].push(gagjae);

        // Cell에 텍스트 추가
        newCell1.innerText = $room.value;
        newCell2.innerText = (pyeong*0.3).toFixed(1);
        newCell4.innerText = num1[1].at(-1);
       
        
        if (p.value == "1") {newCell3.innerText = p.text; newCell5.innerText = num1[2].at(-1);}
        if (p.value == "2") {newCell3.innerText = p.text; newCell5.innerText = gagjae1;}

        $width.value = '';
        $height.value = '';
    }
}
function deleteRow(rownum) {
    if (num1[0].length > 0) {
        // $table element 찾기
        const $table = document.getElementById('fruits');

        // 행(Row) 삭제
        const newRow = $table.deleteRow(rownum);

        num1[0].pop();
        num1[1].pop();
    }
}
function sub() {
     if (num1[0].length == 1) { alert('각재재단 할 목록을 추가 해주세여~') }
    else {
        let $sum_pyeong = document.getElementById('sum-pyeong');
        let $sum_gypsum = document.getElementById('sum-gypsum');
        let $sum_gagjae = document.getElementById('sum-gagjae');

        
        const $table = document.getElementById('fruits');
        
        let sum = 0;
        let sum_gypsum = 0;
        let sum_gagjae = 0;

for (let i = 1; i < num1[0].length; i++) {
    sum += num1[0][i];
    sum_gypsum+= Number($table.rows[i].cells[3].innerText);
    sum_gagjae+= Number($table.rows[i].cells[4].innerText);
}
$sum_pyeong.innerHTML=sum.toFixed(1)+'평';
$sum_gypsum.innerHTML=sum_gypsum+'장';
$sum_gagjae.innerHTML=sum_gagjae+'개';
    };
        
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