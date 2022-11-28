//Screen One
function buildO2Tank()
{
    var ironAmt = document.getElementById("ironAmt");
    var o2Btn = document.getElementById("o2tankBtn");
    if(ironAmt.value >= 30)
    {
        o2Btn.style.opacity = "0.5";
        o2Btn.disabled = true; 
        //change o2 tank amount to 1 and diable button
        document.getElementById("o2TankAmt").value = 1;
        ironAmt.value -= 30;
        //display o2 stats
        document.getElementById("itemTable").style.display = "block";
        document.getElementById("o2TankAmt").style.display = "block";
        document.getElementById("o2TT").style.display = "none";
    } 
}

function buildPod()
{
    var collectBtn = document.getElementById("collectionBtn");
    var collectAmt = document.getElementById("collectionPodAmt");
    var ironAmt = document.getElementById("ironAmt");
    if(collectAmt.value < 10)
    {
        if(ironAmt.value >= (10 + 10*collectAmt.value))
        {
            //decrease iron amount by 10, increasing by 10 with each purchase
            ironAmt.value = ironAmt.value - (10 + 10*collectAmt.value); 
            collectAmt.value ++;
            //text event
            eventText(Events(4));
        }

        //display pod stats
        document.getElementById("checkPods").style.display = "block";
        document.getElementById("villageTable").style.display = "block";
        document.getElementById("collectionPodAmt").style.display = "block";
        document.getElementById("fuelAmt").style.display = "block";
    }
    if(collectAmt.value == 10)
    {
        collectBtn.style.opacity = "0.5";
        collectBtn.disabled = true;
        document.getElementById("podTT").style.display = "none";
    }
    if(collectAmt.value == 3)
    {
            //display ship stats
            document.getElementById("shipBtn").style.display = "block";
            document.getElementById("shipAmt").style.display = "block";
    }
    dynamicToolTip(collectBtn);

   
}

function buildShip()
{
    var shipBtn = document.getElementById("shipBtn");
    var shipAmt = document.getElementById("shipAmt");
    var ironAmt = document.getElementById("ironAmt");
    var popAmt = document.getElementById("population");

    //display village pop stats
    if(shipAmt.value < 10)
    {
        if(ironAmt.value >= (50 + 50*shipAmt.value))
        {
            ironAmt.value = ironAmt.value - (50 + 50*shipAmt.value); //increase cost by 50
            shipAmt.value++;
            populationChange(4);
            //popAmt.value = parseInt(popAmt.value) + 4;//increase pop by 4 each click
            //text event
            eventText(Events(5));
        }

        document.getElementById("jobTable").style.display = "block";
        document.getElementById("miner").style.display = "initial";
        document.getElementById("population").style.display = "block";  
        if (shipAmt.value <= 3) {
            document.getElementById("opLabel").style.display = "none";  
            document.getElementById("mechLabel").style.display = "none";
        }  
    }
    if(shipAmt.value == 10)
    {
        shipBtn.style.opacity = "0.5";
        shipBtn.disabled = true;
        document.getElementById("shipTT").style.display = "none";

    }
    if(shipAmt.value == 3)
    {
        document.getElementById("refineryBtn").style.display = "block";
        document.getElementById("mechanicBtn").style.display = "block";
        document.getElementById("spaceHubBtn").style.display = "block";

    }
    dynamicToolTip(shipBtn);
}

function buildRefinery()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var refineryBtn = document.getElementById("refineryBtn");
    var refineryAmt = document.getElementById("refineryAmt");

    if(ironAmt.value >= 200 && fuelAmt.value >= 100)
    {
        ironAmt.value = parseInt(ironAmt.value) - 200;
        fuelAmt.value = parseInt(fuelAmt.value) - 100; 
        refineryAmt.value++;

        refineryBtn.style.opacity = "0.5";
        refineryBtn.disabled = true;
        //text event
        eventText(Events(6));
        //display refinery stats
        document.getElementById("operator").style.display = "initial";
        document.getElementById("opLabel").style.display = "initial";
        document.getElementById("refineryAmt").style.display = "block";
        document.getElementById("refineryTT").style.display = "none";

    } 
}

function buildMechanic()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var mechanicBtn = document.getElementById("mechanicBtn");
    var mechanicAmt = document.getElementById("mechanicAmt");
    
    if(ironAmt.value >= 200 && fuelAmt.value >= 200)
    {
        ironAmt.value = parseInt(ironAmt.value) - 200;
        fuelAmt.value = parseInt(fuelAmt.value) - 200; 
        mechanicAmt.value++;

        mechanicBtn.style.opacity = "0.5";
        mechanicBtn.disabled = true; 
        //text event
        eventText(Events(7));
        //display mechanic stats
        document.getElementById("mechanicAmt").style.display = "initial";
        document.getElementById("mechanic").style.display = "initial";
        document.getElementById("mechLabel").style.display = "initial";
        document.getElementById("repairPackAmt").style.display = "block";
        document.getElementById("mechanicTT").style.display = "none";


    }
}

function buildSpaceHub()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var spaceHubBtn = document.getElementById("spaceHubBtn");
    var spaceHubAmt = document.getElementById("spaceHubAmt");

    if(ironAmt.value >= 400 && fuelAmt.value >= 200)
    {
        ironAmt.value = parseInt(ironAmt.value) - 400;
        fuelAmt.value = parseInt(fuelAmt.value) - 200; 
        spaceHubAmt.value++;

        spaceHubBtn.style.opacity = "0.5";
        spaceHubBtn.disabled = true; 

        //text event
        eventText(Events(8));
        //display spacehub stats
        document.getElementById("buyBtns").style.display = "block";
        document.getElementById("spaceHubAmt").style.display = "block"; 
        document.getElementById("ironBtn").style.display = "block";
        document.getElementById("fuelBtn").style.display = "block"; 
        document.getElementById("repairPackBtn").style.display = "block"; 
        document.getElementById("navBtn").style.display = "block";
        document.getElementById("spaceHubTT").style.display = "none";



    }
}

function dynamicToolTip(ele){
    if(ele.id=="collectionBtn"){
        var podAmt = document.getElementById("collectionPodAmt");
        var cost = 10 + 10*podAmt.value;
        if(podAmt.value < 10){
            var span = document.getElementById("podTT");
            span.textContent = cost + " Iron";
        }
    }

    if(ele.id=="shipBtn"){
        var shipAmt = document.getElementById("shipAmt");
        var cost = 50 + 50*shipAmt.value;
        if(shipAmt.value < 10){
            var span = document.getElementById("shipTT");
            span.textContent = cost + " Iron";
        }
    }
    
        if(ele.id=="ironRate")
    {
        var minerAmt = document.getElementById("miner").value;
        var ironRate = 0;
        if (minerAmt > 12)
        {
            ironRate = minerAmt*5;
        }

        else if (minerAmt <=12 && minerAmt >=5)
        {
            ironRate = minerAmt*2;
        }

        var span = document.getElementById("ironRateTT");
        span.textContent = ironRate + "/ 10 sec";
    }

    if(ele.id=="fuelRate")
    {
        var operatorAmt = document.getElementById("operator").value;
        var fuelRate = 0;

        if (operatorAmt > 8)
        {
            fuelRate = operatorAmt*5;
        }

        else 
        {
            fuelRate = operatorAmt*2;
        }

        var span = document.getElementById("fuelRateTT");
        span.textContent = fuelRate + "/ 10 sec";
    }

    if(ele.id=="fuelRate")
    {
        var mechanicAmt = document.getElementById("mechanic").value;
        var repairPackRate = 0;
        if (mechanicAmt > 7)
        {
            repairPackRate = mechanicAmt*5;
        }

        else 
        {
            repairPackRate = mechanicAmt*2;
        }
        var span = document.getElementById("repairPackRateTT");
        span.textContent = repairPackRate + "/ 10 sec";
    }

}
