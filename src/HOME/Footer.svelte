<script lang="ts">
    import Gmail from "../lib/footer/gmail.svg"
    import Linkedin from "../lib/footer/linkdin.svg"
    import Insta from "../lib/footer/instagram.svg"
    import Phone from "../lib/footer/phone.png"

</script>

<main>
    <div>
        <p class="title">Team Renew</p>
        <p>
            Address : <br />Kumaraguru College of Technology <br /> Chinnavedampatti,
            Coimbatore, Tamil Nadu 641049
        </p>
        <div class="contact">
            <div><img src={Gmail} alt=""></div>
        <div><img src={Linkedin} alt=""></div>
        <div><img src={Insta} alt=""></div>
        <div><img src={Phone} class="phone" alt=""></div>
        </div>
        
    </div>
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13132.11434101264!2d76.98745576980639!3d11.076465331153605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f81b7514a15f%3A0x155e29f8d14154fc!2sKumaraguru%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1716911081806!5m2!1sen!2sin" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        
        
        padding: 2em;
        gap: 2em;
        background-color: #000000;
        color: rgb(255, 255, 255);
        
    }
    main > div:nth-child(1) {
        height: 100%;
        width: 27em;
    }
    main > div:nth-child(2) {
        height: 100%;
        width: 27em;
    }
    .title{
        font-size: 2em;
        font-weight: 600;
    }
    main>div{
        display: grid;
        align-items: center;
        align-content: center;
    }
    .contact{
        display: flex;
        flex-direction: row;
        gap: 1em;
        justify-content: center;
    }
    .contact>div>img{
        width: 2.5em;
    }
    .phone{
        filter: invert(1);
    }
    .map{
        height: 20em;
        width: 20em;
        overflow: hidden;
    }

    @media screen and (max-width: 700px) {
        main {
            height: fit-content;
            flex-direction: column;

        }
        main > div:nth-child(1) {
            width: 100%;
        }
        main > div:nth-child(2) {
            width: 100%;
            justify-content: center;
        }
        .map>iframe{
            height: 15em;
            width: 15em;
            overflow: hidden;
        }
    }
</style>
