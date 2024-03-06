const form = document.getElementById('form') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const address = document.getElementById('address') as HTMLInputElement;
const dob = document.getElementById('dob') as HTMLInputElement;
const gender = document.getElementById('gender') as HTMLInputElement;
const department = document.getElementById('department') as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs(): boolean {
    const usernameVal = username?.value.trim() || '';
    const emailVal = email?.value.trim() || '';
    const phoneVal = phone?.value.trim() || '';
    const addressVal = address?.value.trim() || '';
    const dobVal = dob?.value || '';
    const genderVal = gender?.value || '';
    const departmentVal = department?.value || '';

    let success = true;

    if (usernameVal === '') {
        success = false;
        setError(username, 'Name is required.');
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email.');
    } else {
        setSuccess(email);
    }

    if (phoneVal === '') {
        success = false;
        setError(phone, 'Phone is required.');
    } else if (phoneVal.length !== 10) {
        setError(phone, 'Please enter a valid number.');
    } else {
        setSuccess(phone);
    }

    if (addressVal === '') {
        success = false;
        setError(address, 'Address is required.');
    } else {
        setSuccess(address);
    }

    if (dobVal === '') {
        success = false;
        setError(dob, 'DoB is required');
    } else {
        setSuccess(dob);
    }

    if (genderVal === '') {
        success = false;
        setError(gender, 'Gender is required.');
    } else {
        setSuccess(gender);
    }

    if (departmentVal === '') {
        success = false;
        setError(department, 'Department is required.');
    } else {
        setSuccess(department);
    }

    return success; // Return a boolean value
}

function setError(element: HTMLInputElement, message: string): void {
    const inputGroup = element.parentElement as HTMLElement;
    const errorElement = inputGroup.querySelector('.error') as HTMLElement;

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element: HTMLInputElement): void {
    const inputGroup = element.parentElement as HTMLElement;
    const errorElement = inputGroup.querySelector('.error') as HTMLElement;

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email: string): RegExpMatchArray | null => {
    return String(email)
        .toLowerCase()
        .match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        );
};
