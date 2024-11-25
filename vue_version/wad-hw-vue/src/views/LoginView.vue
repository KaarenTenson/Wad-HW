<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitLogin() {
      console.log(`Logging in with email: ${this.email}, password: ${this.password}`);
      this.$router.push("/about");
    },
  },
};
</script>

<template>
  <div class="login-page">
    <div class="form">
      <strong>Welcome to PostIt</strong>
      <div>
        <p>Create an account</p>
      </div>
      <p>or</p>
      <p>Please log in</p>
      <form @submit.prevent="submitLogin">
        <input
          type="email"
          v-model="email"
          required
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          v-model="password"
          required
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Signup" />
      </form>
      <div>
        <p>Forgot password</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.form {
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
  padding-top: 10px;
}

.form div > p {
  color: cyan;
}

#submit {
  background-color: blue;
  color: white;
}

form input {
  margin: 10px;
}

.form p {
  margin: 10px;
}

#submit:hover {
  background-color: lightblue;
}

div + p {
  text-decoration: underline;
}

.form p ~ p {
  color: yellow;
}

@media (max-width: 800px) {
  .header {
    flex-direction: column;
    align-items: center;
  }

  .form {
    flex-direction: column;
    align-items: center;
    margin: 0%;
  }

  button {
    width: 100%;
  }
}

.profile-panel {
  display: none; /* Hidden by default */
  position: absolute;
  top: 110px; /* Below the profile image */
  right: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  z-index: 1000;
}

.profile-panel h3 {
  margin: 0;
  font-size: 18px;
}

.profile-panel p {
  margin: 5px 0;
  font-size: 14px;
}

.profile-panel a {
  margin: 5px 0;
  font-size: 14px;
  color: black;
}

</style>