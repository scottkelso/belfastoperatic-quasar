/* eslint-disable */
<template>
  <amplify-authenticator>
    <img id="login-logo" src="~assets/boc-logo.png">
    // eslint-disable-next-line
    <amplify-sign-up
      slot="sign-up"
      username-alias="email"
      :formFields="formFields"
    ></amplify-sign-up>
    // eslint-disable-next-line
    <amplify-sign-in slot="sign-in" username-alias="email"></amplify-sign-in>
  </amplify-authenticator>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'AuthStateApp',
  created () {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData
    })
  },
  data () {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
      formFields: [
        {
          type: 'email',
          label: 'Custom Email Label',
          placeholder: 'Custom email placeholder',
          inputProps: { required: true, autocomplete: 'username' }
        },
        {
          type: 'password',
          label: 'Custom Password Label',
          placeholder: 'Custom password placeholder',
          inputProps: { required: true, autocomplete: 'new-password' }
        },
        {
          type: 'phone_number',
          label: 'Custom Phone Label',
          placeholder: 'Custom phone placeholder'
        }
      ]
    }
  },
  beforeUnmount () {
    this.unsubscribeAuth()
  }
}
</script>

<style>
body{
  background: rgb(4,46,111);
  background: linear-gradient(180deg, rgba(4,46,111,1) 0%, rgba(7,74,154,1) 35%, rgba(0,212,255,1) 100%);
}
</style>
