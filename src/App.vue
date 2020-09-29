<template>
  <div id="app">
    <div id="nav">
      <div class="logoDiv">
        <router-link to="/">
          <div class="logo"></div>
        </router-link>
      </div>

      <div class="links">
        <router-link to="/">Home</router-link>|
        <router-link to="/going">My Events</router-link>|
        <router-link to="/hasbeen">History</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
button {
  background: white;
  color: #42b983;
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  width: 150px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
button:hover {
  background: #42b983;
  color: white;
  border: none;
}
.links {
  width: 70%;
}
.logoDiv {
  height: 100px;
  width: 15%;
}
.logo {
  height: 100px;
  background-image: url(./assets/img/M.png);
  background-repeat: no-repeat;
  background-position: center;
}
@media (max-width: 650px) {
  .links {
    width: 60%;
  }
  .logoDiv {
    height: 100px;
    width: 30%;
  }
}
@media (max-width: 650px) {
  #nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .links {
    width: 100%;
  }
  .logoDiv {
    height: 100px;
    width: 100%;
  }
}
</style>
