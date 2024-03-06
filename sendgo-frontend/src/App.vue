<template>
  <div id="app">
    <routerView name="Header"> </routerView>
    <routerView name="Header2"> </routerView>
    <div>
      <router-view/>
    </div>
    <Footer/>
    <routerView name="Footer"></routerView>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import "../public/css/common.css";
@import "../public/css/header.css";
@import "../public/css/header2.css";
@import "../public/css/footer.css";
@import "../public/css/main.css";
@import "../public/css/messagePage.css";
@import "../public/css/credit.css";
@import "../public/css/join.css";
@import "../public/css/login.css";

</style>
