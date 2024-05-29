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

    
</script>

<main>
     <div class="section">
        <div><p>{speed} km/hr</p></div>
        
    </div>
    <div class="section2">
        <div><img src="" alt=""><p>{capacitor_voltage}</p></div>
    </div>
    <div class="section">
        <div><p> distance :{distance}km</p></div>
        
    </div>

    <div class="container">
        <!-- The curved border will be created here -->
      </div>

</main>

<style>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: rgb(0, 22, 41);
        gap: 5rem;
    }
    .section{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: antiquewhite;
    }
    .section>div>p{
        margin: 0;
        font-size: 2rem;
    }
    .section>div,.section2>div{
        height: 10em;
    }
    .section2>div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: antiquewhite;
    }
    .section2>div>p{
        margin: 0;
        font-size: 2rem;
    }
</style>
