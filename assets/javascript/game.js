$(document).ready(function reset() {

    var isChosen = false;
    var defenderOpen = true;
    var skywalker = {
        name: "Luke Skywalker",
        hp: 110,
        chosen: false,
        defend: false,
        dead: false,
        atk: 20,
        ctr: 12,
    }
    var kenobi = {
        name: "Obi Wan Kenobi",
        hp: 135,
        chosen: false,
        defend: false,
        dead: false,
        atk: 8,
        ctr: 15,
    }
    var vader = {
        name: "Darth Vader",
        hp: 125,
        chosen: false,
        defend: false,
        dead: false,
        atk: 12,
        ctr: 12,
    }
    var kylo = {
        name: "Kylo Ren",
        hp: 130,
        chosen: false,
        defend: false,
        dead: false,
        atk: 10,
        ctr: 20,
    }




    $("#skywalkerHp").text(skywalker.hp);
    $("#kenobiHp").text(kenobi.hp);
    $("#vaderHp").text(vader.hp);
    $("#kyloHp").text(kylo.hp);
    $(".char").hide();
    $(".enemies").hide();
    $(".fight").hide();
    $(".defend").hide();
    $(".win").hide();
    $(".lose").hide();
    $("#reset").hide();


    //Player Character Chosen
    $(".character").on("click", function () {
        $(".char").show();
        $(".choose").hide();
        $(".enemies").show();

        if (this.id == "skywalker" && isChosen == false) {
            $(".skywalker").appendTo("#char");
            skywalker.chosen = true;
            $(".kenobi").appendTo("#enemies");
            $("#kenobi").addClass("enemyColor");

            $(".vader").appendTo("#enemies");
            $("#vader").addClass("enemyColor");

            $(".kylo").appendTo("#enemies");
            $("#kylo").addClass("enemyColor");

        } else if (this.id == "kenobi" && isChosen == false) {
            $(".kenobi").appendTo("#char");
            kenobi.chosen = true;
            $(".skywalker").appendTo("#enemies");
            $("#skywalker").addClass("enemyColor");

            $(".vader").appendTo("#enemies");
            $("#vader").addClass("enemyColor");

            $(".kylo").appendTo("#enemies");
            $("#kylo").addClass("enemyColor");

        } else if (this.id == "vader" && isChosen == false) {
            $(".vader").appendTo("#char");
            vader.chosen = true;
            $(".kenobi").appendTo("#enemies");
            $("#kenobi").addClass("enemyColor");

            $(".skywalker").appendTo("#enemies");
            $("#skywalker").addClass("enemyColor");

            $(".kylo").appendTo("#enemies");
            $("#kylo").addClass("enemyColor");

        } else if (this.id == "kylo" && isChosen == false) {
            $(".kylo").appendTo("#char");
            kylo.chosen = true;
            $(".kenobi").appendTo("#enemies");
            $("#kenobi").addClass("enemyColor");

            $(".vader").appendTo("#enemies");
            $("#vader").addClass("enemyColor");

            $(".skywalker").appendTo("#enemies");
            $("#skywalker").addClass("enemyColor");

        }
        isChosen = true;



    })

    //Defender Chosen
    $(".character").on("click", function () {

        $(".fight").show();
        $(".defend").show();


        if (this.id == "skywalker" && isChosen == true && skywalker.chosen !== true && defenderOpen == true) {
            $(".skywalker").appendTo("#defender");
            $("#skywalker").addClass("defColor");
            skywalker.defend = true;
            defenderOpen = false;

        } else if (this.id == "kenobi" && isChosen == true && kenobi.chosen !== true && defenderOpen == true) {
            $(".kenobi").appendTo("#defender");
            $("#kenobi").addClass("defColor");
            kenobi.defend = true;
            defenderOpen = false;

        } else if (this.id == "vader" && isChosen == true && vader.chosen !== true && defenderOpen == true) {
            $(".vader").appendTo("#defender");
            $("#vader").addClass("defColor");
            vader.defend = true;
            defenderOpen = false;

        } else if (this.id == "kylo" && isChosen == true && kylo.chosen !== true && defenderOpen == true) {
            $(".kylo").appendTo("#defender");
            $("#kylo").addClass("defColor");
            kylo.defend = true;
            defenderOpen = false;


        }

        $("#fight-text").text("")
    })

    //Attack functions
    //skywalker attacks
    $("#attack").on("click", function () {
        if (defenderOpen == true) {
            $("#fight-text").text('What? Are you attacking the darkness? Choose someone to fight!');
        } else $("#fight-text").text("");

        if (skywalker.chosen == true && kenobi.defend == true && kenobi.dead !== true) {
            console.log("sky v kenobi attack");
            kenobi.hp -= skywalker.atk;
            skywalker.hp -= kenobi.ctr;
            skywalker.atk += 22;
            $("#skywalkerHp").text(skywalker.hp);
            $("#kenobiHp").text(kenobi.hp)
            $("#fight-text").text("Luke Skywalker attacked for " + skywalker.atk + "! " + 
            "Obi Wan Kenobi counter attacked for " + kenobi.ctr + "!")

        } else if (skywalker.chosen == true && vader.defend == true && vader.dead !== true) {
            console.log("sky v vader attack");
            vader.hp -= skywalker.atk;
            skywalker.hp -= vader.ctr;
            skywalker.atk += 22;
            $("#skywalkerHp").text(skywalker.hp);
            $("#vaderHp").text(vader.hp)
            $("#fight-text").text("Luke Skywalker attacked for " + skywalker.atk + "! "+ 
            "Darth Vader counter attacked for " + vader.ctr + "!")
        } else if (skywalker.chosen == true && kylo.defend == true && kylo.dead !== true) {
            console.log("sky v kylo attack");
            kylo.hp -= skywalker.atk;
            skywalker.hp -= kylo.ctr;
            skywalker.atk += 22;
            $("#skywalkerHp").text(skywalker.hp);
            $("#kyloHp").text(kylo.hp)
            $("#fight-text").text("Luke Skywalker attacked for " + skywalker.atk + "! " + 
            "Kylo Ren counter attacked for " + kylo.ctr + "!")
        }
        //kenobi attacks
        else if (kenobi.chosen == true && skywalker.defend == true && skywalker.dead !== true) {
            console.log("kenobi v sky attack");
            skywalker.hp -= kenobi.atk;
            kenobi.hp -= skywalker.ctr;
            kenobi.atk += 8;
            $("#skywalkerHp").text(skywalker.hp);
            $("#kenobiHp").text(kenobi.hp)
            $("#fight-text").text("Obi Wan Kenobi attacked for " + kenobi.atk + "! " + 
            "Luke Skywalker counter attacked for " + skywalker.ctr + "!")
        } else if (kenobi.chosen == true && vader.defend == true && vader.dead !== true) {
            console.log("kenobi v vader attack");
            vader.hp -= kenobi.atk;
            kenobi.hp -= vader.ctr;
            kenobi.atk += 8;
            $("#vaderHp").text(vader.hp);
            $("#kenobiHp").text(kenobi.hp)
            $("#fight-text").text("Obi Wan Kenobi attacked for " + kenobi.atk + "! " + 
            "Darth Vader counter attacked for " + vader.ctr + "!")
        } else if (kenobi.chosen == true && kylo.defend == true && kylo.dead !== true) {
            console.log("kenobi v kylo attack");
            kylo.hp -= kenobi.atk;
            kenobi.hp -= kylo.ctr;
            kenobi.atk += 8;
            $("#kyloHp").text(kylo.hp);
            $("#kenobiHp").text(kenobi.hp)
            $("#fight-text").text("Obi Wan Kenobi attacked for " + kenobi.atk + "! " + 
            "Kylo Ren counter attacked for " + kylo.ctr + "!")
        }
        //vader attacks           
        else if (vader.chosen == true && kenobi.defend == true && kenobi.dead !== true) {
            console.log("vader v kenobi attack");
            kenobi.hp -= vader.atk;
            vader.hp -= kenobi.ctr;
            vader.atk += 12;
            $("#vaderHp").text(vader.hp);
            $("#kenobiHp").text(kenobi.hp)
            $("#fight-text").text("Darth Vader attacked for " + vader.atk + "! " + 
            "Obi Wan Kenobi counter attacked for " + kenobi.ctr + "!")
        } else if (vader.chosen == true && skywalker.defend == true && skywalker.dead !== true) {
            console.log("vader v sky attack");
            skywalker.hp -= vader.atk;
            vader.hp -= skywalker.ctr;
            vader.atk += 12;
            $("#vaderHp").text(vader.hp);
            $("#skywalkerHp").text(skywalker.hp)
            $("#fight-text").text("Darth Vader attacked for " + vader.atk + "! " + 
            "Luke Skywalker counter attacked for " + skywalker.ctr + "!")
        } else if (vader.chosen == true && kylo.defend == true && kylo.dead !== true) {
            console.log("vader v kylo attack");
            kylo.hp -= vader.atk;
            vader.hp -= kylo.ctr;
            vader.atk += 12;
            $("#vaderHp").text(vader.hp);
            $("#kyloHp").text(kylo.hp)
            $("#fight-text").text("Darth Vader attacked for " + vader.atk + "! " + 
            "Kylo Ren counter attacked for " + kylo.ctr + "!")
        }
        //kylo attacks
        else if (kylo.chosen == true && kenobi.defend == true && kenobi.dead !== true) {
            console.log("kylo v kenobi attack");
            kenobi.hp -= kylo.atk;
            kylo.hp -= kenobi.ctr;
            kylo.atk += 10;
            $("#kenobiHp").text(kenobi.hp);
            $("#kyloHp").text(kylo.hp)
            $("#fight-text").text("Kylo Ren attacked for " + kylo.atk + "! " + 
            "Obi Wan Kenobi counter attacked for " + kenobi.ctr + "!")
        } else if (kylo.chosen == true && vader.defend == true && vader.dead !== true) {
            console.log("kylo v vader attack");
            vader.hp -= kylo.atk;
            kylo.hp -= vader.ctr;
            kylo.atk += 10;
            $("#vaderHp").text(vader.hp);
            $("#kyloHp").text(kylo.hp)
            $("#fight-text").text("Kylo Ren attacked for " + kylo.atk + "! " + 
            "Darth Vader counter attacked for " + vader.ctr + "!")
        } else if (kylo.chosen == true && skywalker.defend == true && skywalker.dead !== true) {
            console.log("kylo v sky attack");
            skywalker.hp -= kylo.atk;
            kylo.hp -= skywalker.ctr;
            kylo.atk += 10;
            $("#skywalkerHp").text(skywalker.hp)
            $("#kyloHp").text(kylo.hp)
            $("#fight-text").text("Kylo Ren attacked for " + kylo.atk + "! " + 
            "Luke Skywalker counter attacked for " + skywalker.ctr + "!")
        }
    })

    //defeated
    $("#attack").on("click", function () {

        if (skywalker.hp <= 0 && skywalker.dead !== true) {
            skywalker.dead = true;
            $("#skywalker").hide();
            $("#fight-text").text("You've vanquished your enemy. Choose your next adversary!");
            skywalker.defend = false;
            defenderOpen = true;

            if (skywalker.chosen == true) {
                $("#skywalker").show();
                gameOver()
            }
        } else if (kenobi.hp <= 0 && kenobi.dead !== true) {
            kenobi.dead = true;
            $("#kenobi").hide();
            $("#fight-text").text("You've vanquished your enemy. Choose your next adversary!");
            kenobi.defend = false;
            defenderOpen = true;
            if (kenobi.chosen == true) {
                $("#kenobi").show();
                gameOver()
            }
        } else if (vader.hp <= 0 && vader.dead !== true) {
            vader.dead = true;
            $("#vader").hide();
            $("#fight-text").text("You've vanquished your enemy. Choose your next adversary!");
            vader.defend = false;
            defenderOpen = true;
            if (vader.chosen == true) {
                $("#vader").show();
                gameOver()
            }
        } else if (kylo.hp <= 0 && kylo.dead !== true) {
            kylo.dead = true;
            $("#kylo").hide();
            $("#fight-text").text("You've vanquished your enemy. Choose your next adversary!");
            kylo.defend = false;
            defenderOpen = true;
            if (kylo.chosen == true) {
                $("#vader").show();
                gameOver()
            }
        }

    })


    //Win 
    $("#attack").on("click", function () {
        if (skywalker.chosen == true && vader.dead == true && kenobi.dead == true && kylo.dead == true) {
            gameWin();
        } else if (kenobi.chosen == true && vader.dead == true && skywalker.dead == true && kylo.dead == true) {
            gameWin();

        } else if (vader.chosen == true && kenobi.dead == true && skywalker.dead == true && kylo.dead == true) {
            gameWin();

        } else if (kylo.chosen == true && vader.dead == true && skywalker.dead == true && kenobi.dead == true) {
            gameWin();
        }

    })

    function gameOver() {
        $(".lose").show();
        $("#reset").show();
        $(".enemies").hide();
        $(".fight").hide();
    }

    function gameWin() {
        $(".win").show();
        $("#reset").show();
        $(".enemies").hide();
        $(".fight").hide();
        $(".defend").hide();
    }
    $("#reset").on("click", function () {

        isChosen = false;
        defenderOpen = true;

        skywalker.hp = 110;
        skywalker.chosen = false;
        skywalker.defend = false;
        skywalker.dead = false;
        skywalker.atk = 20;

        kenobi.hp = 135;
        kenobi.chosen = false;
        kenobi.defend = false;
        kenobi.dead = false;
        kenobi.atk = 8;

        vader.hp = 125;
        vader.chosen = false;
        vader.defend = false;
        vader.dead = false;
        vader.atk = 12;

        kylo.hp = 130;
        kylo.chosen = false;
        kylo.defend = false;
        kylo.dead = false;
        kylo.atk = 10;
        $(".choose").show();
        $("#skywalker").show();
        $("#kenobi").show();
        $("#vader").show();
        $("#kylo").show();
        $(".skywalker").appendTo(".start");
        $(".kenobi").appendTo(".start");
        $(".vader").appendTo(".start");
        $(".kylo").appendTo(".start");
        $("#skywalker").removeClass("defColor enemyColor");
        $("#kenobi").removeClass("defColor enemyColor");
        $("#vader").removeClass("defColor enemyColor");
        $("#kylo").removeClass("defColor enemyColor");
        reset();
    })

});