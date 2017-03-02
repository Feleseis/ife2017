window.onload = function() {
  var oDiv = document.querySelectorAll('div');
  var oBtn = document.querySelector('#btn');
  var oBtn2 = document.querySelector('#btn2');
  var bst = new BST();
  for (var i = 0; i < oDiv.length; i++) {
    bst.insert(oDiv[i]);
    // bst.insert(i);
  }
  oBtn.onclick = function() {
    bst.postOrder(bst._root);
  };

  oBtn2.onclick = function() {
    var sInput = document.querySelector('#input').value;
    bst.postOrderFind(bst._root, sInput);
  };
};
