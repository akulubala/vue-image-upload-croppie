import VueImageUploadCroppie from './components/VueImageUploadCroppie'

export default VueImageUploadCroppie;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VueImageUploadCroppie', VueImageUploadCroppie);
}