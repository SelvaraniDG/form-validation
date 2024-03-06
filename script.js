<<<<<<< HEAD
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
=======
const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const address = document.querySelector('#address');
const dob = document.querySelector('#dob');
const gender = document.querySelector('#gender');
const department = document.querySelector('#department');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
    
    
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const addressVal = address.value.trim();
    const dobVal = dob.value;
    const genderVal = gender.value;
    const departmentVal = department.value;
    let success = true;

    if(usernameVal === ''){
        let success = false;
        setError(username, 'Name is required.')
    }
    else {
        setSuccess(username)
    }

    if(emailVal === ''){
        let success = false;
        setError(email, 'Email is required')
    }
    else if(!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email.')
    }
    else {
        setSuccess(email)
    }

    if(phoneVal == 0){
        let success = false;
        setError(phone, 'Phone is required.')
    }
    else if(phoneVal.length != 10){
        let success = false;
        setError(phone, 'Please enter a valid number.')
    }
    else {
        setSuccess(phone)
    }

    if(addressVal === ''){
        let success = false;
        setError(address, 'Address is required.')
    }
    else{
        setSuccess(address)
    }

    if(dob.value == ''){
        let success = false;
        setError(dob, 'DoB is required')
    }
    else {
        setSuccess(dob)
    }
    
    if(genderVal === ''){
        let success = false;
        setError(gender, 'Gender is required.')
    }
    else{
        setSuccess(gender)
    }
    if(departmentVal === ''){
        let success = false;
        setError(department, 'Department is required.')
    }
    else{
        setSuccess(department)
    }

}

function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
};




>>>>>>> main
