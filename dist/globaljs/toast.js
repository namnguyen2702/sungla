var toastIt = function (text, timeout, options) {
  var timeout = timeout || 3000;
  var toast = document.createElement('DIV');
  toast.classList.add('toast-it');
  var content = document.createTextNode(text);
  toast.appendChild(content);
  toast.style.animationDuration = timeout / 1000 + 's';

  for (var prop in options) {
    toast.style[prop] = options[prop];
  }

  document.body.appendChild(toast);
  setTimeout(function () {
    document.body.removeChild(toast);
  }, timeout);
};
