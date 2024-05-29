<script>
  import Home from "./HOME/Home.svelte";
  import Team from "./excess/Team2.svelte";
  import { Route, router } from "tinro";
  import Dashboard from "./Other routes/Dashboard.svelte";
  import ThreeD from "./excess/scene.svelte"
  import Nav from "./nav/Nav.svelte"
  router.subscribe(_ => window.scrollTo(0, 0));

</script>

<main>
  <Route path="/">
    <Home />
    <!-- <ThreeD /> -->
    
  </Route>

  <Route path="/team">
    <Nav />
    <Team />
  </Route>

  <Route path="/dashboard">
    <Nav />
    <Dashboard />
  </Route>
</main>

<style>
  
</style>
