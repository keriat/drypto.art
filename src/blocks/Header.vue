<template>
  <!-- header begin -->
  <header class="transparent scroll-dark">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="de-flex sm-pt10">
            <div class="de-flex-col">
              <div class="de-flex-col">
                <!-- logo begin -->
                <div id="logo">
                  <nuxt-link to="/">
                    <img alt="Drypto.art" width="200" class="logo" src="@/assets/images/logo.png"/>
                    <img alt="Drypto.art" width="200" class="logo-2" src="@/assets/images/logo.png"/>
                  </nuxt-link>
                </div>
                <!-- logo close -->
              </div>
            </div>
            <div class="de-flex-col header-col-mid">
              <!-- mainmenu begin -->
              <ul id="mainmenu">
                <li>
                  <nuxt-link to="/">Home<span></span></nuxt-link>
                  <ul>
                    <li>
                      <nuxt-link to="/grey-index">New: Homepage Grey</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/index">Homepage 1</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/index-2">Homepage 2</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/index-3">Homepage 3</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/index-4">Homepage 4</nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <nuxt-link to="/explore">Explore<span></span></nuxt-link>
                  <ul>
                    <li>
                      <nuxt-link to="/explore">Explore</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/collection">Collections</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/item-details">Item Details</nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <nuxt-link to="#">Pages<span></span></nuxt-link>
                  <ul>
                    <li>
                      <nuxt-link to="/author">Author</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/wallet">Wallet</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/create">Create</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/news">News</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/gallery">Gallery</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/login">Login</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/login-2">Login 2</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/register">Register</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/contact">Contact Us</nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <nuxt-link to="/activity">Activity<span></span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Elements<span></span></nuxt-link>
                  <ul>
                    <li>
                      <nuxt-link to="/icons-elegant">Elegant Icons</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/icons-etline">Etline Icons</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/icons-font-awesome">Font Awesome Icons</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/accordion">Accordion</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/alerts">Alerts</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/counters">Counters</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/modal">Modal</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/popover">Popover</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/pricing-table">Pricing Table</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/progress-bar">Progress Bar</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/tabs">Tabs</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/tooltips">Tooltips</nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="menu_side_area">
                <nuxt-link to="/login" class="btn-main">Connect Wallet</nuxt-link>
                <span id="menu-btn"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header close -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>
