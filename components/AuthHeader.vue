<template>
    <div class="header">
        <div class="left">
            <img class="logo" src="../assets/logo.png" />
        </div>
        <div class="right">
            <Nuxt-link to="/register">新規登録</Nuxt-link>
            <Nuxt-link to="/login">ログイン</Nuxt-link>
        </div>
    </div>
</template>

<style scoped>
.right {
  margin-right: 20px;
  cursor: pointer;
}
.right a {
    text-decoration: none;
    padding-left: 20px;
}
.header {
  margin: 20px;
}
.logo {
  width: 150px;
  cursor: pointer;
}
.header {
  display: flex;
  justify-content: space-between;
}


</style>