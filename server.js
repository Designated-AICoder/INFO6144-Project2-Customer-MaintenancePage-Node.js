const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Directory where customer data will be saved
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// create customer - new customer add
app.post('/addCustomer', (req, res) => {
    const customer = req.body;
    const filePath = path.join(dataDir, `${customer.customerNumber}.txt`);

    if (fs.existsSync(filePath)) {
        return res.status(400).json({ error: 'Customer number already exists' });
    }

    fs.writeFileSync(filePath, JSON.stringify(customer));
    res.json({ message: 'Customer added' });
});

// update customer - update data
app.post('/updateCustomer', (req, res) => {
    const customer = req.body;
    const filePath = path.join(dataDir, `${customer.customerNumber}.txt`);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Customer not found' });
    }

    fs.writeFileSync(filePath, JSON.stringify(customer));
    res.json({ message: 'Customer updated' });
});

// delete customer - remove data
app.post('/deleteCustomer', (req, res) => {
    const customerNumber = req.body.customerNumber;
    const filePath = path.join(dataDir, `${customerNumber}.txt`);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Customer not found' });
    }

    fs.unlinkSync(filePath);
    res.json({ message: 'Customer deleted' });
});

// find customer - get data
app.post('/findCustomer', (req, res) => {
    const customerNumber = req.body.customerNumber;
    const filePath = path.join(dataDir, `${customerNumber}.txt`);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Customer not found' });
    }

    const customerData = fs.readFileSync(filePath);
    res.json(JSON.parse(customerData));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
