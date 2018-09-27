"use strict";

const comics = Vue.component("comics", {
  props: ["comics"],
  template: ` 
    <div>
      <h2>Comics</h2>
    </div>
  `
});

const art = Vue.component("art", {
  props: ["art"],
  template: `
    <div>
      <h2>Art</h2>
    </div>
  `
});

const about = Vue.component("about", {
  props: ["about"],
  template: `
    <div><h2>About Jean</h2></div>
  `
});

const router = new VueRouter({
  routes: [
    { path: "/comics", component: comics },
    { path: "/art", component: art },
    { path: "/about", component: about }
  ]
});

const app = new Vue({
  el: "#app",
  data: {},
  methods: {},
  template: `
    <div>
      <img class="logo" src="assets/jeanlogo.jpg" alt="Jean Eglinton Logo"/>
      <main>
        <img id="home" src="assets/hineini.jpg" alt="Hineini"/>
      </main>
    </div>
  `,
  router
});
