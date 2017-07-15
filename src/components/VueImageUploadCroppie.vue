<template>
<div class="wrap">
    <div class="container">
        <vodal :show="show" animation="fade" @hide="show = false" :height="height + 400" :width="width + 300">
            <div class="vodal-header">Crop Image</div>
            <div id="croppie" class="vodal-body"></div>
            <div class="vodal-footer">
              <button class="vodal-confirm-btn" @click="emitUpload">choose image</button>
              <button class="vodal-cancel-btn" @click="cropeImage">confirm cutting</button>
            </div>
            <input type="file" ref="upload" value="Choose a file" style="display:none" accept="image/*" v-on:change="setUpFileUploader">
        </vodal>
        <button @click="showModal">modal</button>
    </div>
</div>
</template>
<script>
import Croppie from 'croppie'
import Vodal from 'vodal'

export default {
    props: {
      'defaultImage': {
          type: String,
          default: ''
      },
      'height': {
          type: Number,
          default: 200
      },
      'circle': {
          type: Boolean,
          default: false
      },
      'width': {
          type: Number,
          default: 200
      }
    },
    data () {
      return {
          croppie: null,
          image: null,
          show: false
      }
    },
    mounted () {
      this.$on('imgUploaded', function (imageData) {
        this.croppie.destroy()
        this.image = imageData
        this.setUpCroppie()
      })
      this.image = this.defaultImage
      this.setUpCroppie()
    },
    methods: {
        showModal() {
          this.show = true
        },
        hide() {
          this.show = false
        },
        emitUpload() {
          this.$refs.upload.click()
        },
        cropeImage () {
          this.croppie.result({
            type: 'canvas',
            size: 'viewport',
            quality: 1
          }).then((response) => {
              this.image = response
              this.$emit('update:defaultImage', response)
              this.show = false
          })
        },
        setUpCroppie () {
          let el = document.getElementById('croppie')
          this.croppie = new Croppie(el, {
            viewport: {
                width: this.width,
                height: this.height,
                type: this.circle ? 'circle' : 'square'
            },
            boundary: { width: this.width + 150, height: this.height + 150 },
            showZoomer: true,
            enableOrientation: true
          })
          this.croppie.bind({
            url: this.image
          })
        },
        setUpFileUploader (e) {
          let files = e.target.files || e.dataTransfer.files
          if (!files.length) {
            return
          }
          this.createImage(files[0])
        },
        createImage (file) {
          var image = new Image()
          var reader = new FileReader()
          var vm = this

          reader.onload = (e) => {
            vm.image = e.target.result
            vm.$emit('imgUploaded', e.target.result)
          }
          reader.readAsDataURL(file)
        }
    },
    components: {
        Vodal
    }
 }
</script>
<style src="croppie/croppie.css"></style>
<style>
@import "~vodal/common.css";
*,
*:before,
*:after {
    box-sizing: border-box;
}
html {
    font-family: "Open Sans",sans-serif;
}
a {
    text-decoration: none;
    background-color: transparent;
}
a:hover {
    outline: 0;
    text-decoration: none;
}
a:focus {
    outline: none;
    text-decoration: none;
}
button {
    color: inherit;
    font: inherit;
    margin: 0;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
}
button:focus {
    outline: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}
/* -- container -- */
#app,
.wrap {
    height: 100%;
}
.container {
    width: 100%;
}
.title,
.intro {
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.title {
    font-size: 70px;
    margin: 0;
}
.intro {
    font-size: 30px;
    margin: 15px 10px 20px;
}
.btn-area {
    width: 600px;
    margin: 0 auto;
}
/* -- scale animation -- */
@keyframes scale {
    from {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
    }
    to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
}
.scale {
    animation: scale both .4s cubic-bezier(0.4, 0, 0, 1.5);
}
/* -- btn -- */
.btn {
    display: inline-block;
    color: #0a1855;
    width: 140px;
    padding: 0;
    font-size: 18px;
    background: #fff;
    margin: 20px 30px;
    line-height: 42px;
    user-select: none;
    text-align: center;
    border: none;
    border-radius: 4px;
}
.btn:hover {
    box-shadow: 0 0 50px rgba(255,255,255,.3);
}
.btn:active {
    box-shadow: 0 0 50px rgba(255,255,255,.3), inset 2px 2px 2px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0);
}
@media (max-width: 600px) {
    .container {
        padding-top: 30px!important;
    }
    .title {
        font-size: 40px;
    }
    .intro {
        font-size: 20px;
    }
    .btn {
        width: 35%;
        font-size: 16px;
        line-height: 34px;
        margin: 10px 0 10px 10%;
    }
    .btn-area {
        width: 100%;
    }
}
/* -- title -- */
.vodal-header {
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9e9e9;
}
/* -- body -- */
.vodal-body {
    padding-top: 15px;
}
/** -- footer -- */
.vodal-footer {
  text-align: center;
}
/* -- button -- */
.vodal-cancel-btn, .vodal-confirm-btn {
    font: inherit;
    bottom: 16px;
    padding: 4px 15px;
    border-radius: 3px;
    transition: background .2s;
    border: 1px solid #03a9f4;
}
.vodal-confirm-btn {
    color: #fff;
    background: #03a9f4;
}
.vodal-confirm-btn:hover {
    background: #0098e3;
}
.vodal-cancel-btn {
    color: #03a9f4;
    background: #fff;
}
.vodal-cancel-btn:hover {
    background: #fafafa;
}
.vodal-cancel-btn:focus, .vodal-confirm-btn:focus {
    outline: none;
}
.vodal-confirm-btn:active {
    background: #0087d2;
}
.vodal-cancel-btn:active {
    background: #fafafa;
    box-shadow: inset 1px 1px 1px rgba(0,0,0,.2),0 0 1px transparent;
}
.croppie-container {
    width: initial;
    height: initial;
}
</style>