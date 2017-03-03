window.onload = function() {
  var oSch = document.querySelector('#sch');
  var oSoc = document.querySelector('#soc');
  var oDiv = document.querySelector('.row');
  var oCity = document.querySelector('#city');
  var oBj = document.querySelector('#bj');
  var oSh = document.querySelector('#sh');
  var oGz = document.querySelector('#gz');
  var oSz = document.querySelector('#sz');

  oCity.onclick = function(ev) {
    switch (ev.target.value) {
      case 'bj':
        oBj.style.display = 'inline-block';
        oSh.style.display = 'none';
        oGz.style.display = 'none';
        oSz.style.display = 'none';
        break;
      case 'bj':
        oBj.style.display = 'inline-block';
        oSh.style.display = 'none';
        oGz.style.display = 'none';
        oSz.style.display = 'none';
        break;
      case 'sh':
        oBj.style.display = 'none';
        oSh.style.display = 'inline-block';
        oGz.style.display = 'none';
        oSz.style.display = 'none';
        break;
      case 'gz':
        oBj.style.display = 'none';
        oSh.style.display = 'none';
        oGz.style.display = 'inline-block';
        oSz.style.display = 'none';
        break;
      case 'sz':
        oBj.style.display = 'none';
        oSh.style.display = 'none';
        oGz.style.display = 'none';
        oSz.style.display = 'inline-block';
        break;
      default:

    }


  };

  oDiv.onclick = function(ev) {
    if (ev.target.value === 'school') {
      oSoc.style.display = 'none';
      oSch.style.display = 'block';
    } else if (ev.target.value === 'social') {
      oSoc.style.display = 'block';
      oSch.style.display = 'none';
    }
  };
};
