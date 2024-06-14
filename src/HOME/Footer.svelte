<script lang="ts">
    import Gmail from "../lib/footer/gmail.svg";
    import Linkedin from "../lib/footer/linkdin.svg";
    import Insta from "../lib/footer/instagram.svg";
    import Phone from "../lib/footer/phone.png";
</script>

<main>
    <div>
        <p class="title">Team ReNew</p>
        <p>
            Address : <br />Kumaraguru College of Technology <br /> Chinnavedampatti,
            Coimbatore, Tamil Nadu 641049
        </p>
        <div class="contact">
            <div><a href="mailto: team.renew@kct.ac.in"><img src={Gmail} alt="" /></a></div>
            <div><a href="https://www.linkedin.com/in/team-renew-45266a295/"><img src={Linkedin} alt="" /></a></div>
            <div><a href="https://www.instagram.com/teamrenew_kct/"><img src={Insta} alt="" /></a></div>
        </div>
    </div>
    <div class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13132.11434101264!2d76.98745576980639!3d11.076465331153605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f81b7514a15f%3A0x155e29f8d14154fc!2sKumaraguru%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1716911081806!5m2!1sen!2sin"
            width="400"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        flex-direction: row;
        height: 70vh;
        flex-wrap: wrap;
        align-items: center;
        background-color: #161b22;
        color: rgb(255, 255, 255);
        border-radius: 2em 2em 0 0;
    }
    main > div:nth-child(1) {
       
        width: 50vw;
    }
    main > div:nth-child(2) {
        
        width: 40vw;
    }
    main > div > p {
        font-size: 1.5em;
        margin: 0;
        margin-left: 2em;
        margin-bottom: 1em;
    }
    main > div > p:nth-child(2) {
        padding-top: 1em;
        padding-bottom: 1em;
    }
    .title {
        font-size: 5em;
        font-weight: 600;
        margin: 0;
        margin-left: 0.5em;
    }
    main > div {
        display: grid;
        align-items: center;
        align-content: center;
    }
    .contact {
        display: flex;
        flex-direction: row;
        gap: 1em;
        justify-content: center;
    }
    .contact > div > a>img {
        width: 2.5em;
        filter: grayscale(70%);
    }
    /* .phone {
        filter: invert(1);
    } */
    .map {
        height: 20em;
        width: 20em;
        overflow: hidden;
        padding: 0.5em;
    }

    @media screen and (max-width: 700px) {
        main {
            
            flex-direction: column;
            width: 100vw;
            height: fit-content;
            overflow: hidden;
            padding-bottom: 0.5em;
            
        }
        main > div:nth-child(1) {
            width: fit-content;
            justify-content: center;
            padding: 1em;
            padding-top: 4em;
            
        }
        main > div:nth-child(2) {
            width: 100vw;
            justify-content: center;
        }
        .map > iframe {
            height: 15em;
            width: 15em;
            overflow: hidden;
        }
        .map {
            height: 20em;
            width: 20em;
            overflow: hidden;
            padding: 0em;
        }
        main > div > p {
            font-size: 1em;
            margin: 0;
            text-wrap: wrap;
        }
        .title {
            font-size: 2.5em;
            margin: 0;
        }
    }
</style>
