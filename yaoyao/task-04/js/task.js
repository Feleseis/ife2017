window.onload = function() {
  var oBtns = document.querySelector('.btns');
  var oBox = document.querySelector('#box');
  var oBtnGo = document.querySelector('#go');
  var iDge = 0;
  var iMarginTop = 0;
  var iMarginLeft = 0;
  oBox.style.transform = 'rotate(0deg)';

  oBtns.onclick = function(ev) {
    switch (ev.target.id) {
      case 'go':
        if (getNEWS() == 1) {
          moveUp();
        } else if (getNEWS() == 3) {
          moveDown();
        } else if (getNEWS() == 4) {
          moveLeft();
        } else if (getNEWS() == 2) {
          moveRight();
        }
        break;
      case 'tl':
        turnBox(-90);
        break;
      case 'tr':
        turnBox(90);
        break;
      case 'tb':
        turnBox(180);
        break;
    }
  };


  function moveUp() {
    if (iMarginTop > -250) {
      iMarginTop += -50;
      startTranslate(oBox, 'marginTop', iMarginTop);
    }
  }

  function moveDown() {
    if (iMarginTop < 200) {
      iMarginTop += 50;
      startTranslate(oBox, 'marginTop', iMarginTop);
    }
  }

  function moveRight() {
    if (iMarginLeft < 200) {
      iMarginLeft += 50;
      startTranslate(oBox, 'marginLeft', iMarginLeft);
    }
  }

  function moveLeft() {
    if (iMarginLeft > -250) {
      iMarginLeft += -50;
      startTranslate(oBox, 'marginLeft', iMarginLeft);
    }
  }

  function getNEWS() {
    if (iDge % 360 == 0) {
      return 1;
    }
    if (iDge % 360 == 90 || iDge % 360 == -270) {
      return 2;
    }
    if (iDge % 360 == 180 || iDge % 360 == -180) {
      return 3;
    }
    if (iDge % 360 == 270 || iDge % 360 == -90) {
      return 4;
    }
  }

  function turnBox(deg) {
    iDge += deg;
    oBox.style['transition'] = 'all 0.5s ease 0s';
    oBox.style.transform = 'rotate(' + iDge + 'deg)';
  }

  function startTranslate(obj, attr, iTarget) {
    oBox.timer = null;
    oBox.style['transition'] = 'all 0s ease 0s';
    transition(obj, attr, iTarget, null);
  }
};
