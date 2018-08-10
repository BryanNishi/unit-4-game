$(document).ready(function () {

    var isChosen = false;
    var defenderOpen = true;
    var skywalker = {
        hp: 100,
        chosen: false,
        defend: false,
        dead: false,
        atk: 6,
        ctr: 12,
    }
    var kenobi = {
        hp: 125,
        chosen: false,
        defend: false,
        dead: false,
        atk: 8,
        ctr: 15,
    }
    var vader = {
        hp: 100,
        chosen: false,
        defend: false,
        dead: false,
        atk: 12,
        ctr: 10,
    }
    var kylo = {
        hp: 150,
        chosen: false,
        defend: false,
        dead: false,
        atk: 10,
        ctr: 20,
    }

    

    $("#skywalkerHp").append(skywalker.hp);
    $("#kenobiHp").append(kenobi.hp);
    $("#vaderHp").append(vader.hp);
    $("#kyloHp").append(kylo.hp);
    $(".chosen").hide();
    $(".enemies").hide();
    $(".fight").hide();
    $(".defend").hide();
    

    //Player Character Chosen
    $(".btn").on("click", function () {
        $(".chosen").show();
        $(".enemies").show();
        
        
        if (this.id == "skywalker" && isChosen == false) {
            $(".skywalker").appendTo("#char");
            skywalker.chosen = true;
            $(".kenobi").appendTo("#enemies");
            $(".vader").appendTo("#enemies");
            $(".kylo").appendTo("#enemies");
        } else if (this.id == "kenobi" && isChosen == false) {
            $(".kenobi").appendTo("#char");
            kenobi.chosen = true;
            $(".skywalker").appendTo("#enemies");
            $(".vader").appendTo("#enemies");
            $(".kylo").appendTo("#enemies");
        } else if (this.id == "vader" && isChosen == false) {
            $(".vader").appendTo("#char");
            vader.chosen = true;
            $(".kenobi").appendTo("#enemies");
            $(".skywalker").appendTo("#enemies");
            $(".kylo").appendTo("#enemies");
        } else if (this.id == "kylo" && isChosen == false) {
            $(".kylo").appendTo("#char");
            kylo.chosen = true;
            $(".kenobi").appendTo("#enemies");
            $(".vader").appendTo("#enemies");
            $(".skywalker").appendTo("#enemies");
        }
        isChosen = true;
    })

    //Defender Chosen
    $(".btn").on("click", function () {
        if (this.id == "skywalker" && isChosen == true && skywalker.chosen !== true && defenderOpen == true) {
            $(".skywalker").appendTo("#defender");
            skywalker.defend = true;
            defenderOpen = false;

        } else if (this.id == "kenobi" && isChosen == true && kenobi.chosen !== true && defenderOpen == true) {
            $(".kenobi").appendTo("#defender");
            kenobi.defend = true;
            defenderOpen = false;

        } else if (this.id == "vader" && isChosen == true && vader.chosen !== true && defenderOpen == true) {
            $(".vader").appendTo("#defender");
            vader.defend = true;
            defenderOpen = false;

        } else if (this.id == "kylo" && isChosen == true && kylo.chosen !== true && defenderOpen == true) {
            $(".kylo").appendTo("#defender");
            kylo.defend = true;
            defenderOpen = false;

        }

    })

    //Attack functions
    //skywalker attacks
    $("#attack").on("click", function () {
        if (skywalker.chosen == true && kenobi.defend == true && kenobi.dead !== true) {
            console.log("sky v kenobi attack");
            kenobi.hp -= skywalker.atk;
            skywalker.hp -= kenobi.ctr;
            skywalker.atk += 6;
            $("#skywalkerHp").text(skywalker.hp);
            $("#kenobiHp").text(kenobi.hp)

        } else if (skywalker.chosen == true && vader.defend == true && vader.dead !== true) {
            console.log("sky v vader attack");
            vader.hp -= skywalker.atk;
            skywalker.hp -= vader.ctr;
            skywalker.atk += 6;
            $("#skywalkerHp").text(skywalker.hp);
            $("#vaderHp").text(vader.hp)
        } else if (skywalker.chosen == true && kylo.defend == true && kylo.dead !== true) {
            console.log("sky v kylo attack");
            kylo.hp -= skywalker.atk;
            skywalker.hp -= kylo.ctr;
            skywalker.atk += 6;
            $("#skywalkerHp").text(skywalker.hp);
            $("#kyloHp").text(kylo.hp)
        }
        //kenobi attacks
        else if (kenobi.chosen == true && skywalker.defend == true && skywalker.dead !== true) {
            console.log("kenobi v sky attack");
            skywalker.hp -= kenobi.atk;
            kenobi.hp -= skywalker.ctr;
            kenobi.atk += 6;
            $("#skywalkerHp").text(skywalker.hp);
            $("#kenobiHp").text(kenobi.hp)
        } else if (kenobi.chosen == true && vader.defend == true && vader.dead !== true) {
            console.log("kenobi v vader attack");
            vader.hp -= kenobi.atk;
            kenobi.hp -= vader.ctr;
            kenobi.atk += 6;
            $("#vaderHp").text(vader.hp);
            $("#kenobiHp").text(kenobi.hp)
        } else if (kenobi.chosen == true && kylo.defend == true && kylo.dead !== true) {
            console.log("kenobi v kylo attack");
            kylo.hp -= kenobi.atk;
            kenobi.hp -= kylo.ctr;
            kenobi.atk += 6;
            $("#kyloHp").text(kylo.hp);
            $("#kenobiHp").text(kenobi.hp)
        }
        //vader attacks           
        else if (vader.chosen == true && kenobi.defend == true && kenobi.dead !== true) {
            console.log("vader v kenobi attack");
            kenobi.hp -= vader.atk;
            vader.hp -= kenobi.ctr;
            vader.atk += 6;
            $("#vaderHp").text(vader.hp);
            $("#kenobiHp").text(kenobi.hp)
        } else if (vader.chosen == true && skywalker.defend == true && skywalker.dead !== true) {
            console.log("vader v sky attack");
            skywalker.hp -= vader.atk;
            vader.hp -= skywalker.ctr;
            vader.atk += 6;
            $("#vaderHp").text(vader.hp);
            $("#skywalkerHp").text(skywalker.hp)
        } else if (vader.chosen == true && kylo.defend == true && kylo.dead !== true) {
            console.log("vader v kylo attack");
            kylo.hp -= vader.atk;
            vader.hp -= kylo.ctr;
            vader.atk += 6;
            $("#vaderHp").text(vader.hp);
            $("#kyloHp").text(kylo.hp)
        }
        //kylo attacks
        else if (kylo.chosen == true && kenobi.defend == true && kenobi.dead !== true) {
            console.log("kylo v kenobi attack");
            kenobi.hp -= kylo.atk;
            kylo.hp -= kenobi.ctr;
            kylo.atk += 6;
            $("#kenobiHp").text(kenobi.hp);
            $("#kyloHp").text(kylo.hp)
        } else if (kylo.chosen == true && vader.defend == true && vader.dead !== true) {
            console.log("kylo v vader attack");
            vader.hp -= kylo.atk;
            kylo.hp -= vader.ctr;
            kylo.atk += 6;
            $("#vaderHp").text(vader.hp);
            $("#kyloHp").text(kylo.hp)
        } else if (kylo.chosen == true && skywalker.defend == true && skywalker.dead !== true) {
            console.log("kylo v sky attack");
            skywalker.hp -= kylo.atk;
            kylo.hp -= skywalker.ctr;
            kylo.atk += 6;
            $("#skywalkerHp").text(skywalker.hp)
            $("#kyloHp").text(kylo.hp)
        }
    })

    //defeated
    $("#attack").on("click", function () {
        if (skywalker.hp <= 0) {
            skywalker.dead == true;
            $("#skywalker").hide();
            defenderOpen == true;
            if (skywalker.chosen == true) {
                gameover()
            }
        } else if (kenobi.hp <= 0) {
            kenobi.dead == true;
            $("#kenobi").hide();
            defenderOpen == true;
            if (kenobi.chosen == true) {
                gameover()
            }
        } else if (vader.hp <= 0) {
            vader.dead == true;
            $("#vader").hide();
            defenderOpen == true;
            if (vader.chosen == true) {
                gameover()
            }
        } else if (kylo.hp <= 0) {
            kylo.dead == true;
            $("#kylo").hide();
            defenderOpen == true;
            if (kylo.chosen == true) {
                gameover()
            }
        }
    })


    //Win 
    $("#attack").on("click", function () {
        if (skywalker.chosen == true && vader.dead == true && kenobi.dead == true && kylo.dead == true) {
            alert("You Win!");
        } else if (kenobi.chosen == true && vader.dead == true && skywalker.dead == true && kylo.dead == true) {
            alert("You Win!");

        } else if (vader.chosen == true && kenobi.dead == true && skywalker.dead == true && kylo.dead == true) {
            alert("You Win!");

        } else if (kylo.chosen == true && kenobi.dead == true && skywalker.dead == true && kenobi.dead == true) {
            alert("You Win!");
        }
    })

    function gameover() {
        alert("You lost!");
    }
});