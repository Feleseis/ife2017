function Node(data, left, right) {
  this._data = data;
  this._count = 1;
  this._left = left;
  this._right = right;
  this.show = show;
}
function show() {
  // console.log(this._data);
  // this._data.className = 'select';
  return this._data;
}



function BST() {
  this._root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMinData = getMinData;
  this.getMaxData = getMaxData;
  this.findData = findData;
  this.remove = remove;
  this.update = update;
}
function insert(data) {
  var nNode = new Node(data, null, null);
  if (this._root == null) {
    this._root = nNode;
  } else {
    var nCurrent = this._root;
    var nParent;
    while (true) {
      nParent = nCurrent;
      if (data < nCurrent._data) {
        nCurrent = nCurrent._left;
        if (nCurrent == null) {
          nParent._left = nNode;
          break;
        }
      } else {
        nCurrent = nCurrent._right;
        if (nCurrent == null) {
          nParent._right = nNode;
          break;
        }
      }
    }
  }
}


function inOrder(node) {
  if (!(node == null)) {
    inOrder(node._left);
    console.log(node.show() + ' ');
    inOrder(node._right);
  }
}
function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + ' ');
    preOrder(node._left);
    preOrder(node._right);
  }
}
// function postOrder(node) {
//   if (!(node == null)) {
//     postOrder(node._left);
//     postOrder(node._right);
//     console.log(node.show() + ' ');
//     setTimeout(node.show,1000);
//   }
// }
function postOrder(node) {
  if (!(node == null)) {
    node.show().className = '';    
    setTimeout(function() {
      postOrder(node._left);
      postOrder(node._right);
      node.show().className = 'select';
    },1000);
  }
}
function getMinData() {
  var nCurrent = this._root;
  while (!(nCurrent._left == null)) {
    nCurrent = nCurrent._left;
  }
  return nCurrent._data;
}
function getMaxData() {
  var nCurrent = this._root;
  while (!(nCurrent._right == null)) {
    nCurrent = nCurrent._right;
  }
  return nCurrent._data;
}
function minNode(node) {
  if (node == null) {
    return null;
  }
  while (node._left !== null) {
    node = node._left;
  }
  return node;
}
function maxNode(node) {
  if (node == null) {
    return null;
  }
  while (node._right !== null) {
    node = node._right;
  }
  return node;
}
function findData(data) {
  var nCurrent = this._root;
  while (nCurrent != null) {
    if (nCurrent._data == data) {
      return nCurrent;
    } else if (data < nCurrent._data) {
      nCurrent = nCurrent._left;
    } else {
      nCurrent = nCurrent._right;
    }
  }
  return null;
}
function remove(data) {
  this._root = removeNode(this._root, data);
}
function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node._data) {
    //没有子节点的节点
    if (node._left == null && node._right == null) {
      return null;
    }
    //没有左子节点的节点
    if (node._left == null) {
      return node._right;
    }
    //没有右子节点的节点
    if (node._right == null) {
      return node._left;
    }
    //有两个子节点的节点
    var nTempNode = minNode(node._right);
    node._data = nTempNode._data;
    node._right = removeNode(node._right, nTempNode._data);
    return node;
  } else if (data < node._data) {
    node._left = removeNode(node._left, data);
    return node;
  } else {
    node._right = removeNode(node._right, data);
    return node;
  }
}
function update(data) {
  var nGrade = this.findData(data);
  nGrade._count++;
  return nGrade;
}
