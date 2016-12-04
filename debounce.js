
function debounce(cb, wait) {
  let timeout;
  return function () {
    let context = this, args = ([]).slice.call(arguments);
    
    let callBack = function() {
      clearTimeout(timeout);
      timeout = null;
      cb.call(context, args);     
    };

    clearTimeout(timeout);
    timeout = setTimeout(callBack, wait);
  };
}


let callMe = function(e) {
  console.log(">>>>>>>", e);
};


let m = debounce(callMe, 1500);

window.addEventListener("resize", m, false);