dragula([
  document.getElementById("trier"),
  document.getElementById("excellent"),
  document.getElementById("tbon"),
  document.getElementById("cool"),
  document.getElementById("bof"),
  document.getElementById("trash")]);

function addTask(url) {
  document.getElementById("trier").innerHTML +=
    "<li class='task'><img src="+url+"/></li>";
}

function emptyTrash() {
  document.getElementById("trash").innerHTML = "";
}
