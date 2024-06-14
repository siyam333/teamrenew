<script>
    import { onMount } from "svelte";
    import asvitha from "../lib/team-photos/asvita.jpg";
    import prathish from "../lib/team-photos/prathish.jpg";
    import siyam from "../lib/team-photos/siyam.jpg";
    import dhanush from "../lib/team-photos/dhanush.jpg";
    import harini from "../lib/team-photos/harini.jpg";
    import uthith from "../lib/team-photos/uthith.jpg";
    import pratheesh from "../lib/team-photos/pratheesh.jpg";
    import vikkram from "../lib/team-photos/vikkram.jpg";

    import About from "../HOME/About.svelte";
    let pageX = 0;
    let pageY = 0;

    let wrap;
    let translateY = "10em";
    onMount(() => {
        setTimeout(() => {
            translateY = "0em";
        }, 5);
    });
</script>

<svelte:window on:mousemove={(e) => ({ pageX, pageY } = e)} />

<main>
    <!-- <div class="circle" style="position: absolute; top: {pageY}px; left: {pageX}px;transition:all 2s ease-in-out;overflow:hidden"></div> -->
    <div class="head"><p>The Team</p></div>
    <div class="wrap" bind:this={wrap} style="--translateY: {translateY};">
        <div class="section1">
            <div>
                <div class="details">
                    <img src={prathish} alt="" />
                    <h3>Prathish</h3>
                    <p>Captain</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem. Lorem
                </p>
            </div>
            <div>
                <div class="details">
                    <img src={asvitha} alt="" />
                    <h3>Asvitha</h3>
                    <p>Manager</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem. Lorem
                </p>
            </div>
            <div>
                <div class="details">
                    <img src={uthith} alt="" />
                    <h3>Uthith</h3>
                    <p>Electrical Lead</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.
                </p>
            </div>
        </div>
        <div class="section2">
            <div>
                <div class="details">
                    <img src={pratheesh} alt="" />
                    <h3>Pratheesh</h3>
                    <p>Hydeogen fuel cell analyst</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.
                </p>
            </div>
            <div>
                <div class="details">
                    <img src={siyam} alt="" />
                    <h3>Siyam</h3>
                    <p>Embedded Lead</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.
                </p>
            </div>
            <div>
                <div class="details">
                    <img src={dhanush} alt="" />
                    <h3>Dhanush</h3>
                    <p>Electrical and Embedded</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.
                </p>
            </div>
        </div>
        <div class="section3">
            <div>
                <div class="details">
                    <img src={harini} alt="" />
                    <h3>Harini</h3>
                    <p>Internal Affairs</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.
                </p>
            </div>
            <div>
                <div class="details">
                    <img src={vikkram} alt="" />
                    <h3>Vikkram</h3>
                    <p>Mechanical</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.
                </p>
            </div>
        </div>
    </div>
</main>

<style>
    /* .circle{
        position: absolute;
        width: 30em;
        height: 30em;
        background-color: rgba(0, 136, 255, 0.404);
        border-radius: 50%;
        z-index: -999;
    } */
    main {
        position: absolute;
        display: flex;
        width: 100vw;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        backdrop-filter: blur(10px);
        padding-top: 4em;
        z-index: 9999;
        overflow: hidden;
    }
    .head > p {
        font-size: 5em;
        margin: 0;
        font-weight: 900;
        
    }
    .wrap {
        transform: translateY(var(--translateY));
        transition: transform 1s ease-in-out;
    }
    .section1,
    .section2,
    .section3 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .section1 > div,
    .section2 > div,
    .section3 > div {
        border-radius: 1em;
    margin: 1em;
    width: 20em;
    height: fit-content;
    box-shadow: white 0.5em 0.5em 0em 0em;
    }
    .section1 > div > div > h3,
    .section2 > div > div > h3,
    .section3 > div > div > h3 {
        font-size: 2em;
        color: rgb(0, 22, 41);
        margin: 0;
    }
    .details {
        background-color: #85aac6;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 1em 1em 0em 0em;
    }
    .section1 > div > p,
    .section2 > div > p,
    .section3 > div > p {
        background-color: #161b22;
        margin: 0;
        font-size: 1.4rem;
        padding: 1em 2em 1em 2em;
        border-radius: 0em 0em 1em 1em;
    }
    img {
        width: 10em;
        border-radius: 50%;
    }
    .details > h3 {
        text-align: center;
    }
    .details > p {
        margin: 0;
        font-size: 1.5em;
        font-family: "Sue Ellen Francisco", cursive;
        font-weight: 400;
        font-style: normal;
    }

    @media screen and (max-width: 768px) {
        .section1 > div,
        .section2 > div,
        .section3 > div {
            width: 15em;
        }

        .section1 > div > p,
        .section2 > div > p,
        .section3 > div > p {
            font-size: 1rem;
        }
        .head > p {
            font-size: 3em;
        }
    }
</style>
