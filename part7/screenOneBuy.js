function buyIron()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");

    ironAmt.value = parseInt(ironAmt.value) + 10;
    fuelAmt.value = parseInt(fuelAmt.value) - 20;
}

function buyFuel()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");

    ironAmt.value = parseInt(ironAmt.value) - 50;
    fuelAmt.value = parseInt(fuelAmt.value) + 20;
}

function buyRepairPack()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");

    ironAmt.value = parseInt(ironAmt.value) - 100;
    fuelAmt.value = parseInt(fuelAmt.value) - 100;
    repairPackAmt.value = parseInt(repairPackAmt.value) + 10;
}

function buyNavCPU()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var navComputerAmt = document.getElementById("navComputerAmt");
    var navBtn = document.getElementById("navBtn");

    ironAmt.value = parseInt(ironAmt.value) - 500;
    fuelAmt.value = parseInt(fuelAmt.value) - 300;
    repairPackAmt.value = parseInt(repairPackAmt.value) - 100;
    navComputerAmt.value = parseInt(navComputerAmt.value) + 1;

    navBtn.style.opacity = "0.5";
    navBtn.disabled = true; 

}

function buyHealth1()
{   
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var health1Amt = document.getElementById("health1Amt");
    var heatlh1Btn = document.getElementById("health1Btn");

    ironAmt.value = parseInt(ironAmt.value) - 500;
    fuelAmt.value = parseInt(fuelAmt.value) - 500;
    repairPackAmt.value = parseInt(repairPackAmt.value) - 200;
    health1Amt.value = parseInt(health1Amt.value) + 1;

    heatlh1Btn.style.opacity = "0.5";
    heatlh1Btn.disabled = true; 

}

function buyHealth2()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var health2Amt = document.getElementById("health2Amt");
    var heatlh2Btn = document.getElementById("health2Btn");

    ironAmt.value = parseInt(ironAmt.value) - 750;
    fuelAmt.value = parseInt(fuelAmt.value) - 750;
    repairPackAmt.value = parseInt(repairPackAmt.value) - 400;
    health2Amt.value = parseInt(health2Amt.value) + 1;

    heatlh2Btn.style.opacity = "0.5";
    heatlh2Btn.disabled = true; 

}

function buyDmg1()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var damage1Amt = document.getElementById("damage1Amt");
    var damage1Btn = document.getElementById("dmg1Btn");

    ironAmt.value = parseInt(ironAmt.value) - 500;
    fuelAmt.value = parseInt(fuelAmt.value) - 500;
    repairPackAmt.value = parseInt(repairPackAmt.value) - 200;
    damage1Amt.value = parseInt(damage1Amt.value) + 1;

    damage1Btn.style.opacity = "0.5";
    damage1Btn.disabled = true; 

}

function buyDmg2()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var damage2Amt = document.getElementById("damage2Amt");
    var damage2Btn = document.getElementById("dmg2Btn");

    ironAmt.value = parseInt(ironAmt.value) - 750;
    fuelAmt.value = parseInt(fuelAmt.value) - 750;
    repairPackAmt.value = parseInt(repairPackAmt.value) - 400;
    damage2Amt.value = parseInt(damage2Amt.value) + 1;

    damage2Btn.style.opacity = "0.5";
    damage2Btn.disabled = true; 

}

function buyDeathStar()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var planetCoreAmt = document.getElementById("planetCoreAmt");
    var deathStarAmt = document.getElementById("deathStarAmt");
    var deathStarBtn = document.getElementById("deathStarBtn");

    ironAmt.value = parseInt(ironAmt.value) - 1000;
    fuelAmt.value = parseInt(fuelAmt.value) - 1000;
    repairPackAmt.value = parseInt(repairPackAmt.value) - 1000;
    planetCoreAmt.value = parseInt(planetCoreAmt.value) - 10;
    deathStarAmt.value = parseInt(deathStarAmt.value) + 1;

    deathStarBtn.style.opacity = "0.5";
    deathStarBtn.disabled = true; 

}
