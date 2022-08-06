<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import ATextField from "@/components/ATextField.vue";
</script>

<template>
  <!--
  v-app root component wrapper is required for children components
  that relies on vuetify
  -->
  <v-app>
    <header>
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <!-- a component that relies on vuetify -->
        <ATextField />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </v-app>
</template>

<style></style>
