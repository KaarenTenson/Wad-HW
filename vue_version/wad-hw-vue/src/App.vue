<script setup>
import { ref } from 'vue';  // Import ref from Vue
import ProfileCompo from './components/ProfileCompo.vue';

// Declare reactive `showProfile` using `ref`
const showProfile = ref(false);

// Method to toggle the `showProfile` state
const toggleProfile = () => {
  showProfile.value = !showProfile.value;
};

</script>

<template>
  <header>
  <div>
  <strong><router-link to="/about"> Home </router-link></strong>
  <a href="addPost.html" ><strong>|addpost </strong></a>
  <strong><router-link to="/new-post">| New Post </router-link></strong>
  </div>
  <div>
    <button id="Profile_info" type="button" @click="toggleProfile"></button>
  </div>
  </header>
  <ProfileCompo v-if="showProfile" />
  <router-view/>
  <footer>
        <br>
        
        <br>
    </footer>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#Profile_info{ 
    width: 50px;
    height: 50px;
    background-image: url("./assets/me.png");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
}
footer {
    background-color: rgb(141, 136, 136);
    font-size: large;
    padding: 5px;
}

header{
    background-color: rgb(171, 171, 159);
    color: black;
    text-align: center;
    font-size: larger;
    display: flex;
    align-items: center; /* Vertically centers the content */
    justify-content: space-between; /* Horizontally centers the content */
    height: 100px;
    padding: 0% 3% 0% 3%;
    border-radius: 10px;
}
header img {
    align-content: end;
}
header a {
    color: black;
    font-size: large;
}
header a:hover {
    background-color: rgb(154, 149, 149);
    text-decoration:overline ;
}
</style>
