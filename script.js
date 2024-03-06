var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var dob = document.getElementById('dob');
var gender = document.getElementById('gender');
var department = document.getElementById('department');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInputs();
});
function validateInputs() {
    var usernameVal = (username === null || username === void 0 ? void 0 : username.value.trim()) || '';
    var emailVal = (email === null || email === void 0 ? void 0 : email.value.trim()) || '';
    var phoneVal = (phone === null || phone === void 0 ? void 0 : phone.value.trim()) || '';
    var addressVal = (address === null || address === void 0 ? void 0 : address.value.trim()) || '';
    var dobVal = (dob === null || dob === void 0 ? void 0 : dob.value) || '';
    var genderVal = (gender === null || gender === void 0 ? void 0 : gender.value) || '';
    var departmentVal = (department === null || department === void 0 ? void 0 : department.value) || '';
    var success = true;
    if (usernameVal === '') {
        success = false;
        setError(username, 'Name is required.');
    }
    else {
        setSuccess(username);
    }
    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    }
    else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email.');
    }
    else {
        setSuccess(email);
    }
    if (phoneVal === '') {
        success = false;
        setError(phone, 'Phone is required.');
    }
    else if (phoneVal.length !== 10) {
        setError(phone, 'Please enter a valid number.');
    }
    else {
        setSuccess(phone);
    }
    if (addressVal === '') {
        success = false;
        setError(address, 'Address is required.');
    }
    else {
        setSuccess(address);
    }
    if (dobVal === '') {
        success = false;
        setError(dob, 'DoB is required');
    }
    else {
        setSuccess(dob);
    }
    if (genderVal === '') {
        success = false;
        setError(gender, 'Gender is required.');
    }
    else {
        setSuccess(gender);
    }
    if (departmentVal === '') {
        success = false;
        setError(department, 'Department is required.');
    }
    else {
        setSuccess(department);
    }
    return success; // Return a boolean value
}
function setError(element, message) {
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSuccess(element) {
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
var validateEmail = function (email) {
    return String(email)
        .toLowerCase()
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};
