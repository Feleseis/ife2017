window.onload = function() {
  var oInput = document.getElementById('aqi-input');
  var oButton = document.getElementById('button');
  var oDisplay = document.getElementById('aqi-display');

  oButton.onclick = function() {
    if (oInput.value !== "") {
      oDisplay.innerHTML = oInput.value;
    }
  };
};
