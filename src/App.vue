<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import Footer from "./pages/Footer.vue";
import Navbar from "./pages/Navbar.vue";
export default {
  components: { Footer, Navbar },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
