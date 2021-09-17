<template>
  <section class="vh-100" style="background-color: #e2e2e2;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-9">
        <h1 class="text-Black mb-4"> Sign IN </h1>
        <div class="card" style="border-radius: 12px;">
          <div class="card-body">
            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0"> Email </h6>
              </div>
              <div class="col-md-9 pe-5">
              <input type="text" class="form-control form-control-lg"
              v-model="email" placeholder="A@gmail.com" />
              </div>
            </div>
            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0"> Password </h6>
              </div>
              <div class="col-md-9 pe-5">
              <input type="password" class="form-control form-control-lg"
              v-model="password" />
              </div>
            </div>
            <hr class="mx-n3">
            <div class="px-5 py-4">
              <button v-on:click="login" type="submit" class="btn btn-primary btn-lg">Login</button>
              <p>
                 <button class="btn btn-outline-primary"><router-link to="/register">New User??
                 </router-link></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`,
      );
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem('users-info', JSON.stringify(result.data[0]));
        this.$router.push({ name: 'Home' });
      }
      console.warn(result);
    },
  },
};
</script>

<style>
.card {
  width: 100%;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #f8f9fa;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .15rem;
}
</style>
