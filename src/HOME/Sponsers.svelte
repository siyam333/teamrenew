<script>
import google from "../lib/sponsers/google.png"
import propel from "../lib/sponsers/propel.png"
import volvo from "../lib/sponsers/volvo.png"
</script>

<main>
    <h2>Our sponsers</h2>
    <div class="images">
        <img src={google} alt="">
        <img src={propel} alt="">
        <img src={volvo} alt="">
        
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }
    main>h2{
        font-size: 2em;
        margin-bottom: 1em;
    }
    .images {
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        /* flex-wrap: wrap; */
        margin-bottom: 2em;
        gap: 4em;
    }
    .images>img{
        filter: grayscale(100%);
        width: 7em;
    }
    @media screen and (max-width: 700px) {
        .images {
            flex-wrap: wrap;
        }
    }
</style>