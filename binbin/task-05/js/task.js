window.onload = function() {
  var iLimit = 100;
  var iMin = 1;
  var iMax = 500;
  var oShow = document.querySelector('#show');
  var oInput= document.querySelector('input');
  var oLin = document.querySelector('#li');
  var oRin = document.querySelector('#ri');
  var oLout = document.querySelector('#lo');
  var oRout = document.querySelector('#ro');
  var oSort = document.querySelector('#sort');
  var oCount = document.querySelector('#count');

  oSort.onclick = function() {
  //   var aqiData = [];
  //   !function() {
  //     var aDiv = oShow.getElementsByTagName('div');
  //     var ilength = aDiv.length;
  //     for (var i = 0; i < ilength; i++) {
  //       aqiData.push(Number.parseInt(aDiv[i].style.height));
  //     }
  //   }();
    var aDiv = oShow.getElementsByTagName('div');
    var ilength = aDiv.length;
    var timer = null;
    console.time('a');
    for (var i = 0; i < ilength; i++) {
      for (var j = i + 1; j < ilength; j++) {
        var iPrev = Number.parseInt(aDiv[i].style.height);
        var iNext = Number.parseInt(aDiv[j].style.height);
        if (iPrev > iNext) {
          oShow.insertBefore(aDiv[j],aDiv[i]);
        }
      }
    }
    console.timeEnd('a');
  };

  oLin.onclick = function() {
    if (getInput()) {
      if (oShow.childElementCount) {
        if (oShow.childElementCount <= iLimit) {
          if (newdiv(getInput())) {
            oShow.insertBefore(newdiv(getInput()),oShow.firstElementChild);
            oInput.value = randomNumber(iMin, iMax);
            oCount.innerText = oShow.getElementsByTagName('div').length;
          }
        } else {
          console.log('元素超过' + iLimit);
        }
      } else {
        oShow.appendChild(newdiv(getInput()));
        oInput.value = randomNumber(iMin, iMax);
        oCount.innerText = oShow.getElementsByTagName('div').length;
      }
    }
  };

  oRin.onclick = function() {
    if (getInput()) {
      if (newdiv(getInput())) {
        oShow.appendChild(newdiv(getInput()));
        oInput.value = randomNumber(iMin, iMax);
        oCount.innerText = oShow.getElementsByTagName('div').length;
      }
    }
  };

  oLout.onclick = function() {
    if (oShow.childElementCount) {
      console.log(Number.parseInt(oShow.firstElementChild.style.height));
      oShow.firstElementChild.remove();
      oCount.innerText = oShow.getElementsByTagName('div').length;
    } else {
      console.log('没有子节点');
    }
  };

  oRout.onclick = function() {
    if (oShow.childElementCount) {
      console.log(Number.parseInt(oShow.lastElementChild.style.height));
      oShow.lastElementChild.remove();
      oCount.innerText = oShow.getElementsByTagName('div').length;
    } else {
      console.log('没有子节点');
    }
  };

  oShow.onclick = function(ev) {
    if (ev.target !== oShow) {
      ev.target.remove()
      oCount.innerText = oShow.getElementsByTagName('div').length;
    }
  };



  function randomNumber(min, max) {
    return Math.round(Math.random()*(max - min) + min);
  }

  function getInput() {
    return oInput.value.match(/^[0-9,-]\d*$/g);
  }

  function newdiv(str) {
    var oDiv = document.createElement('div');
    // oDiv.innerText = Number.parseInt(str).toString();
    if (Number.parseInt(str) >= iMin && Number.parseInt(str) <= iMax) {
      oDiv.className = 'box';
      oDiv.style.height = Number.parseInt(str).toString() + 'px';
      return oDiv;
    } else {
      console.log('数字超出范围');
    }
  }
};
