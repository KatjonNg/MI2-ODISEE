/**
 * @author Katjon Ng
 * student Odisee
 * 1BI TI/1I2
 * r0371936 - 255744
 * TrollSlayer v1.0
 */

// This code will detect errors for you more easily and will stop you for producing more errors.
"use strict";

/*
 **GENERAL INFORMATION**
 */
/*
    X = Width
    Y = Height
*/

// The HTML wil be loaded before the execution of the JS code. If JS is executed before HTML is loaded then there might occur
// some error that some elements doesn't exist in jQuery.

$(document).ready(function() {
    /*
     **GLOBAL VARIABLE**
     */
    // Map
    var mapX = $("#Map").width();
    var mapY = $("#Map").height();
    var mapPosition = $("#Map").position();

    // Player
    var player;
    var playerX;
    var playerY;
    var playerMsSpeed = 20;
    var playerPosition;
    var playerHp = 50;
    var playerDmg = 10;
    var playerBankai = false;

    // Weapon
    var weapon;
    var weaponX;
    var weaponY;
    var weaponPosition;

    // Troll
    var troll;
    var trollX;
    var trollY;
    var trollInterval;
    var trollMsSpeed = 10;
    var trollAutoMoveSpeed;
    var trollRandomMoveDirection;
    var trollHp = 10;
    var trollDmg = 10;
    //var trollPosition;
    // Timer
    var spawnTrollSpeed = 3000;       // Time in milliseconds

    // Collision
    var collisionWeapon = false;

    // Info
    var infoLvl = 1;
    var infoScore = 0;

    /*
     **TIME FOR PARTY**
     */

    // Ready to rule? Let's start the game!
    startGame();

    /*
    **LOAD DEFAULT MAP AND CHARACTER**
    */

    // Start game with default map and character
    function startGame(){
        createPlayer();
        spawnWeapon();
        trollInterval = window.setInterval(spawnTroll, spawnTrollSpeed);                   // Spawn troll every 3 seconds
        trollAutoMoveSpeed = window.setInterval(autoMoveTrolls, 500);

        // Allow keyboard controls
        $(document).keydown(keyboardKeys);
        //showLog();
        showInfo();
    }

    /*
    **SHOWING TEST VALUES USING LOG**
    */

    // Show log files for troubleshooting
    function showLog(){
        console.log(playerX);
        console.log(weaponX);
        console.log(weaponY);
        console.log(playerY);
        console.log(mapX);
        console.log(mapY);
        console.log(mapPosition);
    }

    /*
     **SHOW BASIC INFO**
     */

    //
    function showInfo(){
        var divInfo = document.getElementById('Info');

        divInfo.innerHTML = divInfo.innerHTML + 'Player HP ' + playerHp + '<br>';
        divInfo.innerHTML = divInfo.innerHTML + 'Player Dammage ' + playerDmg + '<br>';
        divInfo.innerHTML = divInfo.innerHTML + 'Level ' + infoLvl + '<br>';
        divInfo.innerHTML = divInfo.innerHTML + 'Score ' + infoScore;

        //document.write("HP " + infoHp);
        //document.write("Level " + infoLvl);
    }

    /*
    **CREATION OF CHARACTERS**
    */

    // Create a new player
    function createPlayer() {
        player = '<div id=Player><div>';
        $("#Map").append(player);

        playerX = $("#Player").width();
        playerY = $("#Player").height();
        console.log("Player has been created succesfully.");
    }

    // Show left side image of player without weapon
    function showPlayerLeft() {
        $("#Player").css(
            "background-image", "url('Game/img/TrollslayerLeft.png')"
        );
    }

    // Show right side image of player without weapon
    function showPlayerRight() {
        $("#Player").css(
            "background-image", "url('Game/img/TrollslayerRight.png')"
        );
    }

    // Show left side image of player weapon
    function showPlayerWithWeaponLeft() {
        $("#Player").css(
            "background-image", "url('Game/img/TrollslayerLeftSword.png')"
        );
    }


    // Show right side image of player weapon
    function showPlayerWithWeaponRight() {
        $("#Player").css(
            "background-image", "url('Game/img/TrollslayerRightSword.png')"
        );
    }

     // Soawn a new weapon
    function spawnWeapon() {
        weapon = '<div id="Weapon"><div>';
        $("#Map").append(weapon);

        weaponX = $("#Weapon").width();
        weaponY = $("#Weapon").height();

        $("#Weapon").css({
            'left' : 1100 + 'px',
            'top' : 10 + 'px'
        });
        console.log("Weapon has been spawned succesfully.");
     }

     // Create a new troll
     function spawnTroll() {
        // Random number generator
        var randomX = Math.floor((Math.random() * 1100) + 1);      // Numbers from 1 to 1100
        var randomY = Math.floor((Math.random() * 650) + 1);       // Numbers from 1 to 650
        trollRandomMoveDirection = Math.floor((Math.random() * 4) + 1);      // Numbers from 1 to 4
        console.log(trollRandomMoveDirection)

        var newTrollPosition = $(".Troll").position();
        //trollPosition = newTrollPosition;

        $("body").append($("<div>").addClass("Troll").css({
            "left" : randomX,
            "top" : randomY
        }));
        console.log("Troll has been spwaned succesfully.");
     }

    /*
     **MOVEVEMENT OF CHARACTERS**
     */
    // Move player left
    function movePlayerLeft(){
        $("#Player").css('left', playerPosition.left - playerMsSpeed + 'px');
    }

    // Move player right
    function movePlayerRight(){
        $("#Player").css('left', playerPosition.left + playerMsSpeed + 'px');
    }

    // Move player up
    function movePlayerUp(){
        $("#Player").css('top', playerPosition.top - playerMsSpeed + 'px');
    }

    // Move player down
    function movePlayerDown(){
        $("#Player").css('top', playerPosition.top + playerMsSpeed + 'px');
    }

    /*
     **AUTO MOVE MONSTERS**
     */

    function autoMoveTrolls(){
        var trollPosition = $(".Troll").position();
        //trollPosition = newTrollPosition;

        switch(trollRandomMoveDirection){
            case 1: // Move left.
                $(".Troll").css('left', trollPosition.left - trollMsSpeed + 'px');
                break;
            case 2: // Move right.
                $(".Troll").css('left', trollPosition.left + trollMsSpeed + 'px');
                break;
            case 3: // Move up.
                $(".Troll").css('top', trollPosition.top - trollMsSpeed + 'px');
                break;
            case 4: // Move down.
                $(".Troll").css('top', trollPosition.top + trollMsSpeed + 'px');
                break;
        }
    }


    /*
    **CONTROLS FOR PLAYER**
    */

    // Controls using keyboard
    function keyboardKeys(event) {

        checkCollisionWeapon();

        switch(event.which) {
            case 32: // Space

                break;
            case 65: // a
            case 81: // q
            case 37: // Left arrow key
                // Weapon not yet grabbed.
                if (collisionWeapon == false){
                    // Player hit top left wall.
                    if (playerPosition.left <= mapPosition.left) {
                        console.log("Player hit the left top wall and can not move any further");
                    }
                    else{
                        // Player move left.
                        showPlayerLeft();
                        movePlayerLeft();
                    }
                }
                // Weapon grabbed.
                else{
                    // Player hit left top wall.
                    if (playerPosition.left <= mapPosition.left) {
                        console.log("Player hit the left top wall and can not move any further");
                    }
                        if (playerBankai == false){
                            // Player move left.
                            showPlayerWithWeaponLeft();
                            movePlayerLeft();
                        }
                        else{
                            // Player move left.
                            showPlayerWithWeaponLeft();
                            movePlayerLeft();
                        }
                }
                break;
            case 87: // w
            case 90: // z
            case 38: // Up arrow key
                // Weapon not yet grabbed.
                if (collisionWeapon == false){
                    if (playerPosition.top <= mapPosition.top) {
                        console.log("Player hit the top wall and can not move any further");
                    }
                    else {
                        movePlayerUp();
                    }
                }
                // Weapon grabbed.
                else{
                    // Player hit left top wall.
                    if (playerPosition.top <= mapPosition.top) {
                        console.log("Player hit the left top wall and can not move any further");
                    }
                    else{
                    // Player move top.
                        movePlayerUp();
                    }
                }
                break;
            case 68: // d
            case 39: // Right arrow key
                // Weapon not yet grabbed.
                if (collisionWeapon == false){
                    if (playerPosition.left >= mapPosition.left + mapX - playerX) {
                        console.log("Player hit the bottom wall and can not move any further");
                    }
                    else {
                        showPlayerRight();
                        movePlayerRight();
                    }
                }
                // Weapon grabbed.
                else{
                    // Player hit left top wall.
                    if (playerPosition.left >= mapPosition.left + mapX - playerX) {
                        console.log("Player hit the left top wall and can not move any further");
                    }
                    else{
                    // Player move left.
                        showPlayerWithWeaponRight();
                        movePlayerRight();
                    }
                }
                break;
            case 83: // s
            case 40: // Down arrow key
                // Weapon not yet grabbed.
                if (collisionWeapon == false){
                    if (playerPosition.top >= mapPosition.top + mapY - playerY) {
                        console.log("Player hit the bot wall and can not move any further");
                    }
                    else {
                        movePlayerDown();
                    }

                }
                // Weapon grabbed.
                else{
                    // Player hit left top wall.
                    if (playerPosition.top >= mapPosition.top + mapY - playerY) {
                        console.log("Player hit the left top wall and can not move any further");
                    }
                    else{
                    // Player move left.
                        movePlayerDown();
                    }
                }
             break;
            case 82: //r
                if (score == 500 || playerBankai == false){
                    playerBankai == true
                }
            break;
        }
    }

    /*
    **COLLISION DETECTION**
    */

    // Check if player grabbed the weapon
    function checkCollisionWeapon(){
        playerPosition = $("#Player").position();
        weaponPosition = $("#Weapon").position();

        var x1 = $("#Player").offset().left;
        var y1 = $("#Player").offset().top;
        var w1 = $("#Player").outerWidth(true);
        var r1 = x1 + w1;


        if (collisionWeapon == false){
            // Only use this variable if weapon exist.
            var x2 = $("#Weapon").offset().left;
            var y2 = $("#Weapon").offset().top;
            var h2 = $("#Weapon").outerHeight(true);
            var b2 = y2 + h2;

            if (r1 > x2 && y1 < b2){
                document.getElementById("Weapon").remove();
                console.log("Player has grabbed the weapon succesfully.");
                collisionWeapon = true;
            }
        }
    }
});