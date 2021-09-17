<template>
<div class="container">
    <div class="nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/add">Add Book</router-link>
    </div><br>
    <section id="cover" class="min-vh-100">
    <div id="cover-caption">
        <div class="container">
            <div class="row text-white">
                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <h1 class="display-4 py-2 text-truncate">Update Book</h1>
                    <div class="px-2">
                        <form action="" class="justify-content-center">
                            <div class="form-group">
                                <label class="sr-only">Id</label>
                                <input type="text" name="id" class="form-control"
                                placeholder="book id" v-model="books.id" />
                            </div>
                            <div class="form-group">
                                <label class="sr-only">Title</label>
                                <input type="text" name ="title" class="form-control"
                                placeholder="Book name" v-model="books.title" />
                            </div>
                            <div class="form-group">
                                <label class="sr-only">Author</label>
                                <input type="text" name="author" class="form-control"
                                placeholder="Book Author" v-model="books.author" />
                            </div>
                            <div class="form-group">
                                <label class="sr-only">publish</label>
                                <input type="text" name="published" class="form-control"
                                placeholder="Year" v-model="books.published" />
                            </div>
                            <button type="button" v-on:click="updatebook"
                            class="btn btn-primary btn-lg">Launch</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Update',
  data() {
    return {
      books: {
        id: '',
        title: '',
        author: '',
        published: '',
      },
    };
  },
  methods: {
    async updatebook() {
      console.warn(this.books);
      const result = await axios.put('http://localhost:3000/books/'+this.$route.params.id, {
        id: this.books.id,
        title: this.books.title,
        author: this.books.author,
        published: this.books.published,
      });
      console.warn(this.result);
      alert('Update successfully');
      if (result.status === 200) {
        this.$router.push({ name: 'Home' });
      }
    },
  },
  async mounted() {
    console.warn(this.books);
    const result = await axios.get('http://localhost:3000/books/'+this.$route.params.id);
    console.warn(result.data);
    this.books = result.data;
  },
};
</script>

<style>
body{
  transition: none 0s ease 0s;
}
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
#cover {
background:url('https://unsplash.it/1920/1080/?random') center center no-repeat;
background-size: cover;
  height: 100%;
  text-align: center;display: flex;
  align-items: center;
  position: relative;
  }
  #cover-caption {
      width: 100%;
      position: relative;
      z-index: 1;
      }
form:before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: -1;
    border-radius: 10px;
    }
</style>
