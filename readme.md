# Customer Maintenance Page - Node.js Application

This project is a basic customer maintenance web application built with Node.js and Express.js. The application allows users to add, update, delete, and find customer records, using a simple web interface. This project is part of the INFO6144 course at Fanshawe College.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [How to Use](#how-to-use)
- [Security Considerations](#security-considerations)
- [References](#references)

## Overview

The purpose of this application is to provide a simple CRUD (Create, Read, Update, Delete) interface for maintaining customer data. The application uses AJAX for client-server communication and stores customer records as JSON files on the server.

### Features

- **New**: Clear all input fields.
- **Add**: Add a new customer record, ensuring the customer number is unique.
- **Update**: Update an existing customer record.
- **Delete**: Remove a customer record after confirmation.
- **Find**: Retrieve and display a customer record based on the customer number.

## Project Structure

```plaintext
- project-root/
  - data/                # Directory for storing customer data files
  - public/              # Directory for public files
    - index.html         # The main HTML file
    - scripts.js         # JavaScript file for handling client-side logic
    - styles.css         # CSS file (optional)
  - server.js            # The main Node.js server file
  - package.json         # Node.js project metadata and dependencies
  - README.md            # This readme file
```

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/customer-maintenance-app.git
   cd customer-maintenance-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   node server.js
   ```

   The server will start on `http://localhost:3000`.

4. **Access the application**:
   Open your browser and visit `http://localhost:3000`.

## How to Use

1. **New**: Click the "New" button to clear all input fields.
2. **Add**: Fill in the customer details and click "Add" to create a new record.
3. **Update**: Modify the customer details and click "Update" to save changes.
4. **Delete**: Click "Delete" to remove a customer record after confirming the action.
5. **Find**: Enter the customer number and click "Find" to retrieve a record.

## Security Considerations

- Avoid placing any business logic or sensitive operations directly in the `index.html` file. All sensitive operations should be handled server-side in `server.js`.
- Follow industry standards for project architecture and security. For more information, refer to the [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices).

## References

- [Express.js Documentation](https://expressjs.com/): Official documentation for Express.js, the web framework used in this project.
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices): A collection of best practices and design patterns for Node.js development.
- [AJAX with jQuery](https://api.jquery.com/jquery.ajax/): Detailed documentation on using AJAX with jQuery, relevant to the client-server communication in this project.
