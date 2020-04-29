dragula([
  document.getElementById("to-do"),
  document.getElementById("doing"),
  document.getElementById("done"),
  document.getElementById("trash")
]).on("drag", function(el) {
    el.className.replace("ex-moved", "");
  })
  .on("drop", function(el) {
    el.className += "ex-moved";
  })
  .on("over", function(el, container) {
    container.className += "ex-over";
  })
  .on("out", function(el, container) {
    container.className.replace("ex-over", "");
  });


function addTask(url) {
  document.getElementById("to-do").innerHTML +=
    "<li class='task'><img src="+url+"/></li>";
}

function emptyTrash() {
  document.getElementById("trash").innerHTML = "";
}
