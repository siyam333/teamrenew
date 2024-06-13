<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    
    let scrollContainer;
  
    onMount(() => {
      // Set up the horizontal scrolling animation
      gsap.to(scrollContainer, {
        scrollLeft: scrollContainer.scrollWidth - scrollContainer.clientWidth,
        duration: 10,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });
    });
  </script>
  
  <div bind:this={scrollContainer} class="scroll-container">
    <div class="scroll-content">
      <div class="box" style="background-color: red; width: 200px; height: 200px;"></div>
      <div class="box" style="background-color: green; width: 200px; height: 200px;"></div>
      <div class="box" style="background-color: blue; width: 200px; height: 200px;"></div>
      <div class="box" style="background-color: yellow; width: 200px; height: 200px;"></div>
      <!-- Add more content as needed -->
    </div>
  </div>
  
  <style>
    .scroll-container {
      overflow-x: hidden;
      white-space: nowrap;
      width: 100vw;
      height: 100vh;
    }
  
    .scroll-content {
      display: inline-block;
    }
  
    .box {
      display: inline-block;
      margin-right: 20px; /* Spacing between boxes */
    }
  </style>
  