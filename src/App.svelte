<script>
  import Home from "./HOME/Home.svelte";
  import Team from "./Other routes/Team2.svelte";
  import { Route, router } from "tinro";
  import Dashboard from "./Other routes/Dashboard.svelte";
  import ThreeD from "./excess/scene.svelte";
  import Nav from "./nav/Nav.svelte";
  import Lenis from "lenis";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  router.subscribe((_) => window.scrollTo(0, 0));
  router.mode.hash();

  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 700);
  });

  gsap.ticker.lagSmoothing(0);
</script>

<main>
  <Route path="/">
    <Home />
    <!-- <ThreeD /> -->
  </Route>

  <Route path="/team/*">
    <Nav />
    <Team />
  </Route>

  <Route path="/dashboard/*">
    <Nav />
    <Dashboard />
  </Route>
</main>

<style>
</style>
