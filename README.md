[![npm](https://img.shields.io/npm/dt/vue-image-upload-croppie.svg?style=plastic)](https://www.npmjs.com/package/vue-image-upload-croppie)
[![GitHub stars](https://img.shields.io/github/stars/akulubala/vue-image-upload-croppie.svg?style=social&label=Star&style=plastic)]()
[![license](https://img.shields.io/github/license/akulubala/vue-image-upload-croppie.svg?style=plastic)]()
# vue-image-upload-croppie

> Crope Image And Get Base64 Image Datas

## Install 

``` npm i vue-image-upload-croppie --save ```

## Import

`import VueImageUploadCroppi from 'vue-image-upload-croppie'` 

## Usage Example

```
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

```
