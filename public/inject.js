const html = `<style>.parallax { display: none; position: fixed; bottom: 25px; right: 25px; width: 60px; height: 60px; border-radius: 50%; box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px rgba(0,0,0,0.19) }</style><div id="parallax-window" class="parallax"><iframe src="./panel.html" style="border-width: 0px"></iframe>`
var div = document.createElement("div");
div.innerHTML = html;
document.body.appendChild(div);

window.addEventListener("message", handleMessage, false);

function handleMessage(event) {
  var returnMessage = {
    type: event.data.type,
    data: null
  };
  switch(event.data.type) {
    case "url":
      returnMessage.data = document.location.href;
      break;
    case "display":
      display();
      break;
    case "open":
      open();
      break;
    case "close":
      close();
      break;
    case "pid":
      returnMessage.data = sessionStorage.getItem("parallax-pid");
      break;
    case "guide_view":
      var ids = JSON.parse(sessionStorage.getItem("parallax-gid"));
      if (ids !== null) {
        ids.push(event.data.guideID);
      } else {
        ids = [event.data.guideID];
      }
      sessionStorage.setItem("parallax-gid", JSON.stringify(ids));
      break;
  }
  event.source.postMessage(returnMessage, event.origin);
}

function display() {
  var div = document.getElementById("parallax-window");
  div.style.display = "block";
}

function open() {
  var div = document.getElementById("parallax-window");
  div.style.overflow = "hidden";
  div.style.border = "1px solid lightgray";
  div.style.height = "60%";
  div.style.width = "27%";
  div.style.maxWidth = "400px";
  div.style.right = "25px";
  div.style.bottom = "50px";
  div.style.borderRadius = "10px";
  div.style.background = "#FFFFFF";
  div.style.border = "0";
  div = div.children[0];
  div.style.height = "100%";
  div.style.width = "100%";
}

function close() {
  var div = document.getElementById("parallax-window");
  div.style.width = "60px";
  div.style.height = "60px";
  div.style.bottom = "25px";
  div.style.right = "25px";
  div.style.borderRadius = "50%";
  div.style.background = "transparent";
}
