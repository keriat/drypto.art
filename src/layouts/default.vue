<template>
  <div id="wrapper">
      <block-header/>
    <!-- content begin -->
    <nuxt/>
    <!-- content close -->
    <a href="#" id="back-to-top"/>
    <block-footer/>
    <script src="/js/bootstrap.min.js" defer async</script>
    <script src="/js/bootstrap.bundle.min.js" defer async></script>
    <script src="/js/wow.min.js" defer async></script>
    <script src="/js/jquery.isotope.min.js" defer async></script>
    <script src="/js/easing.js" defer async></script>
    <script src="/js/owl.carousel.min.js" defer async></script>
    <script src="/js/jquery.magnific-popup.min.js" defer async></script>
    <script src="/js/enquire.min.js" defer async></script>
    <script src="/js/jquery.plugin.js" defer async></script>
    <script src="/js/jquery.countTo.js" defer async></script>
    <script src="/js/jquery.lazy.min.js" defer async></script>
    <script src="/js/jquery.lazy.plugins.min.js" defer async></script>
    <script src="/js/designesia.js" defer async></script>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head: {
    bodyAttrs: {
    }
  }
});
</script>
