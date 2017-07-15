<template>
  <div id="app">
    <img :src="defaultImage" style="width: 100px;height: 100px">
    <VueImageUploadCroppie :defaultImage.sync="defaultImage" :height="100" :width="100"></VueImageUploadCroppie>
  </div>
</template>

<script>
import VueImageUploadCroppie from './components/VueImageUploadCroppie'
export default {
  name: 'app',
  data() {
  	return {
  		'defaultImage': ''
  	},
    watch: {
      'defaultImage': function(value) {
          if (value) {
            // do whatever you want with image value,(upload ..)
          }
      }
    }
  },
  components: {
    VueImageUploadCroppie
  }
}
</script>
