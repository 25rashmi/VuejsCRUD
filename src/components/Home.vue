<template>
<div class="container">
    <div class="nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/add">Add Book</router-link>
    </div>
    <br>
    <table class="table">
        <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Author</td>
            <td>publish</td>
            <td>Actions</td>
        </tr>
<tr v-for="item in books" :key="item.id">
    <td>{{item.id}}</td>
    <td>{{item.title}}</td>
    <td>{{item.author}}</td>
    <td>{{item.published}}</td>
    <td><router-link :to="'/update/'+item.id">Update</router-link></td>
    <button v-on:click="deletebook(item.id)" class="btn btn-primary">Delete</button>
</tr>
</table>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      name: '',
      books: [],
    };
  },
  methods: {
    async deletebook(id) {
      const result = await axios.delete('http://localhost:3000/books/'+id);
      console.warn(result);
      if(result.status === 200)
      {
        this.loadData();
      }
    },
    async loadData()
    {
    const users = localStorage.getItem('users-info');
    this.name = JSON.parse(users).name;
    if (!users) {
      this.$router.push({ name: 'register' });
    }
    const result = await axios.get('http://localhost:3000/books');
    console.warn(result);
    this.books = result.data;
    },  
    logout() {
      localStorage.clear();
      this.$$router.push({ name: 'login' });
    }
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style>
.nav{
    background: rgb(149, 149, 236);
    overflow: hidden;
    padding: 0px;
    margin-top: 0px;
}
.nav a{
    float:right;
    color: white;
    padding:14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin: 5px;
}
.nav a:hover{
    background-color: rgb(242, 245, 247);
    color: black;
    text-decoration: none;
}

td{
    width:160px;
    height: 40px;
}
</style>
