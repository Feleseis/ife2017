function getStyle(obj, attr) {
  return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}

function transition(obj, attr, iTarget, fn) {
  clearInterval(obj.timer);
  var iCurrent = 0;
  obj.timer = setInterval(function() {
    if (attr == 'opacity') {
      iCurrent = Math.round(Number.parseFloat(getStyle(obj, attr))*100);
    } else if (attr == 'transform') {
      var sDeg = obj.style['transform'].match(/(\-|\+)?\d+/)[0];
      iCurrent = Number.parseInt(sDeg);
      console.log(getStyle(obj, attr));
      // console.log(obj.style['transform'].match(/(\-|\+)?\d+/));
      // console.log(obj.style['transform'].match(/(\-|\+)?\d+/)[0]);
    } else {
      iCurrent = Number.parseInt(getStyle(obj, attr));
    }
    // var iSpeed = (iTarget - iCurrent) / 6;
    // iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    if (iTarget < iCurrent) {
      iSpeed = -5;
    } else {
      iSpeed = 5;
    }
    if (iCurrent == iTarget) {
      clearInterval(obj.timer);
    } else {
      if (attr == 'opacity') {
        // obj.style.filter = 'alpha(opacity:'+ (iCurrent + iSpeed) + ')';
        obj.style.opacity = (iCurrent + iSpeed) / 100;
      } else if (attr == 'transform') {
        obj.style.transform = 'rotate(' + iCurrent + iSpeed + 'deg)';
        // console.log(attr);
      } else {
        obj.style[attr] = iCurrent + iSpeed + 'px';
      }
    }
  },30);
  if (typeof(fn) == 'function') {
    fn();
  }
}
