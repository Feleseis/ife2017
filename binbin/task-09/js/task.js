window.onload = function() {
  var oDiv = document.querySelectorAll('div');
  var oBox = document.querySelector('#box');
  var oBtn = document.querySelector('#btn');
  var oBtn2 = document.querySelector('#btn2');
  var oInput = document.querySelector('#input');
  // var bst = new BST();

  var oSelect = null;

  // for (var i = 0; i < oDiv.length; i++) {
  //   oDiv[i].index = i;
  //   bst.insert(oDiv[i]);
  // }

  oBox.onclick = function(ev) {
    for (var i = 0; i < oDiv.length; i++) {
      oDiv[i].removeAttribute('class');
    }
    oSelect = ev.target;
    oSelect.className = 'select';
    // console.log(oSelect);
  };

  oBtn.onclick = function() {
    // console.log(oSelect.parentNode);
    // oSelect.parentNode.removeChild(oSelect);


    var oTemp = oSelect.querySelectorAll('.select > div');
    for (var i = 0; i < oTemp.length; i++) {
       oSelect.parentNode.insertBefore(oTemp[i], oSelect);
    }
    oSelect.parentNode.removeChild(oSelect);

    for (var i = 0; i < oDiv.length; i++) {
      oDiv[i].removeAttribute('class');
    }
    // console.log(oSelect.querySelectorAll('*'));
    // var oTemp = oSelect.querySelectorAll('div');
    // console.log(oSelect);
    // for (var i = 0; i < oTemp.length; i++) {
    //
    //   oSelect.removeChild(oTemp[i]);
    // }
    // oSelect.removeChild(oTemp);
    // oSelect.parentNode.appendChild(oTemp);
    // oSelect.removeAttribute('class');
    // console.log(oSelect);
    //
    // bst.remove(oSelect);
  };

  oBtn2.onclick = function() {
    for (var i = 0; i < oDiv.length; i++) {
      oDiv[i].removeAttribute('class');
    }
    var oNew = document.createElement('div');
    // console.log(oSelect.removeAttribute('class'));
    // console.log(oSelect);
    // bst.inOrder(bst._root);
    // bst.remove(oSelect);
    // bst.inOrder(bst._root);
    oNew.innerText = oInput.value;
    if (oSelect) {
      oSelect.appendChild(oNew);
    }
  };
};
