<template>
  <div class="box">
    <form @submit.prevent="handleRegister">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Uplaod CV</label>
        <input
          @change="onFileChange"
          type="file"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      cvFile: "",
    };
  },
  methods: {
    async handleRegister() {
      console.log("Hello World");
      if (this.cvFile) {
        const form = new FormData();
        form.append("file", this.cvFile);

        try {
          const result = await axios.post(
            "http://0.0.0.0:3000/upload-single",
            form,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(result);
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert("No File Provided!");
      }
    },
    onFileChange(event) {
      this.cvFile = event.target.files[0];
      console.log(this.cvFile);
    },
  },
};
</script>
<style scoped>
.box {
  padding: 40px;
}
</style>