window.onload = function() {
  var oBody = document.querySelector('body');
  var oBtn = document.querySelector('#btn');
  // var oTable = document.querySelector('table');

  var oData = {
    "title" : [["name", 0], ["chinese", 1], ["math", 1], ["english", 1], ["total", 1]],
    "item-1" : ["xiaoming", "80", "90", "70", "240"],
    "item-1" : ["xiaoming", "80", "90", "70", "240"],
    "item-2" : ["xiaohong", "90", "60", "90", "240"],
    "item-3" : ["xiaoliang", "60", "100", "70", "230"],
    "item-4" : ["xiaozhang", "40", "10", "80", "130"],
    "item-5" : ["xiaogang", "70", "80", "100", "250"]
  };

  var oStyle = {
    'table' : [['width', '800px'], ['border-collapse', 'collapse']],
    'thead' : [['color', '#fff'], ['background', '#272822']],
    'td' : [['text-align', 'center'], ['border', '1px solid #ccc']],
    'th' : [['position', 'relative'], ['border', '1px solid #ccc']],
  };

  var oTable = new Table(oData, oStyle);


  oBtn.onclick = function() {
    var obj = oTable.createTable();
    obj.addEventListener('click', oTable.sort);
    oBody.appendChild(obj);
  };
};
