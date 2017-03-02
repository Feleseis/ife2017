window.onload = function() {
  var oDiv = document.querySelectorAll('div');
  var oBtn = document.querySelector('#btn');
  var bst = new BST();
  for (var i = 0; i < oDiv.length; i++) {
    bst.insert(oDiv[i]);
  }
  oBtn.onclick = function() {
    bst.postOrder(bst._root);
  };
};
