<script lang="ts">
    import shell from "../lib/about/shell.svg";
    import renew from "../lib/about/renew.png";
    import target from "../lib/about/target.png";
    import vision from "../lib/about/vision.png";
    import { fade } from "svelte/transition";

    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    

    let i = 0;
    let words = [
        `Powered with HYDROGEN fuel cell`,
        `Own manufactured Motor Controller For BLDC`,
    ];
    let word = writable(words[1]);

    roll();
    function roll() {
        setTimeout(() => {
            word.set(words[i]);

            i++;
            if (i >= words.length) {
                i = 0;
            }
            roll();
        }, 4000);
    }

    let img: HTMLDivElement, des: HTMLDivElement;

    function zoom() {
        des.style.transform = "scale(1.05)";
        des.style.transition = "all 0.5s";
    }

    function zoomout() {
        des.style.transform = "scale(1)";
        des.style.transition = "all 1s";
    }

    function zoom1() {
        img.style.transform = "scale(1.05)";
        img.style.transition = "all 0.5s";
    }

    function zoomout1() {
        img.style.transform = "scale(1)";
        img.style.transition = "all 1s";
    }

    function entry() {
        img.style.transform = "translateY(0em)";
        des.style.transform = "translateY(0em)";
    }

    function exit() {}

    let observer: IntersectionObserver | null = null;

    function viewport(element: HTMLElement) {
        if (typeof IntersectionObserver !== "undefined") {
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const event = entry.isIntersecting ? "entry" : "exit";
                    entry.target.dispatchEvent(new CustomEvent(event));
                });
            });

            observer.observe(element);
        } else {
            // Fallback behavior for environments without IntersectionObserver
            console.warn(
                "IntersectionObserver is not supported on this environment.",
            );
            // You might want to handle the case where IntersectionObserver is not available.
        }
    }
</script>

<div class="abtus">
    <div>
        <img src={vision} alt="" />
        <p>
            <span>Vision</span><br> To pioneer the next generation of solutions by solving the problems of tomorrow
        </p>
    </div>
    <div>
        <img src={target} alt="" />
        <p>
            <span>Mission</span><br>To create the most energy efficient electric vehicle while incorporating cutting edge technology. 
        </p>
    </div>
    
</div>



<main>
    <div class="wrap" use:viewport on:entry={entry} on:exit={exit}>
        
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="description"
            bind:this={des}
            on:mouseenter={zoom}
            on:mouseleave={zoomout}
        >
            <p>
                Shell Eco-marathon is one of the world’s leading
                energy-efficiency engineering programmes for students. It aims
                to push the boundaries of what is technically possible and
                inspire young people to become leading scientists and engineers
                of future energy solutions. <br /><br />
                The programme provides a platform for high school and university
                teams to explore every aspect of design and technology, using their
                Science, Technology, Engineering, and Maths (STEM) skills to build
                their own ultra-energy-efficient cars, and then take them out on
                the track in competition. <br /><br />
                This time we team <span class="team_name">ReNew</span>
                representing
                <a href="https://www.kct.ac.in/"
                    >Kumaraguru College of Technology</a
                > are participating in this prestegious competetion to show what
                our institution can bring out.
            </p>
        </div>
        
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="images"
            bind:this={img}
            on:mouseenter={zoom1}
            on:mouseleave={zoomout1}
        >
            <div><img src={shell} alt="" /></div>
            <div><img src={renew} alt="" /></div>
        </div>
    </div>
</main>

<div class="animate">
    {#key $word}
        <span
            class="wholerollwrap"
            in:fade={{ duration: 4000 }}
            out:fade={{ duration: 0 }}
        >
            <span>{$word}</span>
        </span>
    {/key}
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@300&display=swap");
    .abtus {
        height: 15em;
        padding: 2em;
        margin: 2em;
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        flex-direction: row;
        border-top: solid 0.3em #000;
        border-bottom: solid 0.3em #000;
    }

    .abtus > div {
        
        flex-grow: 1;
        height: 15em;
        width: 15em;
        padding: 0.5em;
        border-right: solid 0.3em #000;
    }
    .abtus > div>img{
        width: 4em;
    }
    .abtus > div>p{
        text-wrap: wrap;
    }
    .abtus > div:nth-child(2) {
        border-right: none;
    }

    
    main {
        display: grid;
        justify-content: center;
        align-content: center;
        padding-top: 6em;
        height: fit-content;
    }
    .wrap {
        font-family: "Poppins", sans-serif;
        width: 80vw;
        display: flex;
        gap: 2em;
        flex-wrap: wrap;
        justify-content: center;
    }
    .wholerollwrap {
        display: inline-flex;
        align-items: center;
    }
    .description {
        height: fit-content;
        width: 40em;
        background-color: #9ed8db;
        color: rgb(0, 0, 0);
        font-weight: 500;
        border-radius: 3em;
        padding: 2em;
        transform: translateY(7em);
        transition: all 2s;
    }
    .description:hover {
        transform: translateX(2em);
    }
    .description > p {
        font-size: 1.3em;
    }
    .images {
        height: 20em;
        width: 12em;
        display: grid;
        align-items: center;
        background-color: #467599;
        padding: 2em;
        border-radius: 3em;
        transform: translateY(7em);
        transition: all 3s;
    }

    span {
        font-size: 2em;
    }
    .team_name {
        font-weight: 800;
        font-size: 1em;
    }
    a {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-weight: 900;
    }
    .animate {
        height: 60vh;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    @media screen and (max-width: 1000px) {
        .abtus {
            flex-direction: column;
            height: fit-content;
            border-top: none;
            border-bottom: none;
        }
        .abtus > div {
            border-top: solid 0.3em #000;
            border-right: none;
            width: 100%;
            padding: 1em 0em 0em 0em;
        }
        .abtus > div:nth-child(3) {
            border-top: solid 0.3em #000;
            border-bottom: solid 0.3em #000;
        }
    }

    @media screen and (max-width: 800px) {
        main{
            padding-top: 0em;
        }
        .animate {
            height: 20em;
            border-top: none;
            border-bottom: none;
        }
        .wrapentry {
            display: none;
            visibility: hidden;
            min-width: 15em;
        }
        .description > p {
            font-size: 1em;
        }

        span {
            font-size: 1.3em;
        }
        .images {
            width: 10em;
        }
        .images > div > img {
            width: 10em;
        }
        .wrap{
            width: 90vw;
        }
        .description{
            padding: 1em;
        }
    }
</style>
