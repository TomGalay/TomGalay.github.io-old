<script setup>
import Navbar from './components/Navbar.vue'
import Introduction from './components/Introduction.vue'
import Skills from './components/Skills.vue'
import Highlights from './components/Highlights.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <!--<Introduction class="bg-gray-200" />-->
    <Introduction class="bg-[url('../../src/assets/img/bg-introduction.svg')] bg-cover bg-no-repeat bg-center" />
    <!--<Highlights class="bg-gradient-to-b from-gray-200" />-->
    <Highlights class="bg-gradient-to-b from-gray-100" />
    <Skills class="" />
    <Experience class="" />
    <Projects class="bg-gray-100" />
    <Education class="" />
    <Footer class="" />
  </main>
</template>

<style scoped>
</style>
