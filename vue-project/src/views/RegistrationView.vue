[
<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import axios from "axios";

export default {
  name: "RegistrationView",
  data() {
    return {
      user: {
        registration: [],
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isValidEmail: true,
        isValidPassword: true,
        isValidFirstName: true,
        isValidLastName: true,
      },
    };
  },
  methods: {
    submitForm() {
      this.isValidEmail = this.validateEmail();
      this.isValidPassword = this.validatePassword();
      this.isValidFirstName = this.validateFirstName();
      this.isValidLastName = this.validateLastName();

      if (
        this.isValidEmail &&
        this.isValidPassword &&
        this.isValidFirstName &&
        this.isValidLastName
      ) {
        console.log("Valid form");
      }
    },
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(this.user.email);
    },
    validatePassword() {
      //const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;
      // Password should be at least 8 characters long
      return this.user.password.length >= 8;
    },
    validateFirstName() {
      const regex = /^[a-zA-Z]/;
      return regex.test(this.user.firstName);
    },
    validateLastName() {
      const regex = /^[a-zA-Z]/;
      return regex.test(this.user.lastName);
    },

    registration() {
      axios({
        method: "post",
        url: "http://localhost:3000/user",
        data: {
          email: "username3@gmail.com",
          password: "password1234",
          firstName: "first3",
          lastName: "last3",
        },
      });
      console.log(this.user);
      if (response.status === 200) {
        console.log(response);
        if (response.data.length === 1) {
          this.$router.push("/");
        } else {
          this.errorMessage = "Wrong username or password.";
        }
      }
    },
  },
};
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full max-w-md">
      
          <form
            @submit.prevent="submitForm"
            class="mt-1 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p class="text-center text-lg font-medium">Registration</p>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="FirstName"
                class="block text-sm font-medium text-gray-700"
              >
              </label>
              <input
                type="text"
                placeholder="First name"
                v-model="user.firstName"
                id="firstName"
                name="firstName"
                :class="{ 'border-red-500': !user.isValidFirstName }"
                class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400 text-black"
              />
              <span
                v-if="!user.isValidFirstName"
                class="text-red-500 text-xs italic"
              >
                Please enter a valid first name.
              </span>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="LastName"
                class="block text-sm font-medium text-gray-700"
              >
              </label>
              <input
                type="text"
                placeholder="Last name"
                v-model="user.lastName"
                id="lastName"
                name="lastName"
                :class="{ 'border-red-500': !user.isValidLastName }"
                class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400 text-black"
              />
              <span
                v-if="!user.isValidLastName"
                class="text-red-500 text-xs italic"
              >
                Please enter a valid last name.
              </span>
            </div>
            <div class="col-span-6">
              <label
                for="Email"
                class="block text-sm font-medium text-gray-700"
              >
              </label>
              <input
                type="email"
                placeholder="Email"
                v-model="user.email"
                id="email"
                name="email"
                :class="{ 'border-red-500': !user.isValidEmail }"
                class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400 text-black"
              />
              <span
                v-if="!user.isValidEmail"
                class="text-red-500 text-xs italic"
              >
                Please enter a valid email address.
              </span>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="Password"
                class="block text-sm font-medium text-gray-700"
              >
              </label>
              <input
                type="password"
                placeholder="Password"
                class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400 text-black"
                v-model="user.password"
                id="password"
                name="password"
                :class="{ 'border-red-500': !user.isValidPassword }"
              />
              <span
                v-if="!user.isValidPassword"
                class="text-red-500 text-xs italic"
              >
                Please enter a valid password.
              </span>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                @click="registration"
                class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Create an account
              </button>
              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <router-link to="/login" class="text-gray-700 underline"
                  >Log in</router-link
                >
              </p>
            </div>
          </form>
       
      
    </div>
  </div>
</template>
<style></style>
