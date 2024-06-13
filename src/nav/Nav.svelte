<script lang="ts">
    import menu from "../lib/header/menu.svg";
    import cross from "../lib/header/cross.svg";
    import logo from "../lib/header/App_logo.png"
    import { onMount } from "svelte";
    let dropdown: HTMLImageElement,
        navbar: HTMLElement,
        wrong: HTMLImageElement;
    let one: HTMLLIElement, two: HTMLLIElement, three: HTMLLIElement;
    

    onMount(() => {
        dropdown.addEventListener("click", () => {
            navbar.style.transform = "translateX(0)";

            one.style.transform = "translateX(0)";
            two.style.transform = "translateX(0)";
            three.style.transform = "translateX(0)";
        });
        wrong.addEventListener("click", () => {
            navbar.style.transform = "translateX(-200vw)";

            one.style.transform = "translateX(-100vw)";
            two.style.transform = "translateX(-100vw)";
            three.style.transform = "translateX(-100vw)";
        });
    });
</script>

<nav bind:this={navbar}>
    <div class="cross">
        <img src={cross} alt="cross" bind:this={wrong} />
    </div>
    <ul>
        <li bind:this={one}><a href="/" >HOME</a></li>
        <li bind:this={two}><a href="/team">ABOUT US</a></li>
        <li bind:this={three}><a href="/dashboard">DASHBOARD</a></li>
    </ul>
</nav>
<header>
    <div class="menu">
        <img src={menu} alt="menu" bind:this={dropdown} />
    </div>
    <div class="logo">
        <img src={logo} alt="">
    </div>
    <!-- <div class="t">
        <label for="select">Theme  : </label>
        <select name="Theme" id="Theme">
            <option value="">Default OS</option>
            <option value="">Dark</option>
            <option value="">Light</option>
        </select>
    </div> -->
</header>

<style>
    nav {
        height: 100vh;
        background-color: #d64045;
        position: fixed;
        width: 50vw;
        z-index: 999999;
        transform: translateX(-200vw);
        transition: transform 0.5s;
    }
    .cross {
        display: flex;
        justify-content: flex-end;
    }
    nav > div > img {
        height: 4em;
        cursor: pointer;
        margin-left: 1em;
    }

    nav > ul > li {
        list-style: none;
        font-size: 5em;
        margin: 0em;
    }
    nav > ul > li:nth-child(1) {
        transform: translateX(-50vw);
        transition: transform 0.5s ease-in-out;
    }
    nav > ul > li:nth-child(2) {
        transform: translateX(-50vw);
        transition: transform 0.8s ease-in-out;
    }
    nav > ul > li:nth-child(3) {
        transform: translateX(-50vw);
        transition: transform 1s ease-in-out;
    }
    header {
        position: fixed;
        height: 5em;
        width: 100vw;
        display: flex;
        align-items: center;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        box-shadow:  0em 10em 20em  linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
        z-index: 99999;
    }
    .logo{
        display: flex;
        justify-content: flex-end;
    }
    .logo > img {
        height: 5em;
        margin-right: 1em;
    }
    header > div {
        width: 50vw;
    }
    header > div > img {
        height: 2em;
        cursor: pointer;
        margin-left: 1em;
    }
    a {
        /* text-decoration: none;
        color: white;
        background: url({grains});
        background-size: cover;
        color: #fff;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        padding: 0; */
        font-weight: 900;
        text-decoration: none;
        color: white;
    }
    @media screen and (max-width:700px){
        header{
            height: 4em;
        }
        .logo>img{
            height: 4em;
        }
    }
    @media screen and (max-width: 1000px) {
        nav {
            width: 100vw;
        }
        nav > ul > li {
            font-size: 3em;
        }
        nav > div > img {
            height: 3em;
        }
        header > div > img {
            height: 2em;
        }
        a{
            font-size: 0.8em;
        }
        

    }
</style>
