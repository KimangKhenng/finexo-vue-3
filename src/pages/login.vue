<template>
  <Form @submit="handleSubmit">
    <!-- <div v-if="error" class="alert alert-danger" role="alert">Error Login!</div>
    <div v-if="success" class="alert alert-success" role="alert">
      A simple success alert—check it out!
    </div> -->

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <Field type="email" name="email" v-model="email" :rules="isEmail" />

      <div><ErrorMessage name="email" class="alert alert-danger" /></div>

      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <Field
        type="password"
        name="password"
        :rules="passwordRule"
        v-model="password"
      />
      <ErrorMessage name="password" class="alert alert-danger" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </Form>
</template>
<script>
import axios from "axios";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
      success: false,
      isEmail: yup.string().required().email(),
      passwordRule: yup.string().min(8),
    };
  },
  methods: {
    resetInput() {
      this.email = "";
      this.password = "";
    },
    async handleSubmit() {
      try {
        // Code with potential error
        const reponse = await axios.post("/v1/auth/login", {
          email: this.email,
          password: this.password,
        });
        // Localstorage
        localStorage.setItem("accessToken", reponse.data.accessToken);
        this.resetInput();
        this.error = false;
        this.success = true;
      } catch (err) {
        this.resetInput();
        this.error = true;
        this.success = false;
        console.log("Error login");
      }
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}
</style>