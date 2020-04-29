dragula([
  document.getElementById("to-do"),
  document.getElementById("doing"),
  document.getElementById("done"),
  document.getElementById("trash")]);

function addTask(url) {
  document.getElementById("to-do").innerHTML +=
    "<li class='task'><img src="+url+"/></li>";
}

function emptyTrash() {
  document.getElementById("trash").innerHTML = "";
}
