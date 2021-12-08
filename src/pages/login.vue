<template>
  <div class="no-bottom no-top" id="content">
    <div id="top"></div>

    <section class="full-height relative no-top no-bottom vertical-center" data-bgimage="url('/images/background/subheader.jpg')" data-stellar-background-ratio=".5">
      <div class="overlay-gradient t50">
        <div class="center-y relative">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 text-light wow fadeInRight" data-wow-delay=".5s">
                <div class="spacer-10"></div>
                <h1>Create, digitize, collect or sell digital masterpieces.</h1>
                <p class="lead"></p>
              </div>

              <div class="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
                <div class="box-rounded padding40" data-bgcolor="#ffffff">
                  <form name="contactForm" id="contact_form" class="form-border" @submit.prevent="userLogin">
                    <h3 class="form-header">Introduce yourself</h3>
                    <p>
                      The authorization made simple — enter your email, open mail app and open the link received in the email to login
                    </p>
                    <div class="field-set">
                      <input name="email" id="email" class="form-control"
                        v-model="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div class="spacer-single"></div>
                    <div class="field-set">
                      <input type="submit" id="send_message" value="Login" class="btn btn-main btn-fullwidth color-2">
                    </div>

                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  middleware: "",
  mounted() {
    // If the user is authenticated, redirect to profile page.
    if (this.$store.state.authenticated) {
      this.$router.push('/profile')
    }
  },
  methods: {
    async userLogin() {
      this.$store
        .dispatch('login', {
          email: this.email,
        })
        .then(() => {
          this.$router.push('/profile')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
.login {
  max-width: 20rem;
  margin: 40px auto 0;
  padding: 1rem;
  border: 1px solid #dfe1e5;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 0px 6px 6px #f7f7f7;
  box-sizing: border-box;
}
form,
label {
  display: flex;
  flex-flow: column;
  text-align: center;
}
.form-header {
  font-size: 22px;
  margin: 25px 0;
  font-weight: 500;
}
.input-wrapper {
  width: 80%;
  margin: 0 auto 20px;
}
.input-email {
  padding: 7px 16px;
  border-radius: 10px;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 400;
}
.input-email:focus,
.input-email:hover {
  border: 1px solid #6851ff;
}
.btn-wrapper {
  margin: 0px auto 25px;
}
.btn-submit {
  padding: 6px 24px;
  border: 1px solid transparent;
  border-radius: 2147483647px;
  background-color: rgba(103, 81, 255, 1);
  color: #fff;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: 400;
}
</style>
