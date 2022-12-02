
function Validator(options) {

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
            var errorMessage = rule.test (inputElement.value);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            
            if (errorMessage) {
                errorElement.innerText = errorMessage;
                alert("Vui lòng nhập trường này");
                // errorMessage.focus();
            }
    }
 
    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach ( function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            
            if (inputElement) {
                // Sử lí trường hợp blur khỏi input
                inputElement.onblur = function() {
                    validate(inputElement, rule);

                }

                // Xử lí mỗi khi ng dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    // inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}
// Định nghĩa rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : ' Vui lòng nhập trường này'
        }
    };
}


Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : 'Nhập tối thiểu ' + min + ' kí tự'
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue) {
    return {
        selector : selector,
        test : function (value) {
            return value == getConfirmValue() ? undefined : 'Giá trị nhập vào không chính xác với mật khẩu'
        }
    }
}
