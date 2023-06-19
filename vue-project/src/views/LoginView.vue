<script>
export default {
    data() {
    return {
      loginEmail: '',
      loginPassword: '',
      isValidEmail: true,
      isValidPassword: true,
    };
  },
  name:"LoginView",

  methods: {
    submitForm() {
      this.isValidEmail = this.validateEmail();
      this.isValidPassword = this.validatePassword();

      if (this.isValidEmail && this.isValidPassword) {
        // Proceed with login logic or API call
        console.log('Valid form');
      }
    },
    validateEmail() {
      // Basic email validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(this.loginEmail);
    },
    validatePassword() {
      //const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;
      // Password should be at least 8 characters long
      return this.loginPassword.length >= 8;
    },
  },
}
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full max-w-md">
    <form @submit.prevent="submitForm"
      action=""
      class=" mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p class="text-center text-lg font-medium">Sign in to your account</p>
      <div class="mb-4">
        <label class="sr-only" for="email">
          Email
        </label>
        <input
          v-model="loginEmail"
          :class="{ 'border-red-500': !isValidEmail }"
          type="email"
          id="email"
          class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400"
          placeholder="Enter email"
        />
        <span v-if="!isValidEmail" class="text-red-500 text-xs italic">
          Please enter a valid email address.
        </span>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        </label>
        <input
          v-model="loginPassword"
          :class="{ 'border-red-500': !isValidPassword }"
          type="password"
          id="password"
          class="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border-2 border-slate-400"
          placeholder="Enter password"
        />
        <span v-if="!isValidPassword" class="text-red-500 text-xs italic">
          Password should be at least 8 characters long.
        </span>
      </div>
      <button
        type="submit"
        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>

      <p class="text-center text-sm text-gray-500">
        No account?
        <a class="underline" href="">Sign up</a>
      </p>
    </form>
  </div>
  </div>
  
</template>

<style>
</style>