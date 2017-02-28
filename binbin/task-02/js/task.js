window.onload = function() {
  var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 60],
    ["广州", 70],
    ["成都", 80],
    ["西安", 100]
  ];

  var newData = aqiData.sort(function(a, b) {
    return -(a[1] - b[1]);
  }).filter(function(a) {
    return a[1] >= 60;
  });

  var oList = document.getElementById('aqi-list');
  var html = '';
  !function() {
    var index = 1;
    for (var i = 0; i < newData.length; i++) {
      html += '<li>第' + index + '名：' + newData[i][0] + '，' + newData[i][1] + '</li>';
      index++;
    }
  }();

  oList.innerHTML = html;
};
