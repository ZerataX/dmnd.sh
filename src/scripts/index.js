import { getParameterByName } from './url_query'

var DIAMONDS = {
  common: {
    init: function () {
      // application wide code
    }
  },
  register: {
    init: function () {
      // see https://stackoverflow.com/a/901144/3779427
      function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[[]]/g, "\\$&");
        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      }

      // set token input to "?token=" query parameter
      document.getElementById('token').value = getParameterByName("token");

      // html5 validators
      var username = document.getElementById("username");
      var password = document.getElementById("password");
      var confirm_password = document.getElementById("confirm_password");
      var token = document.getElementById("token");

      username.addEventListener("input", function (event) {
        if (username.validity.typeMismatch) {
          username.setCustomValidity("format: @username:dmnd.sh");
        } else {
          username.setCustomValidity("");
        }
      });

      token.addEventListener("input", function (event) {
        if (token.validity.typeMismatch) {
          token.setCustomValidity("case-sensitive, e.g: SardineImpactReport");
        } else {
          token.setCustomValidity("");
        }
      });

      password.addEventListener("input", function (event) {
        if (password.validity.typeMismatch) {
          password.setCustomValidity("atleast 8 characters long");
        } else {
          password.setCustomValidity("");
        }
      });

      function validatePassword() {
        if (password.value != confirm_password.value) {
          confirm_password.setCustomValidity("passwords don't match");
        } else {
          confirm_password.setCustomValidity("");
        }
      }

      password.onchange = validatePassword;
      confirm_password.onkeyup = validatePassword;

      var form = document.getElementById("registration");
      var success = document.getElementById("success");
      var welcome = document.getElementById("welcome");

      function sendData() {
        let XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        let FD = new FormData(form);

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {
          let response = JSON.parse(XHR.responseText);
          let welcome_msg = "Welcome " + response.user_id + ", to diamonds!";

          console.log(response);
          if (response.status_code == 200) {
            form.classList.toggle("hidden");
            success.classList.toggle("hidden");
            welcome.innerHTML = welcome_msg;
          } else {
            alert(response.error);
          }
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
          alert('an internal error occured!');
        });

        // Set up our request
        let endpoint =  window.location.protocol + "//" + window.location.host + "/register";
        XHR.open("POST", endpoint);

        // The data sent is what the user provided in the form
        XHR.send(FD);
      }

      // take over its submit event.
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        sendData();
      });
    }
  }
}

// based on https://www.viget.com/articles/extending-paul-irishs-comprehensive-dom-ready-execution/
var UTIL = {
  exec: function (controller, action) {
    var ns = DIAMONDS;

    action = (action === undefined) ? "init" : action;
    if (controller !== "" && ns[controller] && typeof ns[controller][action] == "function") {
      ns[controller][action]();
    }
  },
  init: function () {
    var body = document.body,
      controller = body.getAttribute("data-controller"),
      action = body.getAttribute("data-action");
    UTIL.exec("common");
    UTIL.exec(controller);
    UTIL.exec(controller, action);
  }
};

window.onload = function () {
  UTIL.init();
}
