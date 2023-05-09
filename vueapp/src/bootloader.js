// import { createApp } from "vue";

// import "./index.css";

// import App from "./App.vue";

// createApp(App).mount("#app");

// helloVue/src/bootstrap.js
import { createApp } from "vue";
import ListComponent from "./ListComponent.vue";
import App from "./App";

const mount = (el) => {
  const app = createApp(App);
  app.mount(el);
};

const ListComponentmount = (el) => {
  const app = createApp(ListComponent);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#app");
  const ListComponentRoot = document.querySelector("#list");

  if (devRoot) {
    mount(devRoot);
    mount(ListComponentRoot);
  }
}

export { mount, ListComponentmount };
