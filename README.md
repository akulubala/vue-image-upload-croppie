[![npm](https://img.shields.io/npm/dt/vue-image-upload-croppie.svg?style=plastic)](https://www.npmjs.com/package/vue-image-upload-croppie)
[![GitHub stars](https://img.shields.io/github/stars/akulubala/vue-image-upload-croppie.svg?style=social&label=Star&style=plastic)]()
[![license](https://img.shields.io/github/license/akulubala/vue-image-upload-croppie.svg?style=plastic)]()
# vue-image-upload-croppie

> Crope Image And Get Base64 Image Datas

## Preview

![crop preview](https://github.com/akulubala/vue-image-upload-croppie/raw/master/preview.png "Preview")

## Install 

``` npm i vue-image-upload-croppie --save ```

## Import

`import VueImageUploadCroppi from 'vue-image-upload-croppie'` 

## Usage Example

```
<template>
  <div id="app" style="text-align: center">
    <img :src="defaultImage" style="width: 100px;height: 100px">
    <VueImageUploadCroppie :defaultImage.sync="defaultImage" :height="100" :width="100" :circle="true" :trans="trans"></VueImageUploadCroppie>
  </div>
</template>

<script>
import VueImageUploadCroppie from './components/VueImageUploadCroppie'
export default {
  name: 'app',
  data() {
    return {
      'defaultImage': '',
      'trans': { 
          'cropImage': '裁剪图片', 
          'chooseImage':'选择图片', 
          'confirmCutting': '确认裁剪'
      }
    }
  },
  watch: {
      'defaultImage': function(value) {
          if (value) {
            // do whatever you want with image value,(upload ..)
          }
      }
  },
  components: {
    VueImageUploadCroppie
  }
}
</script>
```

> props: height, width, circle, trans all optional
> default value of them are 
```
props: {
  'height': {
      type: Number,
      default: 200
  },
  'circle': { // crop circle or square image
      type: Boolean,
      default: false
  },
  'width': {
      type: Number,
      default: 200
  },
  'trans': { // button text translation
      type: Object,
      default: function() {
        return  { 
          'cropImage': 'Crop Image', 
          'chooseImage':'Choose Image', 
          'confirmCutting': 'Confirm Cutting'
        }
      }
  }
}
```
