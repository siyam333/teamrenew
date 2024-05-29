<script lang="ts">
    import { onMount } from "svelte";
    import maxon from "../lib/specs/maxon.png";
    import hyd from "../lib/specs/hydrogen.png";
    let one: HTMLDivElement,
        two: HTMLDivElement,
        left: HTMLDivElement,
        right: HTMLDivElement,
        left_word: HTMLDivElement,
        right_word: HTMLDivElement;
    onMount(() => {
        left.addEventListener("mouseover", () => {
            if (window.innerWidth > 1000) {
                right.style.width = "20em";
                right.style.height = "30em";
                left.style.width = "40em";
                left.style.height = "20em";
                right_word.style.width = "20em";
                left_word.style.width = "40em";
                right_word.style.transition = "all 1s";
                left_word.style.transition = "all 1s";
                right.style.transition = "all 1s";
                left.style.transition = "all 1s";
                left_word.style.filter = "blur(0em)";
                right_word.style.filter = "blur(1.5em)";
            }
        });

        right.addEventListener("mouseover", () => {
            if (window.innerWidth > 1000) {
                left.style.width = "20em";
                left.style.height = "30em";
                right.style.width = "40em";
                right.style.height = "20em";
                right_word.style.width = "40em";
                left_word.style.width = "20em";
                right_word.style.transition = "all 1s";
                left_word.style.transition = "all 1s";
                left.style.transition = "all 1s";
                right.style.transition = "all 1s";
                left_word.style.filter = "blur(1.5em)";
                right_word.style.filter = "blur(0)";
            }
        });
    });
</script>

<main>
    <div class="scalable" bind:this={one}>
        <div class="imagewrap" bind:this={left}>
            <img src={maxon} alt="" />
        </div>
        <div class="des" bind:this={left_word}>
            <p>
                The maxon EC-i 52 brushless motor is a high-performance drive
                designed for industrial applications.
            </p>
        </div>
    </div>
    <div class="scalable" bind:this={two}>
        <div class="imagewrap" bind:this={right}>
            <img src={hyd} alt="" />
        </div>
        <div class="des" bind:this={right_word}><p>The Protium-375 is a remarkable hydrogen fuel cell system developed by Spectronik. It’s specifically designed for the Eco-Marathon category, where students in Science, Technology, Engineering, and Mathematics (STEM) compete to engineer the world’s most energy-efficient vehicles. </p></div>
    </div>
</main>

<style>
    main {
        height: 90vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        gap: 2em;
        position: relative;
    }
    .scalable{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .imagewrap {
        height: 20em;
        width: 40em;
        background-color: #1d3354;
        border-radius: 0.5em;
        box-shadow: rgba(0, 0, 0, 0.584) 0em 1em 2em;
    }
    .des {
        width: 40em;
    }
    .imagewrap > img {
        width: 100%;
        object-fit: cover;
    }
    .scalable:nth-child(2) > .imagewrap {
        height: 30em;
        width: 20em;
    }
    .scalable:nth-child(2) > .des {
        filter: blur(1.5em);
        width: 20em;
    }

    @media screen and (max-width: 1000px) {
        main {
            flex-wrap: wrap;
            height: max-content;
        }
        .scalable > .imagewrap {
            height: 20em;
            width: 20em;
        }
        .scalable:nth-child(2) > .imagewrap {
            height: 20em;
            width: 20em;
        }
        .scalable:nth-child(2) > .des {
            filter: blur(0);
        }
        .des {
            width: 20em;
        }
    }
</style>
