function newCustomer() {
    // clear all fields
    document.getElementById('customerForm').reset();
}

function addCustomer() {
    const customer = getCustomerData();
    if (isCustomerDataValid(customer)) {
        postData('/addCustomer', customer)
            .then(response => alert(response.message))
            .catch(error => alert(error.error));
    } else {
        alert('All fields must be filled');
    }
}

function updateCustomer() {
    const customer = getCustomerData();
    if (isCustomerDataValid(customer)) {
        postData('/updateCustomer', customer)
            .then(response => alert(response.message))
            .catch(error => alert(error.error));
    } else {
        alert('All fields must be filled');
    }
}

function deleteCustomer() {
    const customerNumber = document.getElementById('customerNumber').value;
    if (customerNumber) {
        if (confirm('Are you sure you want to delete this customer?')) {
            postData('/deleteCustomer', { customerNumber })
                .then(response => alert(response.message))
                .catch(error => alert(error.error));
        }
    } else {
        alert('Please enter a customer number');
    }
}

function findCustomer() {
    const customerNumber = document.getElementById('customerNumber').value;
    if (customerNumber) {
        postData('/findCustomer', { customerNumber })
            .then(customer => populateCustomerForm(customer))
            .catch(error => alert(error.error));
    } else {
        alert('Please enter a customer number');
    }
}

function getCustomerData() {
    return {
        customerNumber: document.getElementById('customerNumber').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        province: document.getElementById('province').value,
        postal: document.getElementById('postal').value,
    };
}

function isCustomerDataValid(customer) {
    // simple check - all fields must have value
    return Object.values(customer).every(field => field.trim() !== '');
}

function populateCustomerForm(customer) {
    document.getElementById('customerNumber').value = customer.customerNumber;
    document.getElementById('firstName').value = customer.firstName;
    document.getElementById('lastName').value = customer.lastName;
    document.getElementById('address').value = customer.address;
    document.getElementById('city').value = customer.city;
    document.getElementById('province').value = customer.province;
    document.getElementById('postal').value = customer.postal;
}

function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json());
}
