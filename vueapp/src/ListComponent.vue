<template>
  <div id="list">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  methods: {
    deleteItem(index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

<style scoped>
li {
  margin: 10px;
}
button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3e8e41;
}
</style>
