<template>
    <div>
        <AuthHeader />
        <div class="register">
            <h2>新規登録</h2>
            <div class="form">
                <input v-model="username" type="text" placeholder="ユーザーネーム" />
                <input v-model="email" type="email" placeholder="メールアドレス" />
                <input v-model="password" type="password" placeholder="パスワード" />
                <button @click="register">新規登録</button>
            </div>
        </div>
    </div>
</template>

<script>
import AuthHeader from "~/components/AuthHeader.vue";
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    register() {
      if (!this.email || !this.password) {
        alert("メールアドレスまたはパスワードが入力されていません。");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          const sendData = {
            id: data.user.uid,
            name: this.name,
          };
          this.$axios.post("http://127.0.0.1:8000/api/v1/user", sendData);
          this.$router.replace("/login");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              alert("メールアドレスの形式が違います。");
              break;
            case "auth/email-already-in-use":
              alert("このメールアドレスはすでに使われています。");
              break;
            case "auth/weak-password":
              alert("パスワードは6文字以上で入力してください。");
              break;
            default:
              alert("エラーが起きました。しばらくしてから再度お試しください。");
              break;
          }
        });
    },
  },
};
</script>

<style scoped>
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  cursor: pointer;
}
.register {
  margin: 100px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
}

h2{
  color: black;
  font-weight: bold;
  text-align: center;
}
input {
  margin-top: 15px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  color: black;
}
.form {
  text-align: center;
}
.form button {
  margin-top: 15px;
}
.error {
  margin-top: 10px;
  color: red;
}
</style>