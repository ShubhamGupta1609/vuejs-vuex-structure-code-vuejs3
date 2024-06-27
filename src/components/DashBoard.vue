<template>
    <div>
      <header class="header">
        <h1>Product Dashboard</h1>
      </header>
  
      <main class="main-content">
        <div class="product-list">
          <div v-for="product in products" :key="product.id" class="product-card">
            <div @click="productDetail(product)">
              <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: ${{ product.price }}</p>
            </div>
          </div>
        </div>
      </main>
  
      <footer class="footer">
        <p>&copy; 2024 My Product Store</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const products = ref([
    { id: 1, name: 'Product 1', description: 'Description of product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description of product 2', price: 150 },
    { id: 3, name: 'Product 3', description: 'Description of product 3', price: 200 },
    { id: 4, name: 'Product 4', description: 'Description of product 4', price: 250 },
  ]);

  const productDetail = (product) =>{
  console.log("Test Func", product.name)
  alert(product.name)
  }
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .main-content {
    padding: 20px;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .product-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .product-card h2 {
    margin: 0 0 10px 0;
  }
  
  .product-card p {
    margin: 5px 0;
  }
  
  .footer {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  </style>
  