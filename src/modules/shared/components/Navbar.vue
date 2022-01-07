<template>
 <div id="nav">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
         <img src="../../../assets/logo-unity.png" width="100" height="100" alt="">
      </a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon navbar-light"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- replacing the ul with a div tag -->
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">   -->
        <div class="navbar-nav mr-auto">
            <!-- on each of the li tag , there is a class named *nav item*, copy it and place it on the a tag & delete the li -->
            <!-- <a class=" nav-item nav-link active" aria-current="page" href="#">Home</a> -->
            <!-- replace the a tag with the router link -->
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Academy
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <router-link class="dropdown-item" :to="{ name: 'About' }">History</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'Instructors' }">Instructors</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'About' }">Testimonials</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'About' }">Pricing</router-link>
                </div>
            </li>

            <router-link :to="{ name: 'Programs' }" class="nav-link">Programs</router-link>

            <router-link :to="{ name: 'Schedule' }" class="nav-link">Schedule</router-link>

            <router-link :to="{ name: 'About' }" class="nav-link">Contact us</router-link>

            <router-link :to="{ name: 'About' }" class="nav-link">Log in</router-link>

            <router-link :to="{ name: 'About' }" class="nav-link">Sign up</router-link>
          </div>
          <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
    </div>
  </nav> 
 </div>

</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
    #nav {
    padding: 0px;
  }

  #nav a {
    font-weight: bold;
    color: #000000;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  } 
  
  .navbar-nav > li > .dropdown-menu { background-color: #ffffff; }

  .dropdown:hover .dropdown-menu {
   display: block;
  }
  
</style>