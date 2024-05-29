<script>
    import { fade } from "svelte/transition";
    let detail = [
        {
            image: "src/lib/photos/image.png",
            name: "prathish",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
        {
            image: "src/lib/photos/Picture1.jpg",
            name: "prathish",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
        {
            image: "./images/chef3.jpg",
            name: "prathish",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
        {
            image: "./images/chef4.jpg",
            name: "prathish",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
        {
            image: "./images/chef5.jpg",
            name: "prathish",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
        {
            image: "./images/chef6.jpg",
            name: "prathish",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
        {
            image: "./images/chef7.jpg",
            name: "prathish",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
        {
            image: "./images/chef8.jpg",
            name: "prathish",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
    ];
    let current_img = detail[0].image;
    
    let fadeOut = false;

    function calc(i) {
        
        if(current_img != detail[i].image){
            fadeOut = true;
            setTimeout(() => {
            current_img = detail[i].image;
            fadeOut = false;
        }, 300); 
        } 
        
    }
    
</script>

<main>
    <!-- <div class="head">
        <h2>chefs from the team</h2>
    </div>
    <div class="details">
        <div class="image">
            <img src={current_img} alt="chef" class:fade-out={fadeOut} />
        </div>
        <div class="des">
            {#each detail as item, i} -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <!-- <div class="item" on:mouseover={() => calc(i)}>
                    <h3>{item.name}</h3>
                    <p>{item.des}</p>
                </div>
            {/each}
        </div>
    </div> -->

</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: black;
        color: white;
        gap: 3em;
    }
    /* .head > h2 {
        margin: 0;
        font-size: 3em;
    }
    .details {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2em;
    }
    .des{
        display: flex;
        flex-direction: column;
        gap: 0.2em;
    }

    .item {
        border: 0.1em solid white;
        padding: 0.5em;
        border-radius: 3em;
    }
    .item > p {
        margin: 0.2em;
    }
    .item:hover {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        background-color: white;
        color: black;
    }
    .image{
        width: 20em;
    }
    .item > h3 {
        margin: 0.1em;
    }
    /* img {
        width: 20em;
    } */
    /* img {
        width: 20em;
        opacity: 1;
        transition: opacity 0.3s ease-in-out; 
    }

    .fade-out {
        opacity: 0;
    }  */
</style>
