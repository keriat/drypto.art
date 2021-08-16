<template>
  <div id="wrapper">
    <link id="bootstrap" href="/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link id="bootstrap-grid" href="/css/bootstrap-grid.min.css" rel="stylesheet" type="text/css"/>
    <link id="bootstrap-reboot" href="/css/bootstrap-reboot.min.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animate.css" rel="stylesheet" type="text/css"/>
    <link href="/css/owl.css" rel="stylesheet" type="text/css"/>
    <link href="/css/owl.theme.css" rel="stylesheet" type="text/css"/>
    <link href="/css/owl.transitions.css" rel="stylesheet" type="text/css"/>
    <link href="/css/magnific-popup.css" rel="stylesheet" type="text/css"/>
    <link href="/css/jquery.countdown.css" rel="stylesheet" type="text/css"/>
    <link href="/css/coloring.css" rel="stylesheet" type="text/css"/>
    <block-header/>
    <!-- content begin -->
    <nuxt/>
    <!-- content close -->
    <a href="#" id="back-to-top"/>
    <block-footer/>
    <script src="/js/jquery.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>
    <script src="/js/wow.min.js"></script>
    <script src="/js/jquery.isotope.min.js"></script>
    <script src="/js/easing.js"></script>
    <script src="/js/owl.carousel.js"></script>
    <script src="/js/jquery.magnific-popup.min.js"></script>
    <script src="/js/enquire.min.js"></script>
    <script src="/js/jquery.plugin.js"></script>
    <script src="/js/jquery.countTo.js"></script>
    <script src="/js/jquery.countdown.js"></script>
    <script src="/js/jquery.lazy.min.js"></script>
    <script src="/js/jquery.lazy.plugins.min.js"></script>
    <script src="/js/designesia.js"></script>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head: {
    bodyAttrs: {
      class: "dark-scheme de-grey"
    }
  }
});
</script>
