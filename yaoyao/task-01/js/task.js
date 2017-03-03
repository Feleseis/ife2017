window.onload = function() {
  var oInput = document.querySelector('input');
  var oButton = document.querySelector('button');
  var oInfo = document.querySelector('span');

  oButton.onclick = function() {
    var sInput = oInput.value;

    if (sInput) {
      // var iLength = sInput.match(/[\u0391-\uFFE5]/g);
      // var iLength = sInput.match(/\w/g);
      var iLength = 0;
      if (sInput.match(/[\u0391-\uFFE5]/g)) {
        iLength = sInput.match(/[\u0391-\uFFE5]/g).length * 2;
      }
      if (sInput.match(/\w/g)) {
        iLength += sInput.match(/\w/g).length;
      }
      // var iLength = sInput.match(/[\u0391-\uFFE5]/g).length * 2 + sInput.match(/\w/g).length;
      if (iLength >=4 && iLength <= 16) {
        oInfo.innerText = '格式正确';
        oInfo.style.color = '#0f0';
        oInput.style.border = '1px solid #0f0';

      } else {
        oInfo.innerText = '字符长度不正确';
        oInfo.style.color = '#f00';
        oInput.style.border = '1px solid #f00';

      }
    } else {
      oInfo.innerText = '姓名不能为空';
      oInfo.style.color = '#f00';
      oInput.style.border = '1px solid #f00';
    }
  };
};
