window.onload = function() {
  var oShow = document.querySelector('#show');
  var oInput= document.querySelector('input');
  var oLin = document.querySelector('#li');
  var oRin = document.querySelector('#ri');
  var oLout = document.querySelector('#lo');
  var oRout = document.querySelector('#ro');

  oLin.onclick = function() {
    if (getInput()) {
      if (oShow.childElementCount) {
        oShow.appendChild(newdiv(getInput()));
      } else {
        oShow.insertBefore(newdiv(getInput()),oShow.firstElementChild);
      }
    }
  };

  oRin.onclick = function() {
    if (getInput()) {
      oShow.appendChild(newdiv(getInput()));
    }
  };

  oLout.onclick = function() {
    if (oShow.childElementCount) {
      console.log(oShow.firstElementChild.innerText);
      oShow.firstElementChild.remove();
    } else {
      console.log('没有子节点');
    }
  };

  oRout.onclick = function() {
    if (oShow.childElementCount) {
      console.log(oShow.lastElementChild.innerText);
      oShow.lastElementChild.remove();
    } else {
      console.log('没有子节点');
    }
  };

  oShow.onclick = function(ev) {
    ev.target.remove();
  };

  function getInput() {
    return oInput.value.match(/^[0-9,-]\d*$/g);
  }

  function newdiv(str) {
    var oDiv = document.createElement('div');
    oDiv.innerText = Number.parseInt(str).toString();
    oDiv.className = 'box';
    return oDiv;
  }
};
