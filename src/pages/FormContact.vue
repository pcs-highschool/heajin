<template>
  <WebHeader/>
  <form action="">
    이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름 : <input type="text"><br>
    연 락 처 : <input type="number"><br>
    이 메 일 : <input type="email"><br>
    문의내용 : <input type="text" size="30" style="height:100px">
  </form>
</template>

<script>
import WebHeader from '../components/WebHeader.vue'

export default {
  components: {
    WebHeader,
  },
}
</script>

<style>

</style>