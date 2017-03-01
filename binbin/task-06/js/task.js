window.onload = function() {
  var oTextArea = document.querySelector('#text-area');
  var oBtn1 = document.querySelector('#btn-1');
  var oBtn2 = document.querySelector('#btn-2');
  var oTextFind = document.querySelector('#text-find');
  var oShow = document.querySelector('#show');

  var aStr = [];

  oBtn1.onclick = function() {
    var sHtml = '';
    aStr = oTextArea.value.split(' ');
    for (var i = 0; i < aStr.length; i++) {
      sHtml += '<li>' + aStr[i] + '</li>';
    }
    oShow.innerHTML = sHtml;
  };

  oBtn2.onclick = function() {


    // var sHtml = '';
    // for (var i = 0; i < aStr.length; i++) {
    //   if (aStr[i].indexOf(oTextFind.value) >= 0) {
    //     sHtml += '<li class="select">' + aStr[i] + '</li>';
    //   } else {
    //     sHtml += '<li>' + aStr[i] + '</li>';
    //   }
    // }
    // oShow.innerHTML = sHtml;

    var aLi = oShow.querySelectorAll('li');
    console.log(aLi);
    for (var i = 0; i < aLi.length; i++) {
      if (aLi[i].innerText.indexOf(oTextFind.value) >= 0) {
        aLi[i].className = 'select';
      }
    }
    // console.log(oTextFind.value);
  }
};
