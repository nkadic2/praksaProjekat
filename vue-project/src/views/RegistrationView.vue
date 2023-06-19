<script>
//import { required, email, minLength, sameAs } from '@vuelidate/validators'
//import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
//import { VuelidatePlugin } from '@vuelidate/core';

import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
  name:"RegistrationView",
    data() {
        return {
            user: {
              registration: [],
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            submitted: false
        };
    },
    validations: {
        user: {
            firstName: { required },
            lastName: { required },
            email: { required, email },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs('password') }
        }
    },
    methods: {
        handleSubmit(e) {
            this.submitted = true;
            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
        }
    }
}
</script>

<template>
   <div class="flex jutify-centers items-center w-screen h-screen">
   <div class="w-full h-full max-w-xxxl">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <div class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6" >
          <form @submit.prevent="handleSubmit" class="mt-1 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p class="text-center text-lg font-medium">Registration</p>
            <div class="col-span-6 sm:col-span-3" >
              <label
                for="FirstName"
                class="block text-sm font-medium text-gray-700"
              >
              </label>
              <input
                type="text"
                placeholder="First name"

                class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400"
              />
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

                v-model="user.lastName" id="lastName" name="lastName" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
                class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400"
              />
            </div>
            <div class="col-span-6">
              <label for="Email" class="block text-sm font-medium text-gray-700">
              </label>
              <input
                type="email"
                placeholder="Email"
                v-model="user.email" id="email" name="email" :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400"
              />
              <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Email is required</span>
                                    <span v-if="!$v.user.email.email">Email is invalid</span>
                                </div>
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

                class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400"
                v-model="user.password" id="password" name="password" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Password is required</span>
                                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                </div>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="PasswordConfirmation"
                class="block text-sm font-medium text-gray-700"
              >
              </label>
              <input
                type="password"
                placeholder="Password Confirmation"

                class="w-full rounded-lg p-4 pe-12 text-sm shadow-sms border-2 border-slate-400"
                v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                                <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                                    <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                                </div>
              <p v-if="errorMessage" style="color:red">{{ errorMessage }}</p>
            </div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Create an account
              </button>
              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <router-link to="/login" class="text-gray-700 underline">Log in</router-link>
              </p>
            </div>
          </form>
        </div>
    </div>  
  </div>    
</div>
</template>
<style>
</style>