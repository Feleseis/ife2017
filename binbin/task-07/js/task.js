window.onload = function() {
  var oDiv = document.querySelectorAll('div');
  var bst = new BST();
  for (var i = 0; i < oDiv.length; i++) {
    bst.insert(oDiv[i]);
  }
  bst.postOrder(bst._root);
};
