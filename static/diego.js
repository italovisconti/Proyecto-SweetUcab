var select = document.getElementById("selectNumber");
var options = ["mexico", "usa", "japon", "holanda", "venezuela"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}
