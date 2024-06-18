<template>
  <router-view/>
</template>

<script>
import Prueba from './views/Prueba.vue'
import Test from './views/Test.vue'

export default {
  name:'App',
  components: {
    Test, Prueba
  }
}
</script>

