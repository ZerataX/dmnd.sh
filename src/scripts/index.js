import { getParameterByName } from './url_query'

var DIAMONDS = {
  common: {
    init: function(){
      // application wide code
    }
  },
  register : {
    init : function(){
      // set token input to "?token=" query parameter
      if (getParameterByName("token")) {
        document.getElementById('token').value = getParameterByName("token");
      }
      // html5 validators
      var username = document.getElementById("username");
      var password = document.getElementById("password");
      var confirm_password = document.getElementById("confirm_password");
      var token = document.getElementById("token");

      username.addEventListener("input", function (event) {
        if (username.validity.typeMismatch) {
          username.setCustomValidity("format: @username:matrix.org");
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

      function validatePassword(){
        if(password.value != confirm_password.value) {
          confirm_password.setCustomValidity("passwords don't match");
        } else {
          confirm_password.setCustomValidity("");
        }
      }

      password.onchange = validatePassword;
      confirm_password.onkeyup = validatePassword
    }
  }
}

var UTIL = {
    exec: function(controller, action) {
        var ns = DIAMONDS;

        action = (action === undefined) ? "init" : action;
        if (controller !== "" && ns[controller] && typeof ns[controller][action] == "function") {
            ns[controller][action]();
        }
    },
    init: function() {
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
