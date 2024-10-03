<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li>
          <button class="button m-4" :class="{ 'is-active': !register }" @click="register = false">Login</button>
        </li>
        <li>
          <button class="button" :class="{ 'is-active': register }" @click="register = true">Register</button>
        </li>
      </ul>
    </div>

    <div class="card">
      <div class="card-content">
        <h3 class="title has-text-centered">{{ formTitle }}</h3>

        <form class="form" @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="credentials.email" class="input" type="email" placeholder="Example@mail.ru" />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="credentials.password" class="input" type="password" placeholder="****" />
            </div>
          </div>

          <div class="field">
            <p class="control">
              <button type="submit" class="button is-success is-pulled-right">{{ formTitle }}</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';

// register / login
const register = ref(false);

// form title
const formTitle = computed(() => {
  return register.value ? 'Register' : 'Login';
});

// submit Form fn
const onSubmit = () => {
  if (!credentials.email || !credentials.password) alert('please type something..');
  else {
    if (register.value) {
      console.log('register please');
    } else {
      console.log('login please');
    }
  }
};

// credentials
const credentials = reactive({
  email: '',
  password: '',
});
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
