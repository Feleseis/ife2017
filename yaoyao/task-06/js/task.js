window.onload = function() {
  var oBody = document.querySelector('body');
  var oShow = document.querySelector('#show');
  // var oAffirm = document.querySelector('#affirm');
  // var oCancel = document.querySelector('#cancel');
  var oOverlay = document.querySelector('.overlay');
  var oMasking = document.querySelector('#masking');

  oBody.onclick = function(ev) {
    console.log(ev.target);
    switch (ev.target.id) {
      case 'show':
        oMasking.style.display = 'block';
        oOverlay.style.display = 'block';
        break;
      case 'masking':
      case 'affirm':
      case 'cancel':
        oMasking.style.display = '';
        oOverlay.style.display = '';
        break;
      default:
        break;
    }
  };
};
