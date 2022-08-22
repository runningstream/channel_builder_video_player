<script setup>
  import {ref, inject} from "vue";

  const axios = inject('axios');

  const username = ref("");
  const password = ref("");

  function login_api_request(username, password) {
    let data = {
      "username": username,
      "password": password
    };
    let props = {
      "with_credentials": true,
    };

    return axios.post(
      get_api_url("authenticate_ro"),
      data,
      props
    )
  }

  function get_api_url(urlpart) {
    //let api_base = "https://192.168.86.11:3031/api/v1/";
    let api_base = "https://api.runningstream.cc/api/v1/";
    return api_base + urlpart;
  }

  function form_submit(ev) {
    console.log(username.value + " " + password.value);
    login_api_request(username.value, password.value)
      .then((response) => {
        console.log(`Success: ${response}`);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });

    ev.preventDefault();
  }
</script>

<template>
  <form @submit="form_submit">
    <div><label for="login_user">Username:</label><input type="text" autocomplete="username" id="login_user" v-model="username"></div>
    <div><label for="login_pass">Password:</label><input type="password" autocomplete="password" id="login_pass" v-model="password"></div>
    <div><input type="submit" value="Login"></div>
  </form>
</template>