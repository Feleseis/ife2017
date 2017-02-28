window.onload = function() {
  var oResort = document.getElementById('resort');
  var oSource = document.getElementById('source');
  var oSortBtn = document.getElementById('sort-btn');

  var aqiData = [];
  !function() {
    var aLi = oSource.getElementsByTagName('li');
    var ilength = aLi.length;
    for (var i = 0; i < ilength; i++) {
      aqiData.push(aLi[i].innerText.split('：'));
    }
  }();

  var newData = aqiData.sort(function(a, b) {
    return -(a[1] - b[1]);
  });

  oSortBtn.onclick = function() {
    var html = '';
    !function() {
      var index = 1;
      for (var i = 0; i < newData.length; i++) {
        html += '<li>第' + index + '名：' + newData[i][0] + '，' + newData[i][1] + '</li>';
        index++;
      }
    }();
    resort.innerHTML = html;
  }
};
