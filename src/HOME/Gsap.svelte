<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        //snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        //end: () => "+=" + document.querySelector(".container").offsetWidth
      }
    });
  });
</script>

<div class="container">
  <div class="panel"><div></div></div>
  <div class="panel"><div></div></div>
  <div class="panel"><div></div></div>
  <div class="panel"><div></div></div>
  <div class="panel"><div></div></div>
  <div class="panel"><div></div></div>
  <div class="panel"><div></div></div>
</div>

<style>
  .container {
    width: 100vw;
    overflow: hidden;
    display: flex;
  }

  .panel {
    flex: none;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: start;
    font-size: 100px;
    
  }
  .panel>div{
    
    width: 80vw;
    height: 90vh;
    background-color: wheat;
    border-radius: 0% 10% 0% 0%;
  }
  /* .panel:nth-child(1) { background-color: red; }
  .panel:nth-child(2) { background-color: orange; }
  .panel:nth-child(3) { background-color: yellow; }
  .panel:nth-child(4) { background-color: green; }
  .panel:nth-child(5) { background-color: blue; }
  .panel:nth-child(6) { background-color: indigo; }
  .panel:nth-child(7) { background-color: violet; } */
</style>
