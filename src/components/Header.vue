<template>
    <div class="nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/add">Add Book</router-link>
        <router-link to="/delete">Delete</router-link>
    </div>
</template>

<script>
export default {
  name: 'Header',
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
</style>
