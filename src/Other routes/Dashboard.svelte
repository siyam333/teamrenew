<script>
    import { initializeApp } from "firebase/app";
    import { getDatabase, ref, set, child, get } from "firebase/database";
    
    import { onMount } from "svelte";

    const firebaseConfig = {
        apiKey: "AIzaSyCy5xjv_3u_iBtK8W4_LrPyNnhYwG83o4s",
        authDomain: "renew-df06b.firebaseapp.com",
        databaseURL:
            "https://renew-df06b-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "renew-df06b",
        storageBucket: "renew-df06b.appspot.com",
        messagingSenderId: "222991340556",
        appId: "1:222991340556:web:11669eed094efbd4e88a29",
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase();
    const dbRef = ref(database); // Define dbRef here

    let intervalId;
    let speed, capacitor_voltage, distance;
    function fetchData() {
        get(child(dbRef, "parameters"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    speed = data.speed;
                    capacitor_voltage = data.capacitor_voltage;
                    distance = data.distance;
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    intervalId = setInterval(fetchData, 1000);
    $: {
        speed;
        capacitor_voltage;
        distance;
    }
    var countDownDate = new Date("July 2, 2024 0:0:0").getTime();
    let days,hours,minutes,seconds;
    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
         days = Math.floor(distance / (1000 * 60 * 60 * 24));
         hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
         minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
    }, 1000);
</script>

<main>
    <!-- <div class="section">
        <div><p>{speed} km/hr</p></div>
        
    </div>
    <div class="section2">
        <div><img src="" alt=""><p>{capacitor_voltage}</p></div>
    </div>
    <div class="section">
        <div><p> distance :{distance}km</p></div>
        
    </div> -->

    <!-- <div class="container"> -->
    <!-- The curved border will be created here -->
    <!-- </div> -->
     <!-- <img src="" alt=""> -->
     <span class="loader"></span>
     <p>{days} days:{hours} hr's:{minutes}min's:{seconds} sec's</p>
</main>

<style>
    .loader {
            position: relative;
            width: 108px;
            display: flex;
            justify-content: space-between;
          }
          .loader::after , .loader::before  {
            content: '';
            display: inline-block;
            width: 48px;
            height: 48px;
            background-color: #FFF;
            background-image:  radial-gradient(circle 14px, #0d161b 100%, transparent 0);
            background-repeat: no-repeat;
            border-radius: 50%;
            animation: eyeMove 10s infinite , blink 10s infinite;
          }
          @keyframes eyeMove {
            0%  , 10% {     background-position: 0px 0px}
            13%  , 40% {     background-position: -15px 0px}
            43%  , 70% {     background-position: 15px 0px}
            73%  , 90% {     background-position: 0px 15px}
            93%  , 100% {     background-position: 0px 0px}
          }
          @keyframes blink {
            0%  , 10% , 12% , 20%, 22%, 40%, 42% , 60%, 62%,  70%, 72% , 90%, 92%, 98% , 100%
            { height: 48px}
            11% , 21% ,41% , 61% , 71% , 91% , 99%
            { height: 18px}
          }
    main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        overflow: hidden;
        gap: 1rem;
        
    }
    main>p{
        font-size: 5em;
        color: rgb(0, 0, 0);
        margin: 0;
    }
    img{
        width: 10em;
    }
    .section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: antiquewhite;
    }
    .section > div > p {
        margin: 0;
        font-size: 2rem;
    }
    .section > div,
    .section2 > div {
        height: 10em;
    }
    .section2 > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: antiquewhite;
    }
    .section2 > div > p {
        margin: 0;
        font-size: 2rem;
    }
    @media screen and (max-width: 700px) {
        main>p{
            font-size: 1.2em;
        }
    }
</style>
