window.onload = function() {
  var oForm = document.querySelector('form');
  var oUser = document.querySelector('#user');
  var oPwd = document.querySelector('#pwd');
  var oPwd2 = document.querySelector('#pwd2');
  var oEmail = document.querySelector('#email');
  var oPhone = document.querySelector('#phone');
  var oBtn = document.querySelector('#btn');
  var aInput = document.querySelectorAll('input');

  for (var i = 0; i < aInput.length; i++) {
    aInput[i].check = false;
    aInput[i].onfocus	= function(ev) {
      var oTarget = ev.target;
      if (oTarget.nodeName === 'INPUT') {
        showInfo(oTarget.parentNode.querySelector('span'));
        oTarget.onblur = function() {
          check(this);
        };
        oTarget.oninput = function() {
          check(this);
        };
      }
    };
  }

  oBtn.onclick = function() {
    var bWrong = false;
    for (var i = 0; i < aInput.length; i++) {
      if (!aInput[i].check) {
        bWrong = true;
      }
    }
    if (bWrong) {
      alert('输入有误');
    }
  };

  function check(obj) {
    switch (obj.id) {
      case 'user':
        var rUser = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        if (obj.value) {
          if (rUser.test(obj.value)) {
            checkInfo(obj, 1, '用户名可用');
            obj.check = true;
          } else {
            checkInfo(obj, 0, '用户名格式不正确');
          }
        } else {
          checkInfo(obj, 0, '不能为空');
        }
        break;
      case 'pwd':
        var rPwd = /^[a-zA-Z]\w{5,17}$/;
        if (obj.value) {
          if (rPwd.test(obj.value)) {
            checkInfo(obj, 1, '密码可用');
            obj.check = true;
          } else {
            checkInfo(obj, 0, '密码格式不正确');
          }
        } else {
          checkInfo(obj, 0, '不能为空');
        }
        break;
      case 'pwd2':
        if (obj.value) {
          if (obj.value === oPwd.value) {
            checkInfo(obj, 1, '密码可用');
            obj.check = true;
          } else {
            checkInfo(obj, 0, '密码不一致');
          }
        } else {
          checkInfo(obj, 0, '不能为空');
        }
        break;
      case 'email':
        var rEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (obj.value) {
          if (rEmail.test(obj.value)) {
            checkInfo(obj, 1, '邮箱可用');
            obj.check = true;
          } else {
            checkInfo(obj, 0, '邮箱格式不正确');
          }
        } else {
          checkInfo(obj, 0, '不能为空');
        }
        break;
      case 'phone':
        var rphone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (obj.value) {
          if (rphone.test(obj.value)) {
            checkInfo(obj, 1, '手机号可用');
            obj.check = true;
          } else {
            checkInfo(obj, 0, '手机号格式不正确');
          }
        } else {
          checkInfo(obj, 0, '不能为空');
        }
        break;
      default:

    }
  }

  function checkInfo(obj, index, str) {
    if (index === 1) {
      obj.style.border = '1px solid #0f0';
      obj.parentNode.querySelector('span').innerText = str;
      obj.parentNode.querySelector('span').style.color = "green";
    } else if (index === 0) {
      obj.style.border = '1px solid #f00';
      obj.parentNode.querySelector('span').innerText = str;
      obj.parentNode.querySelector('span').style.color = "red";
    }
  }

  function showInfo(obj) {
    obj.style.display = 'block';
  }

};
