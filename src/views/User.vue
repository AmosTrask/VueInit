<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.firstName}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    currentUser() {
      return this.$store.state.User.user;
    },
  },
};
</script>
