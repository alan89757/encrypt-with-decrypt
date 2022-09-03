<template>
  <div id="app">
    <div>xxx系统</div>
    <div>
      用户名：<input v-model="username"/>
    </div>
    <div>
      密码：<input v-model="password"/>
    </div>
    <div>
      <button @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
import { encrypt } from './utils/encrypt';

export default {
  name: 'App',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  mounted() {
  },
  methods: {
    submit() {
      const password = encrypt(this.password);
      const data = {
        username: this.username,
        password,
      };
      console.log('dataq--', data)
      fetch('http://localhost:3000/user/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(response=> response.json()).then((data)=> {
        console.log('data---', data)
      })
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
