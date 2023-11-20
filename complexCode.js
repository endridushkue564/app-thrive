/* filename: complexCode.js - Complex Code Example */

// Importing required libraries
const fetch = require('node-fetch');

// Defining constant variables
const BASE_URL = 'https://api.example.com';
const API_KEY = 'abcdef123456';

// Creating a class
class ComplexCode {
  constructor() {
    this.data = [];
    this.updatedData = [];
  }

  // Initializing the code
  async init() {
    try {
      // Fetching data from API
      const response = await fetch(`${BASE_URL}/data?key=${API_KEY}`);
      const jsonData = await response.json();

      // Storing data and updating it
      this.data = jsonData.data;
      this.updatedData = this.updateData(this.data);

      // Processing data
      this.processData(this.updatedData);

      // Showing final result
      this.showResult();
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  // Updating the data
  updateData(data) {
    const updatedData = [];

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const updatedItem = this.processItem(item);

      updatedData.push(updatedItem);
    }

    return updatedData;
  }

  // Processing an item
  processItem(item) {
    let updatedItem = { ...item };

    // Complex calculations and transforms
    updatedItem.price = Math.round(updatedItem.price * 1.1);
    updatedItem.quantity = Math.max(updatedItem.quantity, 10);
    updatedItem.discount = this.calculateDiscount(updatedItem.price, updatedItem.quantity);

    return updatedItem;
  }

  // Calculating discount
  calculateDiscount(price, quantity) {
    let discount = 0;

    if (quantity >= 20 && price > 50) {
      discount = Math.round((price * quantity) * 0.15);
    } else if (quantity >= 10) {
      discount = Math.round((price * quantity) * 0.1);
    }

    return discount;
  }

  // Processing data
  processData(data) {
    // Complex data manipulation and operations
    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      if (item.quantity > 15) {
        item.status = 'High quantity';
      } else {
        item.status = 'Regular';
      }
    }
  }

  // Showing final result
  showResult() {
    console.log('Updated Data:', this.updatedData);
  }
}

// Creating an instance of the class and initializing it
const complexCodeInstance = new ComplexCode();
complexCodeInstance.init();
