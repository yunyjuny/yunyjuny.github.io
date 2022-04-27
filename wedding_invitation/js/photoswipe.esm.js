<script type="module">
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();
</script>