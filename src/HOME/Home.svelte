<script lang="ts">
    
    import car from "../lib/header/car.jpg";
    import About from "./About.svelte";
    import Footer from "./Footer.svelte";
    import Hover from "./Hover.svelte";
    import Sponser from "./Sponsers.svelte";
    import Nav from "../nav/Nav.svelte"
    import video from "../lib/about/vid4.mp4";
    import Gsap from "./Gsap.svelte"
    let wrap: HTMLDivElement, title: HTMLDivElement;
    let main: HTMLElement;
     
</script>


<Nav />
<div class="wrapentry" bind:this={wrap}>
    <div class="videowrap">
        <video autoplay muted loop>
            <source src={video} />
        </video>
    </div>

    <div class="entry">
        <h2 class="title" bind:this={title}>ReNew</h2>
    </div>
</div>

<!-- <main bind:this={main}>
    <div class="wrap">
        <div class="imgwrap">
            <img src={car} alt="car" />
        </div>
    </div>
</main> -->

<About />
<Hover />

<Sponser />
<Footer />


<style>
    
    .wrapentry {
        height: 200vh;
        width: 100vw;
        position: relative;
    }
    .videowrap {
        top: 0;
        position: sticky;
        width: 100vw;
    }
    video {
        width: 100%;
    }
    .entry {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        background-color: #000;
        color: #fff;
        font-size: 30vh;
        height: 100vh;
        width: 100vw;
        mix-blend-mode: exclusion;
        user-select: none;
    }
    .entry > h2 {
        margin: 0;
        font-weight: 900;
    }
    main {
        display: grid;
        justify-content: center;
        align-items: center;
        padding-top: 3em;
        padding-bottom:3em ;
        height: calc(100vh - 3em);
        width: 100vw;
    }
    

    .imgwrap {
        width: 90vw;
    }
    .imgwrap > img {
        object-fit: cover;
        width: 100%;
        border-radius: 2em;
    }
    @media screen and (max-width: 1000px) {
        main{
            height: fit-content;
        }
        .wrap{
            height: fit-content;
            border-radius: 1em;
        }
        .wrapentry{
            height: 50vh;
            overflow:hidden ;
        }
        .entry{
            font-size: 3em;
            height: 50vh;
        }
        .videowrap{
            width: 200vw;
            margin-left: -50%;
        }
    }
</style>
