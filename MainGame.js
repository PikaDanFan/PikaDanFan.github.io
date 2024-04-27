<html>
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js" integrity="sha512-uaz5GpnQoE6t5echKlX8P52czvsIGgLPcvlzfvRubLZ1Hp8JemUDnbUiAahbVtPb+jUVrNETuXvAhDDF/N3M4w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script defer src="https://unpkg.com/p5.collide2d"></script>
        <title>Game</title>
        <style>
            body {
                padding: 0;
                margin: 0;
                overflow: hidden;
                width: 100%;
                height: 100%;
                background-image: url("Grass.png");
                background-repeat: repeat;
                background-size: 200px;
                overflow: hidden;
            }
            #ShopButton {
                position: absolute;
                right: 10px;
                bottom: 10px;
                font-family:Georgia, 'Times New Roman', Times, serif;
                font-size: 40px;
                border-width: 5px;
                border-color: grey;
                background-color: rgb(85, 85, 85);
                color: white;
            }
            #settingButton {
                position: absolute;
                right: 10px;
                top: 10px;
                width: 100px;
                height: 100px;
                background-color: rgb(112, 112, 112);
                border-style: solid;
                border-color: black;
                border-width: 3px;
            }
            #ShowInfo {
                position: absolute;
                left: 10px;
                top: 5px;
                width: 150px;
                height: 15px;
                background-color: grey;
                border-width: 1px;
                line-height: 1px;
                color: black;
                visibility: visible;
            }
            #HideInfo {
                position: absolute;
                left: 10px;
                top: 5px;
                width: 150px;
                height: 15px;
                background-color: grey;
                border-width: 1px;
                line-height: 1px;
                color: black;
                visibility: hidden;
            }
            #Status {
                position: absolute;
                top: 10px;
                left: 10px;
                width: 150;
                height: 150;
                background-color: grey;
                visibility: hidden;
            }
            #ItemPicture {
                position: absolute;
                top: 10;
                left: 10;
                width: 75px;
                height: 75px;
                background-color: white;
                border-style: groove;
                border-color: black;
                border-width: 5px;
                background-image: none;
                background-repeat: no-repeat;
            }
            h2 {
                line-height: 5px;
            }
            #PlayerInfo {
                position: absolute;
                top: 90px;
                left: 10px;
            }
        </style>
    </head>
    <body onunload = "saveProgress()">
        <button id = "settingButton" onclick = "Settings()"></button>
        <div id = "settings">

        </div>
        <button id = "ShowInfo" onclick = "showInfo()">Show Status</button>
        <div id = "Status">
            <div id = "ItemPicture"></div>
            <div id = "PlayerInfo">
                <h2 id = "Water"></h2>
                <h2 id = "Money"></h2>
                <h2 id = "Lemon"></h2>
            </div>
        </div>
        <button id = "HideInfo" onclick = "hideInfo()">Hide Status</button>
        <button onclick = "goToShop()" id = "ShopButton">SHOP</button>
        <script>
            function showInfo() {
                document.getElementById("Status").style.visibility = "visible"
                document.getElementById("ShowInfo").style.visibility = "hidden"
                document.getElementById("HideInfo").style.visibility = "visible"
            }
            function hideInfo() {
                document.getElementById("Status").style.visibility = "hidden"
                document.getElementById("ShowInfo").style.visibility = "visible"
                document.getElementById("HideInfo").style.visibility = "hidden"
            }
            // I feel bad for whoever has to read all this lol
        </script>
        <script src="MainGame.js"></script> 
    </body>
</html>
