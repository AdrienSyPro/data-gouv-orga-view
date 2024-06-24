<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Liste des organisations</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
/* Reset some basic styles */
body, h1, h2, h3, p, table, th, td {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto Condensed", sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
  padding: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.table-container {
  flex: 1 1 300px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

.detail-container {
  flex: 2 1 600px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

th {
  background: #007BFF;
  color: #fff;
}

tr:hover {
  background: #f1f1f1;
}

.detail-container p {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .table-container, .detail-container {
    flex: 1 1 100%;
  }
}

</style>
