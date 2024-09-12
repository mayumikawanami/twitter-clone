<template>
  <div>
    <SideNav />
  </div>
</template>

<script>
import SideNav from "~/components/SideNav.vue";
import firebase from "~/plugins/firebase";

export default {
  components: {
    SideNav,
  },
};
</script>
