function showhide(id) {
  var bspace = document.getElementById("div-" + id);
  var button = document.getElementById("a-" + id);
  if(bspace.style.display != "none") {
    bspace.style.display = "none";
    button.innerHTML = "+";
  } else {
    bspace.style.display = "block";
    button.innerHTML = "-";
  }
}

function collapseall(mode) {
  var items = [ 'Summary', 'ExecCondition', 'Findings', 'SuccessCondition', 'KeyEvents', 'HostDetails', 'SourceDetails', 'DestinationDetails', 'ADDetails', 'Packets', 'Notes' ];
  for(i = 0; i < items.length; i++) {
    elem_div = document.getElementById("div-" + items[i]);
    elem_a = document.getElementById("a-" + items[i]);
    if((elem_div == null) || (elem_a == null)) continue;
    if(mode == 's') {
      elem_div.style.display = "block";
      elem_a.innerHTML = "-";
    } else if(mode == 'h') {
      elem_div.style.display = "none";
      elem_a.innerHTML = "+";
    }
  }
}
