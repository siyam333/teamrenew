<script>
    import { onMount } from "svelte";
    let wrap;
    let translateY = "10em";
    onMount(() => {
        setTimeout(() => {
            translateY = "0em";
        }, 5);
    });
</script>

<main>
    <div class="head"><p>Chefs of the team</p></div>
    <div class="wrap" bind:this={wrap} style="--translateY: {translateY};">
        <div class="section1">
            <div>
                <div class="details">
                    <img src="" alt="" />
                    <h3>prathish</h3>
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
                    <img src="" alt="" />
                    <h3>prathish</h3>
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
                    <img src="" alt="" />
                    <h3>prathish</h3>
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
                    <img src="" alt="" />
                    <h3>prathish</h3>
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
                    <img src="" alt="" />
                    <h3>prathish</h3>
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
                    <img src="" alt="" />
                    <h3>prathish</h3>
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
                    <img src="" alt="" />
                    <h3>prathish</h3>
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
                    <img src="" alt="" />
                    <h3>prathish</h3>
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
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background-color: rgb(0, 22, 41);
        padding-top: 4em;
    }
    .head > p {
        font-size: 5em;
        color: white;
        margin: 0;
        font-weight: bolder;
    }
    .wrap {
        display: flex;
        gap: 1rem;
        padding: 1em;
        flex-wrap: wrap;
        justify-content: center;
        transform: translateY(var(--translateY));
        transition: transform 1s ease-in-out;
    }
    .section1,
    .section2,
    .section3 {
        display: flex;
        flex-direction: column;
    }
    .section1 > div,
    .section2 > div,
    .section3 > div {
        border-radius: 3em;
        padding: 1em;
        width: 20em;
        height: fit-content;
    }
    .section1 > div > div > h3,
    .section2 > div > div > h3,
    .section3 > div > div > h3 {
        font-size: 2em;
        color: rgb(0, 22, 41);
        margin: 0;
    }
    .details {
        background-color: rgb(0, 136, 255);
        padding: 1em;
        display: flex;
        justify-content: center;
        border-radius: 1em 1em 0em 0em;
    }
    .section1 > div > p,
    .section2 > div > p,
    .section3 > div > p {
        background-color: aliceblue;
        margin: 0;
        font-size: 1.4rem;
        padding: 1em 2em 1em 2em;
        border-radius: 0em 0em 1em 1em;
    }
</style>
