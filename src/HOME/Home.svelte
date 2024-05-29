<script lang="ts">
    
    import car from "../lib/header/car.jpg";
    import About from "./About.svelte";
    import Footer from "./Footer.svelte";
    import Hover from "./Hover.svelte";
    import Sponser from "./Sponsers.svelte";
    import Nav from "../nav/Nav.svelte"
    import video from "../lib/about/video.mov";
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

<main bind:this={main}>
    <div class="wrap">
        <div class="imgwrap">
            <img src={car} alt="car" />
        </div>
    </div>
</main>

<About />
<Hover />
<Sponser />
<Footer />

<style>
    
    

    main {
        font-family: "Oswald", sans-serif;
        display: grid;
        justify-content: center;
        align-items: center;
        padding-top: 3em;
        height: calc(100vh - 3em);
        width: 100vw;
        transform: scale(1);
        transition: all 0.5s;
    }
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

    .wrap {
        display: grid;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 90vw;
        border-radius: 5em;
        color: rgb(255, 255, 255);
        overflow: hidden;
    }

    .imgwrap {
        width: 90vw;
    }
    .imgwrap > img {
        object-fit: cover;
        width: 100%;
    }
    @media screen and (max-width: 1000px) {
        main{
            height: 50vh;
        }
        .wrap{
            height: fit-content;
            border-radius: 0.5em;
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
