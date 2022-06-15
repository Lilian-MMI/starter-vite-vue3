<script setup lang="ts">
import { useUserStore } from "@/stores";
import { useWindowSize } from "@/composables";
import { userApi } from "@/api";

const userStore = useUserStore();
const logme = () => userStore.logMe();

const { currentUser } = storeToRefs(userStore);

const { width, height } = useWindowSize();

const userGetByApi = ref();
const callApi = async () => (userGetByApi.value = await userApi.getUser("1"));
</script>

<template>
  <HelloWorld msg="vue3 starter" />
  <button @click="logme">LOG ME</button>

  <br />

  user store : {{ currentUser }}

  <br />

  composable resize : {{ width }}x{{ height }}

  <br />

  <button @click="callApi">CALL API</button>

  <br />

  user from api : {{ userGetByApi }}
</template>

<style lang="scss" scoped></style>
