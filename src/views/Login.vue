<template>
  <div class="main">
    <h1>Login</h1>
    <form novalidate @submit.prevent="onSubmit()">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="Username" v-model="model.username"/>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" v-model="model.password"/>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button type="submit" class="button is-success">Login</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import store from '../store';
import router from '../router';

export default {
  setup() {
    const model = reactive({ username: '', password: '' });

    async function onSubmit() {
      await store.dispatch('User/login', model);
      if (store.getters['User/isLoggedIn']) {
        router.push({ name: 'User' });
      }
    }

    return {
      model,
      onSubmit,
    };
  },
};
</script>

<style lang="scss">
h1 {
  font-size: 2em;
  margin-block: 1em;
}

.main {
  width: 25%;
  text-align: center;
  margin: auto;
}

.field {
  margin: 1em;
}
</style>
