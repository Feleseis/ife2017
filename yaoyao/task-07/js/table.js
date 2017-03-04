
function Table(data, style) {
  this._data = data;
  this._Style = style;
  this.createTable = createTable;
  this.sort = sort;
}

function sort(ev) {
  var sortMethod = undefined;
  var sTitle = undefined;
  var iIndex = undefined;

  if (ev.target.className == 'oSortUp') {
    sortMethod = 'up';
    sTitle = ev.target.parentNode.parentNode.innerText;
  } else if (ev.target.className == 'oSortDn') {
    sortMethod = 'dn';
    sTitle = ev.target.parentNode.parentNode.innerText;
  }
  var aTh = ev.target.parentNode.parentNode.parentNode.querySelectorAll('th');
  for (var i = 0; i < aTh.length; i++) {
    if (aTh[i].innerText == sTitle) {
      iIndex = i;
    }
  }

  var aTr = ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('tbody tr');
  var oTb = ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('tbody');
  for (var i = 0; i < aTr.length; i++) {
    for (var j = i + 1; j < aTr.length; j++) {
      if (iIndex !== undefined) {
        var iPrev = Number.parseInt(aTr[i].querySelectorAll('td')[iIndex].innerText);
        var iLast = Number.parseInt(aTr[j].querySelectorAll('td')[iIndex].innerText);
        if (iLast > iPrev) {
          if (sortMethod == 'up') {
            oTb.appendChild(aTr[j]);
          } else if (sortMethod == 'dn') {
            oTb.appendChild(aTr[i]);
          }
        } else if (iLast < iPrev) {
          if (sortMethod == 'up') {
            oTb.appendChild(aTr[i]);
          } else if (sortMethod == 'dn') {
            oTb.appendChild(aTr[j]);
          }
        }
      }
    }
  }
}

function createTable() {
  var oTable = addNode('table', this._Style);
  var oThead = addNode('thead', this._Style);
  var oTbody = addNode('tbody', this._Style);
  oTable.appendChild(oThead);
  for (var item in this._data) {
    if (item == 'title') {
      var oTheadTr = addNode('tr', this._Style);
      oThead.appendChild(oTheadTr);
      addValue(oTheadTr, 'th', this._data[item], this._Style);
      oTable.appendChild(oTbody);
    } else {
      var oTbodyTr = addNode('tr', this._Style);
      oTbody.appendChild(oTbodyTr);
      addValue(oTbodyTr, 'td', this._data[item], this._Style);
    }
  }
  return oTable;
}

function addValue(oParent, sTag, aData, jStyle) {
  for (var i = 0; i < aData.length; i++) {
    var oChild = addNode(sTag, jStyle);
    if (sTag == 'th') {
      oChild.innerText = aData[i][0];
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
