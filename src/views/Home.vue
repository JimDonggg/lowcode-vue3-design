<template>
  <div class="home">
    <div>源码中单页面应用init只会加载一次，所以最好多页应用，或者改源码</div>
    <design />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Design from '../design-page/index.vue' // @ is an alias to /src

@Options({
  components: {
    Design,
  },
})
export default class Home extends Vue {}
</script>
