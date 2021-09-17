<template>
  <section class="vh-100" style="background-color: #e2e2e2;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-9">
        <h1 class="text-Black mb-4"> Signup </h1>
        <div class="card" style="border-radius: 12px;">
          <div class="card-body">
            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0"> First Name </h6>
              </div>
              <div class="col-md-9 pe-5">
              <input type="text" class="form-control form-control-lg"
              v-model="fname" placeholder="ABC" />
              </div>
            </div>
            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0"> Last Name </h6>
              </div>
              <div class="col-md-9 pe-5">
              <input type="text" class="form-control form-control-lg"
              v-model="lname" placeholder="M" />
              </div>
            </div>
            <hr class="mx-n3">
            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0"> Email address </h6>
              </div>
              <div class="col-md-9 pe-5">
                <input type="email" class="form-control form-control-lg"
                v-model="email" placeholder="dummy@example.com" />
              </div>
            </div>
    <hr class="mx-n3">
            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0">Password</h6>
              </div>
              <div class="col-md-9 pe-5">
                <input type="password" class="form-control form-control-lg"
                v-model="password" />
              </div>
            </div>
            <hr class="mx-n3">
            <div class="px-5 py-4">
              <button v-on:click="signup" type="submit"
               class="btn btn-primary btn-lg">Register</button>
            </div>
            <p>
              <button class="btn btn-outline-primary"><router-link to="/">Login
              </router-link></button>
            </p>
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
  name: 'Signup',
  data() {
    return {
      fname: '',
      lname: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async signup() {
      const result = await axios.post('http://localhost:3000/users', {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status === 201) {
        localStorage.setItem('users-info', JSON.stringify(result.data));
        this.$router.push({ name: 'Home' });
      }
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
