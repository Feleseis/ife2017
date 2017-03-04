window.onload = function() {
  var oBody = document.querySelector('body');
  var oBtn = document.querySelector('#btn');
  // var oTable = document.querySelector('table');

  var oData = {
    "title" : [["name", 0], ["chinese", 1], ["math", 0], ["english", 1], ["total", 1]],
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

  // oTable.onclick = function(ev) {
  //
  // };

  oBtn.onclick = function() {
    oBody.appendChild(showTable(oData, oStyle));
  };
};

function Table(data, style) {
  this._data = data;
  this._Style = style;
  this.showTable = showTable;
}

function showTable(jData, jStyle) {
  var oTable = addNode('table', jStyle);
  var oThead = addNode('thead', jStyle);
  var oTbody = addNode('tbody', jStyle);
  oTable.appendChild(oThead);
  for (var item in jData) {
    if (item == 'title') {
      var oTheadTr = addNode('tr', jStyle);
      oThead.appendChild(oTheadTr);
      addValue(oTheadTr, 'th', jData[item], jStyle);
      oTable.appendChild(oTbody);
    } else {
      var oTbodyTr = addNode('tr', jStyle);
      oTbody.appendChild(oTbodyTr);
      addValue(oTbodyTr, 'td', jData[item], jStyle);
    }
  }
  return oTable;
}

function addValue(oParent, sTag, aData, jStyle) {
  for (var i = 0; i < aData.length; i++) {
    var oChild = addNode(sTag, jStyle);
    if (sTag == 'th') {
      oChild.innerText = aData[i][0];
      console.log(aData[i][1]);
      if (aData[i][1]) {
        oChild.appendChild(addSort());
      }
    } else {
      oChild.innerText = aData[i];
    }
    oParent.appendChild(oChild);
  }
}

function addNode(sTagName, jStyle) {
  var oNode = document.createElement(sTagName);
  for (var title in jStyle) {
    if (sTagName == title) {
      for (var i = 0; i < jStyle[title].length; i++) {
        oNode.style[jStyle[title][i][0]] = jStyle[title][i][1];
      }
    }
  }
  return oNode;
}

function addSort() {
  var oSort = addNode('div', null);
  oSort.style.boxSing = 'border-box';
  oSort.style.display = 'inline-block';
  oSort.style.position = 'absolute';
  oSort.style.right = '0px';
  oSort.style.marginRight = '10px';
  var oSortUp = addNode('div', null);
  oSortUp.className = 'oSortUp';
  oSortUp.style.width = '0px';
  oSortUp.style.height = '0px';
  oSortUp.style.border = '4px solid transparent';
  oSortUp.style.borderBottom = '4px solid #fff';
  var oSortDn = addNode('div', null);
  oSortDn.className = 'oSortDn';
  oSortDn.style.width = '0px';
  oSortDn.style.height = '0px';
  oSortDn.style.border = '4px solid transparent';
  oSortDn.style.borderTop = '4px solid #fff';
  oSortDn.style.marginTop = '3px';
  oSort.appendChild(oSortUp);
  oSort.appendChild(oSortDn);
  return oSort;
}
