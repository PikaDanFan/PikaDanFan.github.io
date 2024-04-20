// Place all global variables here
// Canvas Variables
let w = window.innerWidth
let h = window.innerHeight
let enemy;
let space_down;

// Object variables
let clipper;
let glove;
let cat;
let table;
let waterCan;
let hose;

// Image variables
let plotImage;
let tableImage;
let clipperImage;
let gloveImage;
let waterCanImage;
let playerImage;
let growingImage;
let dehydrateImage;
let grownImage;
let rotImage;
let hoseImage;

// Preload
function preload() {
    growingImage = loadImage("Growing.png")
    plotImage = loadImage("Plot.png")
    tableImage = loadImage("Table.png")
    clipperImage = loadImage("Clipper.png")
    gloveImage = loadImage("Gloves.png")
    waterCanImage = loadImage("Watering Can.png")
    playerImage = loadImage("Player.png")
    dehydrateImage = loadImage("Dehydrate.png")
    grownImage = loadImage("Grown.png")
    rotImage = loadImage("Rot.png")
    hoseImage = loadImage("Hose.png")
}

// Setup
function setup() {
    createCanvas(w,h)
    table = new ToolTable()
    clipper = new Clippers()
    glove = new Gloves()
    cat = new Kat()
    waterCan = new WateringCan()
    hose = new Hose()
}

// New Save File here
function newSave() {
    // Plot 1
    localStorage.setItem("Plot1Stage","plot")
    localStorage.setItem("Plot1Grow",null)
    localStorage.setItem("Plot1Rot",null)
    localStorage.setItem("Plot1Dehydrate",null)

    // Plot 2
    localStorage.setItem("Plot2Stage","plot")
    localStorage.setItem("Plot2Grow",null)
    localStorage.setItem("Plot2Rot",null)
    localStorage.setItem("Plot2Dehydrate",null)

    // Plot 3
    localStorage.setItem("Plot3Stage","plot")
    localStorage.setItem("Plot3Grow",null)
    localStorage.setItem("Plot3Rot",null)
    localStorage.setItem("Plot3Dehydrate",null)

    // Plot 4
    localStorage.setItem("Plot4Stage","plot")
    localStorage.setItem("Plot4Grow",null)
    localStorage.setItem("Plot4Rot",null)
    localStorage.setItem("Plot4Dehydrate",null)

    // Plot 5
    localStorage.setItem("Plot5Stage","plot")
    localStorage.setItem("Plot5Grow",null)
    localStorage.setItem("Plot5Rot",null)
    localStorage.setItem("Plot5Dehydrate",null)

    location.href = "Game.html"
}

// Plot variables: [Stage,GrowingTimer,RottingTimer,DehydrationTimer,TypeofPlant]
function saveProgress() {
    for (let plot of plotList) {
        if (plot.id == 1) {
            localStorage.setItem("Plot1Stage",plot.stage)
            localStorage.setItem("Plot1Grow",plot.growthTime)
            localStorage.setItem("Plot1Rot",plot.rotTime)
            localStorage.setItem("Plot1Dehydrate",plot.dehydrateTime)
        }
        if (plot.id == 2) {
            localStorage.setItem("Plot2Stage",plot.stage)
            localStorage.setItem("Plot2Grow",plot.growthTime)
            localStorage.setItem("Plot2Rot",plot.rotTime)
            localStorage.setItem("Plot2Dehydrate",plot.dehydrateTime)
        }
        if (plot.id == 3) {
            localStorage.setItem("Plot3Stage",plot.stage)
            localStorage.setItem("Plot3Grow",plot.growthTime)
            localStorage.setItem("Plot3Rot",plot.rotTime)
            localStorage.setItem("Plot3Dehydrate",plot.dehydrateTime)
        }
        if (plot.id == 4) {
            localStorage.setItem("Plot4Stage",plot.stage)
            localStorage.setItem("Plot4Grow",plot.growthTime)
            localStorage.setItem("Plot4Rot",plot.rotTime)
            localStorage.setItem("Plot4Dehydrate",plot.dehydrateTime)
        }
        if (plot.id == 5) {
            localStorage.setItem("Plot5Stage",plot.stage)
            localStorage.setItem("Plot5Grow",plot.growthTime)
            localStorage.setItem("Plot5Rot",plot.rotTime)
            localStorage.setItem("Plot5Dehydrate",plot.dehydrateTime)
        }
    }
}

// Work on custom settings
function Settings() {
    console.log("Settings")
}

// Load everything
// Plot variables: [Stage,GrowingTimer,RottingTimer,DehydrationTimer]
var plot1Variables = [localStorage.getItem("Plot1Stage"),localStorage.getItem("Plot1Grow"),localStorage.getItem("Plot1Rot"),localStorage.getItem("Plot1Dehydrate")]

var plot2Variables = [localStorage.getItem("Plot2Stage"),localStorage.getItem("Plot2Grow"),localStorage.getItem("Plot2Rot"),localStorage.getItem("Plot2Dehydrate")]

var plot3Variables = [localStorage.getItem("Plot3Stage"),localStorage.getItem("Plot3Grow"),localStorage.getItem("Plot3Rot"),localStorage.getItem("Plot3Dehydrate")]

var plot4Variables = [localStorage.getItem("Plot4Stage"),localStorage.getItem("Plot4Grow"),localStorage.getItem("Plot4Rot"),localStorage.getItem("Plot4Dehydrate")]

var plot5Variables = [localStorage.getItem("Plot5Stage"),localStorage.getItem("Plot5Grow"),localStorage.getItem("Plot5Rot"),localStorage.getItem("Plot5Dehydrate")]

console.log(plot1Variables,plot2Variables,plot3Variables,plot4Variables,plot5Variables)

// Player
let player = {
    // Variables for the player
    x: w/2,
    y: h/2,
    radius: 100,
    width: 100,
    height: 100,
    item: [],
    canDrop: false,

    // Show the player
    show: function() {
        image(playerImage,this.x - this.width/2,this.y - this.height/2,this.width,this.height)
    },

    // Create player movement
    movement: function() {
        // Moving up
        if ((keyIsDown(UP_ARROW) || (keyIsDown(87))) && (this.y > this.radius/2)) {
            this.y -= 7
            if (keyIsDown(16) && (this.item.length == 0)) {
                this.y -= 4
            }
        }

        // Moving right
        if ((keyIsDown(RIGHT_ARROW) || (keyIsDown(68))) && (this.x < w - this.radius/2)) {
            this.x += 7
            if (((this.y >= h - 170) && (this.y < h)) && (this.x >= ((width/2) - (170)) - this.radius/2) && (this.x <= ((width/2) + (175)) - this.radius/2)) {
                this.x -= 7
            }
            if (keyIsDown(16) && (this.item.length == 0)) {
                this.x += 4
            }
        }

        // Moving down
        if ((keyIsDown(DOWN_ARROW) || (keyIsDown(83))) && (this.y < h - this.radius/2)) {
            this.y += 7
            if ((this.x >= ((w/2) - (205))) && (this.x <= ((w/2) + (215))) && (this.y >= (h - 120) - this.radius/2)) {
                this.y -= 7
            }
            if (keyIsDown(16) && (this.item.length == 0)) {
                this.y += 4
            }
        }

        // Moving left
        if ((keyIsDown(LEFT_ARROW) || (keyIsDown(65))) && (this.x > this.radius/2)) {
            this.x -= 7
            if (((this.y >= h - 170) && (this.y < h)) && (this.x <= ((width/2) + (170)) + this.radius/2) && (this.x >= (width/2) - (175))) {
                this.x += 7
            }
            if (keyIsDown(16) && (this.item.length == 0)) {
                this.x -= 4
            }
        }
    }
}

// Plot
let plotList = []
for (let i = 0; i < 5; i += 1) {
    function Plot() {
        // Plot variables
        this.width = 100
        this.height = 100
        if ((i == 0) || (i == 4)) {
            if (i == 0) {
                this.x = w/6 - this.width/2
                this.id = 1

                // If plot
                if (plot1Variables[0] == "plot") {
                    // Growth variables
                    this.growthTimeSet = false
                    this.growthTime;
                    this.growing = false

                    // Rot variables
                    this.rotTimeSet = false
                    this.rotting = false
                    this.rotTime;
                    this.canRot = true

                    // Dehydrate variables
                    this.dehydrateTimeSet = false
                    this.dehydrating = false
                    this.dehydrateTime;
                    this.canDehydrate = true

                    // Stage variable
                    this.stage = "plot"
                }

                // If not plot
                if (plot1Variables[0] != "plot") {
                    this.stage = plot1Variables[0]
                    
                    // If Grown
                    if (this.stage == "grown") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = 0
                        this.growing = true

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot1Variables[2]
                        this.canRot = false

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot1Variables[3]
                        this.canDehydrate = false
                    }

                    // If rot
                    if (this.stage == "rot") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot1Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = true
                        this.rotTime = 0
                        this.canRot = true

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot1Variables[3]
                        this.canDehydrate = false
                    }

                    // If dehydrate
                    if (this.stage == "dehydrate") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot1Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot1Variables[2]
                        this.canRot = false

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = true
                        this.dehydrateTime = 0
                        this.canDehydrate = true
                    }

                    // If plant
                    if (this.stage == "plant") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot1Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot1Variables[2]
                        this.canRot = true

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot1Variables[3]
                        this.canDehydrate = true
                    }
                }
            }
            if (i == 4) {
                this.x = (w/6 * 5) - this.width/2
                this.id = 5
                // If plot
                if (plot5Variables[0] == "plot") {
                    // Growth variables
                    this.growthTimeSet = false
                    this.growthTime;
                    this.growing = false

                    // Rot variables
                    this.rotTimeSet = false
                    this.rotting = false
                    this.rotTime;
                    this.canRot = true

                    // Dehydrate variables
                    this.dehydrateTimeSet = false
                    this.dehydrating = false
                    this.dehydrateTime;
                    this.canDehydrate = true

                    // Stage variable
                    this.stage = "plot"
                }

                // If not plot
                if (plot5Variables[0] != "plot") {
                    this.stage = plot5Variables[0]
                    
                    // If Grown
                    if (this.stage == "grown") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = 0
                        this.growing = true

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot5Variables[2]
                        this.canRot = false

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot5Variables[3]
                        this.canDehydrate = false
                    }

                    // If rot
                    if (this.stage == "rot") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot5Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = true
                        this.rotTime = 0
                        this.canRot = true

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot5Variables[3]
                        this.canDehydrate = false
                    }

                    // If dehydrate
                    if (this.stage == "dehydrate") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot5Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot5Variables[2]
                        this.canRot = false

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = true
                        this.dehydrateTime = 0
                        this.canDehydrate = true
                    }
                    
                    // If plant
                    if (this.stage == "plant") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot5Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot5Variables[2]
                        this.canRot = true

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot5Variables[3]
                        this.canDehydrate = true
                    }
                }
            }
            this.y = 150
        }
        if ((i == 1) || (i == 3)) {
            if (i == 1) {
                this.x = (w/6 * 2) - this.width/2
                this.id = 2
                // If plot
                if (plot2Variables[0] == "plot") {
                    // Growth variables
                    this.growthTimeSet = false
                    this.growthTime;
                    this.growing = false

                    // Rot variables
                    this.rotTimeSet = false
                    this.rotting = false
                    this.rotTime;
                    this.canRot = true

                    // Dehydrate variables
                    this.dehydrateTimeSet = false
                    this.dehydrating = false
                    this.dehydrateTime;
                    this.canDehydrate = true

                    // Stage variable
                    this.stage = "plot"
                }

                // If not plot
                if (plot2Variables[0] != "plot") {
                    this.stage = plot2Variables[0]
                    
                    // If Grown
                    if (this.stage == "grown") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = 0
                        this.growing = true

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot2Variables[2]
                        this.canRot = false

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot2Variables[3]
                        this.canDehydrate = false
                    }

                    // If rot
                    if (this.stage == "rot") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot2Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = true
                        this.rotTime = 0
                        this.canRot = true

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot2Variables[3]
                        this.canDehydrate = false
                    }

                    // If dehydrate
                    if (this.stage == "dehydrate") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot2Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot2Variables[2]
                        this.canRot = false

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = true
                        this.dehydrateTime = 0
                        this.canDehydrate = true
                    }

                    // If plant
                    if (this.stage == "plant") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot2Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot2Variables[2]
                        this.canRot = true

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot2Variables[3]
                        this.canDehydrate = true
                    }
                }
            }
            if (i == 3) {
                this.x = (w/6 * 4) - this.width/2
                this.id = 4

                // If plot
                if (plot4Variables[0] == "plot") {
                    // Growth variables
                    this.growthTimeSet = false
                    this.growthTime;
                    this.growing = false

                    // Rot variables
                    this.rotTimeSet = false
                    this.rotting = false
                    this.rotTime;
                    this.canRot = true

                    // Dehydrate variables
                    this.dehydrateTimeSet = false
                    this.dehydrating = false
                    this.dehydrateTime;
                    this.canDehydrate = true

                    // Stage variable
                    this.stage = "plot"
                }

                // If not plot
                if (plot4Variables[0] != "plot") {
                    this.stage = plot4Variables[0]
                    
                    // If Grown
                    if (this.stage == "grown") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = 0
                        this.growing = true

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot4Variables[2]
                        this.canRot = false

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot4Variables[3]
                        this.canDehydrate = false
                    }

                    // If rot
                    if (this.stage == "rot") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot4Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = true
                        this.rotTime = 0
                        this.canRot = true

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot4Variables[3]
                        this.canDehydrate = false
                    }

                    // If dehydrate
                    if (this.stage == "dehydrate") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot4Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot4Variables[2]
                        this.canRot = false

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = true
                        this.dehydrateTime = 0
                        this.canDehydrate = true
                    }

                    // If plant
                    if (this.stage == "plant") {
                        // Growth variables
                        this.growthTimeSet = true
                        this.growthTime = plot4Variables[1]
                        this.growing = false

                        // Rot variables
                        this.rotTimeSet = true
                        this.rotting = false
                        this.rotTime = plot4Variables[2]
                        this.canRot = true

                        // Dehydrate variables
                        this.dehydrateTimeSet = true
                        this.dehydrating = false
                        this.dehydrateTime = plot4Variables[3]
                        this.canDehydrate = true
                    }
                }
            }
            this.y = 75
        }
        if (i == 2) {
            this.x = w/2 - this.width/2
            this.y = 25
            this.id = 3

            // If plot
            if (plot3Variables[0] == "plot") {
                // Growth variables
                this.growthTimeSet = false
                this.growthTime;
                this.growing = false

                // Rot variables
                this.rotTimeSet = false
                this.rotting = false
                this.rotTime;
                this.canRot = true

                // Dehydrate variables
                this.dehydrateTimeSet = false
                this.dehydrating = false
                this.dehydrateTime;
                this.canDehydrate = true

                // Stage variable
                this.stage = "plot"
            }

            // If not plot
            if (plot3Variables[0] != "plot") {
                this.stage = plot3Variables[0]
                
                // If Grown
                if (this.stage == "grown") {
                    // Growth variables
                    this.growthTimeSet = true
                    this.growthTime = 0
                    this.growing = true

                    // Rot variables
                    this.rotTimeSet = true
                    this.rotting = false
                    this.rotTime = plot3Variables[2]
                    this.canRot = false

                    // Dehydrate variables
                    this.dehydrateTimeSet = true
                    this.dehydrating = false
                    this.dehydrateTime = plot3Variables[3]
                    this.canDehydrate = false
                }

                // If rot
                if (this.stage == "rot") {
                    // Growth variables
                    this.growthTimeSet = true
                    this.growthTime = plot3Variables[1]
                    this.growing = false

                    // Rot variables
                    this.rotTimeSet = true
                    this.rotting = true
                    this.rotTime = 0
                    this.canRot = true

                    // Dehydrate variables
                    this.dehydrateTimeSet = true
                    this.dehydrating = false
                    this.dehydrateTime = plot3Variables[3]
                    this.canDehydrate = false
                }

                // If dehydrate
                if (this.stage == "dehydrate") {
                    // Growth variables
                    this.growthTimeSet = true
                    this.growthTime = plot3Variables[1]
                    this.growing = false

                    // Rot variables
                    this.rotTimeSet = true
                    this.rotting = false
                    this.rotTime = plot3Variables[2]
                    this.canRot = false

                    // Dehydrate variables
                    this.dehydrateTimeSet = true
                    this.dehydrating = true
                    this.dehydrateTime = 0
                    this.canDehydrate = true
                }

                // If plant
                if (this.stage == "plant") {
                    // Growth variables
                    this.growthTimeSet = true
                    this.growthTime = plot3Variables[1]
                    this.growing = false

                    // Rot variables
                    this.rotTimeSet = true
                    this.rotting = false
                    this.rotTime = plot3Variables[2]
                    this.canRot = true

                    // Dehydrate variables
                    this.dehydrateTimeSet = true
                    this.dehydrating = false
                    this.dehydrateTime = plot3Variables[3]
                    this.canDehydrate = true
                }
            }
        }

        // Orignial Variables
        //  // Growth variables
        //  this.growthTimeSet = false
        //  this.growthTime;
        //  this.growing = false
        //  // Rot variables
        //  this.rotTimeSet = false
        //  this.rotting = false
        //  this.rotTime;
        //  this.canRot = true
 
        //  // Dehydrate variables
        //  this.dehydrateTimeSet = false
        //  this.dehydrating = false
        //  this.dehydrateTime;
        //  this.canDehydrate = true
 
        //  // Stage variable
        //  this.stage = "plot"

        // Showing function
        this.show = function() {
            if (this.stage == "plot") {
                image(plotImage,this.x,this.y,this.width,this.height)
            }
            if (this.stage == "plant") {
                image(growingImage,this.x,this.y,this.width,this.height)
            } 
            if (this.stage == "rot") {
                image(rotImage,this.x,this.y,this.width,this.height)
            }
            if (this.stage == "dehydrate") {
                image(dehydrateImage,this.x,this.y,this.width,this.height)
            }
            if (this.stage == "grown") {
                image(grownImage,this.x,this.y,this.width,this.height)
            }
        }

        // Make sure that everything is correct and all that
        if (((this.rotTime <= 0) || (this.rotTime == undefined)) && (this.stage == "plant")) {
            this.rotTimeSet = false
            this.rotting = false
            this.rotTime;
            this.canRot = true
        }
        if (((this.dehydrateTime <= 0) || (this.rotTime == undefined)) && (this.stage == "plant")) {
            this.dehydrateTimeSet = false
            this.dehydrating = false
            this.dehydrateTime;
            this.canDehydrate = true
        }

        // The planting function
        this.plant = function() {
            if (this.stage != "grown") {
                let c = collideRectCircle(this.x - this.width/5,this.y - this.width/5,this.width + (this.width/5 * 2),this.height + (this.width/5 * 2),player.x,player.y,player.radius)
                if ((c == true) && (keyIsDown(90)) && (this.stage == "plot")) {
                    this.stage = "plant"
                }

                if ((this.stage == "plant") && (this.growthTimeSet == false)) {
                    for (let i = 0; i <= 300; i += 1) {
                        if ((Math.ceil(Math.random() * 25) == 1) && (i >= 10)) {
                            this.growthTimeSet = true
                            this.growthTime = i
                            break
                        }
                        if (i == 300) {
                            this.growthTimeSet = true
                            this.growthTime = i
                            break
                        }
                    }
                }

                // Start growing
                if ((this.growthTimeSet == true) && (this.growing == false) && (this.stage == "plant")) {
                    this.growing = true
                    this.growingTimer = setInterval(() => {
                        this.growthTime -= 1

                        if (this.growthTime == 0) {
                            clearInterval(this.growingTimer)
                            clearInterval(this.rotTimer)
                            clearInterval(this.dehydrateTimer)
                            this.stage = "grown"
                        }
                    },1000)
                }
            }
        }

        // The rotting function
        this.rot = function() {
            if (this.stage != "grown") {
                let c = collideRectCircle(this.x - this.width/5,this.y - this.width/5,this.width + (this.width/5 * 2),this.height + (this.width/5 * 2),player.x,player.y,player.radius)

                // Creating a random number for the timing function
                if ((this.stage == "plant") && (this.rotTimeSet == false)) {
                    for (let i = 0; i <= 300; i += 1) {
                        if ((Math.ceil(Math.random() * 25) == 1) && (i >= 10)) {
                            this.rotTimeSet = true
                            this.rotTime = i
                            this.canRot = true
                            if (this.rotTime == this.growthTime) {
                                this.rotTime += 1
                            }
                            break
                        }
                        if (i == 300) {
                            this.rotTimeSet = true
                            this.rotTime = i
                            this.canRot = true
                            if (this.rotTime == this.growthTime) {
                                this.rotTime += 1
                            }
                            break
                        }
                    }
                }

                // Check if the plant is already rotting, if not start rotting
                if ((this.rotTimeSet == true) && (this.rotting == false) && (this.canRot == true)) {
                    this.rotting = true
                    this.rotTimer = setInterval(() => {
                        this.rotTime -= 1

                        if (this.rotTime == 0) {
                            clearInterval(this.rotTimer)
                            this.stage = "rot"
                            if (this.stage != "grown") {
                                this.growing = false
                                clearInterval(this.growingTimer)
                            }
                            if (this.stage != "dehydrate") {
                                this.dehydrating = false
                                clearInterval(this.dehydrateTimer)
                                this.canDehydrate = false
                            }
                        }
                    },1000)
                }

                // Check if the plant has grown already, if it has stop rotting
                if ((this.stage == "grown") && (this.rotting == true)) {
                    clearInterval(this.rotTimer)
                }

                // If the player has clippers and the plant is rotting, return to normal
                if ((this.stage == "rot") && (c == true) && (keyIsDown(90)) && (player.item.includes("Clipper"))) {
                    this.stage = "plant"
                    this.canDehydrate = true
                    this.rotTimeSet = false
                }
            }
        }

        // The dehydrated function
        this.dehydrate = function() {
            if (this.stage != "grown") {
                let c = collideRectCircle(this.x - this.width/5,this.y - this.width/5,this.width + (this.width/5 * 2),this.height + (this.width/5 * 2),player.x,player.y,player.radius)

                // Creating a random number for the timing function
                if ((this.stage == "plant") && (this.dehydrateTimeSet == false)) {
                    for (let i = 0; i <= 300; i += 1) {
                        if ((Math.ceil(Math.random() * 25) == 1) && (i >= 10)) {
                            this.dehydrateTimeSet = true
                            this.dehydrateTime = i
                            if (this.dehydrateTime == this.growthTime) {
                                this.dehydrateTime += 1
                                if (this.dehydrateTime == this.rotTime) {
                                    this.dehydrateTime += 1
                                }
                            }
                            if (this.dehydrateTime == this.rotTime) {
                                this.dehydrateTime += 1
                                if (this.dehydrateTime == this.growthTime) {
                                    this.dehydrateTime += 1
                                }
                            }
                            break
                        }
                        if (i == 300) {
                            this.dehydrateTimeSet = true
                            this.dehydrateTime = i
                            if (this.dehydrateTime == this.growthTime) {
                                this.dehydrateTime += 1
                                if (this.dehydrateTime == this.rotTime) {
                                    this.dehydrateTime += 1
                                }
                            }
                            if (this.dehydrateTime == this.rotTime) {
                                this.dehydrateTime += 1
                                if (this.dehydrateTime == this.growthTime) {
                                    this.dehydrateTime += 1
                                }
                            }
                            break
                        }
                    }
                }

                // Check if the plant is already dehydrating, if not start dehydrating
                if ((this.dehydrateTimeSet == true) && (this.dehydrating == false) && (this.canDehydrate == true)) {
                    this.dehydrating = true
                    this.dehydrateTimer = setInterval(() => {
                        this.dehydrateTime -= 1

                        if (this.dehydrateTime == 0) {
                            clearInterval(this.dehydrateTimer)
                            this.stage = "dehydrate"
                            if (this.stage != "grown") {
                                this.growing = false
                                clearInterval(this.growingTimer)
                            }
                            if (this.stage != "rot") {
                                this.rotting = false
                                clearInterval(this.rotTimer)
                                this.canRot = false
                            }
                        }
                    },1000)
                }

                // Check if the plant has grown already, if it has stop dehydrating
                if ((this.stage == "grown") && (this.dehydrating == true)) {
                    clearInterval(this.dehydrateTimer)
                }

                // If the player has watering can and the plant is dehydrating, return to normal
                if ((this.stage == "dehydrate") && (c == true) && (keyIsDown(90)) && (player.item.includes("Watering Can")) && (waterCan.water - waterCan.waterUsage >= 0)) {
                    this.stage = "plant"
                    this.canRot = true
                    this.dehydrateTimeSet = false
                    waterCan.water -= 2
                }
            }
        }

        // The harvesting function
        this.harvest = function() {
            let c = collideRectCircle(this.x - this.width/5,this.y - this.width/5,this.width + (this.width/5 * 2),this.height + (this.width/5 * 2),player.x,player.y,player.radius)
            if ((this.stage == "grown") && player.item.includes("Glove") && (keyIsDown(69)) && (c == true)) {
                // Growth variables
                this.growthTimeSet = false
                this.growthTime;
                this.growing = false

                // Rot variables
                this.rotTimeSet = false
                this.rotting = false
                this.rotTime;
                this.canRot = true
    
                // Dehydrate variables
                this.dehydrateTimeSet = false
                this.dehydrating = false
                this.dehydrateTime;
                this.canDehydrate = true
    
                // Stage variable
                this.stage = "plot"

                console.log("Harvested")
            }
        }
    }
    let plot = new Plot()
    plotList.push(plot)
}

// Tool Table
function ToolTable() {
    // Table variables  
    this.width = 350
    this.height = 150
    this.x = w/2 - this.width/2
    this.y = h - 125

    this.show = function() {
        fill("pink")
        image(tableImage,this.x,this.y,this.width,this.height)
    }
}

function Hose() {
    this.width = 100
    this.height = 100
    this.x = 10
    this.y = h - this.height

    this.show = function() {
        image(hoseImage,this.x,this.y,this.width,this.height)
    }

    this.fillWater = function() {
        let c = collideRectCircle(this.x + 25,this.y - 25,this.width,this.height,player.x,player.y,player.radius)
        if ((c == true) && (player.item.includes("Watering Can")) && (keyIsDown(90)) && (waterCan.water < waterCan.waterCapacity)) {
            console.log("Water")
        }
    }
}

// Clippers
function Clippers() {
    // Clipper variables
    this.picked = false
    this.picker = "none"
    this.width = 75
    this.height = 50 
    this.x = table.x + 15
    this.y = table.y + 15
    this.tableX = this.x
    this.tableY = this.y

    // Showing the clipper
    this.show = function() {
        if ((this.picked == true) && (this.picker == "player")) {
            this.x = player.x + 25
            this.y = player.y - this.height/2
        }
        if ((this.picked == true) && (this.picker == "Kat")) {
            this.x = lerp(this.x,table.x + table.width/2,0.01)
            this.y = lerp(this.y,table.y + table.height/2,0.01)
            console.log("ClipperPicked")
            if (dist(this.x,this.y,table.x + table.width/2,table.y + table.height/2) <= 125) {
                this.picked = false
                this.picker = "none"
                this.x = this.tableX
                this.y = this.tableY
                let clipperIndex = cat.item.indexOf("Clipper")
                cat.item.splice(clipperIndex,1)
                cat.justDropped = true
                console.log("Done", cat.justDropped)
            }
        }
        fill("grey")
        image(clipperImage,this.x,this.y,this.width,this.height)
    }

    // Pick up the clipper
    this.pickUp = function() {
        let c = collideRectCircle(this.x,this.y,this.width,this.height,player.x,player.y,player.radius)
        if (((c == true) || (dist(this.x + this.width/2,this.y + this.height/2,player.x,player.y) <= 125)) && (keyIsDown(88)) && (this.picked == false) && (player.canDrop == false) && (player.item.length == 0)) {
            this.picked = true
            this.picker = "player"
            player.item.push("Clipper")
            console.log(player.item)
            setTimeout(() => {player.canDrop = true},500)
        }
    }
    
    // Drop the clipper
    this.dropItem = function() {
        if ((player.canDrop == true) && (this.picked == true) && (keyIsDown(88)) && (player.item.includes("Clipper"))) {
            let clipperIndex = player.item.indexOf("Clipper")
            player.item.splice(clipperIndex,1)
            this.picked = false
            this.picker = "none"
            setTimeout(() => {player.canDrop = false},500)
            if ((dist(this.x,this.y,table.x + table.width/2,table.y + table.height/2) <= 200) || (dist(this.x,this.y,this.tableX,this.tableY) <= 125)) {
                this.x = this.tableX
                this.y = this.tableY
            }
        }
    }
}

// Gloves
function Gloves() {
    // Gloves variables
    this.picked = false
    this.picker = "none"
    this.width = 75
    this.height = 75
    this.x = table.x + 125
    this.y = table.y + 10
    this.tableX = this.x
    this.tableY = this.y

    // Showing the gloves
    this.show = function() {
        if ((this.picked == true) && (this.picker == "player")) {
            this.x = player.x
            this.y = player.y - this.height/2
        }
        if ((this.picked == true) && (this.picker == "Kat")) {
            this.x = lerp(this.x,table.x + table.width/2,0.01)
            this.y = lerp(this.y,table.y + table.height/2,0.01)
            if (dist(this.x,this.y,table.x + table.width/2,table.y + table.height/2) <= 125) {
                this.picked = false
                this.picker = "none"
                this.x = this.tableX
                this.y = this.tableY
                let clipperIndex = cat.item.indexOf("Glove")
                cat.item.splice(clipperIndex,1)
                cat.justDropped = true
                console.log("Done", cat.justDropped)
            }
        }
        fill("brown")
        image(gloveImage,this.x,this.y,this.width,this.height)
    }

    // Pick up the gloves
    this.pickUp = function() {
        let c = collideRectCircle(this.x,this.y,this.width,this.height,player.x,player.y,player.radius)
        if (((c == true) || (dist(this.x + this.width/2,this.y + this.height/2,player.x,player.y) <= 125)) && (keyIsDown(88)) && (this.picked == false) && (player.canDrop == false) && (player.item.length == 0)) {
            this.picked = true
            this.picker = "player"
            player.item.push("Glove")
            console.log(player.item)
            setTimeout(() => {player.canDrop = true},500)
        }
    }
    
    // Drop the gloves
    this.dropItem = function() {
        if ((player.canDrop == true) && (this.picked == true) && (keyIsDown(88)) && (player.item.includes("Glove"))) {
            let gloveIndex = player.item.indexOf("Glove")
            player.item.splice(gloveIndex,1)
            this.picked = false
            this.picker = "none"
            setTimeout(() => {player.canDrop = false},500)
            if ((dist(this.x,this.y,table.x + table.width/2,table.y + table.height/2) <= 200) || (dist(this.x,this.y,this.tableX,this.tableY) <= 125)) {
                this.x = this.tableX
                this.y = this.tableY
            }
        }
    }
}

// Watering Can
function WateringCan() {
    // Watering Can variables
    this.picked = false
    this.picker = "none"
    this.width = 75
    this.height = 75
    this.x = table.x + 245
    this.y = table.y + 15
    this.tableX = this.x
    this.tableY = this.y
    this.water = 100
    this.waterCapacity = 100
    this.waterUsage = 5

    // Showing the watering can
    this.show = function() {
        if ((this.picked == true) && (this.picker == "player")) {
            this.x = player.x + 25
            this.y = player.y - this.height/2
        }
        if ((this.picked == true) && (this.picker == "Kat")) {
            this.x = lerp(this.x,table.x + table.width/2,0.01)
            this.y = lerp(this.y,table.y + table.height/2,0.01)
            if (dist(this.x,this.y,table.x + table.width/2,table.y + table.height/2) <= 125) {
                this.picked = false
                this.picker = "none"
                this.x = this.tableX
                this.y = this.tableY
                let clipperIndex = cat.item.indexOf("Watering Can")
                cat.item.splice(clipperIndex,1)
                cat.justDropped = true
                console.log("Done", cat.justDropped)
            }
        }
        image(waterCanImage,this.x,this.y,this.width,this.height)
    }

    // Pick up the watering can
    this.pickUp = function() {
        let c = collideRectCircle(this.x,this.y,this.width,this.height,player.x,player.y,player.radius)
        if (((c == true) || (dist(this.x + this.width/2,this.y + this.height/2,player.x,player.y) <= 125)) && (keyIsDown(88)) && (this.picked == false) && (player.canDrop == false) && (player.item.length == 0)) {
            this.picked = true
            this.picker = "player"
            player.item.push("Watering Can")
            console.log(player.item)
            setTimeout(() => {player.canDrop = true},500)
        }
    }
    
    // Drop the watering can
    this.dropItem = function() {
        if ((player.canDrop == true) && (this.picked == true) && (keyIsDown(88)) && (player.item.includes("Watering Can"))) {
            let gloveIndex = player.item.indexOf("Watering Can")
            player.item.splice(gloveIndex,1)
            this.picked = false
            this.picker = "none"
            setTimeout(() => {player.canDrop = false},500)
            if ((dist(this.x,this.y,table.x + table.width/2,table.y + table.height/2) <= 200) || (dist(this.x,this.y,this.tableX,this.tableY) <= 125)) {
                this.x = this.tableX
                this.y = this.tableY
            }
        }
    }
}

// Kat
function Kat() {
    // Kat variables
    this.x = 50
    this.y = 50
    this.startX = 50
    this.startY = 50
    this.width = 100
    this.height = 50
    this.target = "none"
    this.lerpPercentage = 0.05
    this.item = []
    this.canGo = false
    this.timerSet = "none"
    this.justDropped = false
    this.canPickUp = true
    this.retreat = false

    // Show function
    this.show = function() {
        fill("black")
        if (this.item.includes("Clipper")) {
            this.x = clipper.x - (this.width/4*3)
            this.y = clipper.y - this.height/2
        }
        if (this.item.includes("Glove")) {
            this.x = glove.x - (this.width/4*3)
            this.y = glove.y - this.height/2
        }
        if (this.item.includes("Watering Can")) {
            this.x = waterCan.x - (this.width/4*3)
            this.y = waterCan.y - this.height/2
        }
        rect(this.x,this.y,this.width,this.height)
    }
    
    // Picking up items function
    this.pickItem = function() {
        // If an item was picked up before Kat could approach run away
        if (this.retreat == true) {
            if (dist(this.x,this.y,this.startX,this.startY) <= 25) {
                this.x = this.startX
                this.y = this.startY
                this.retreat = false
            }
            this.x = lerp(this.x,this.startX,0.03)
            this.y = lerp(this.y,this.startY,0.03)
        }

        // Clipper pickup
        if (((clipper.x != clipper.tableX) && (clipper.y != clipper.tableY)) && ((this.target != "glove") && (this.target != "waterCan")) && (this.item.length == 0) && (this.justDropped == false)) {
            // Check if the clipper gets picked up while setting up the timer, if so then stop the timer and reset
            if ((this.timerSet == "clipper") && (clipper.picked == true)) {
                clearTimeout(this.clipperTimer)
                this.timerSet = "none"
                this.canGo = false
                this.target = "none"
                this.x = lerp(this.x,clipper.x,0)
                this.y = lerp(this.y,clipper.y,0)
                this.retreat = true
            }
            // If all requirements to pick up are true, then start timer
            if ((this.timerSet == "none") && (clipper.picked == false)  && ((clipper.x != clipper.tableX) && (clipper.y != clipper.tableY))) {
                this.timerSet = "clipper"
                this.clipperTimer = setTimeout(() => {
                    this.canGo = true
                    this.target = "clipper"
                },10000)
            }

            // If timer is finished and requirements are still met then start moving towards clippers
            if ((this.canGo == true) && (this.target == "clipper") && ((clipper.x != clipper.tableX) && (clipper.y != clipper.tableY)) && (this.retreat == false)) {
                this.x = lerp(this.x,clipper.x,0.03)
                this.y = lerp(this.y,clipper.y,0.03)
                if ((dist(this.x + this.width/2,this.y + this.height/2,clipper.x + clipper.width/2, clipper.y + clipper.height/2) < 50) && (this.justDropped == false)) {
                    this.item.push("Clipper")
                    this.canGo = false
                    this.target = "none"
                    clipper.picked = true
                    clipper.picker = "Kat"
                }
            }
        }


        // Glove pickup
        if (((glove.x != glove.tableX) && (glove.y != glove.tableY)) && ((this.target != "clipper") && (this.target != "waterCan")) && (this.item.length == 0)) {
            // Check if the glove gets picked up while setting up the timer, if so then stop the timer and reset
            if ((this.timerSet == "glove") && (glove.picked == true)) {
                clearTimeout(this.gloveTimer)
                this.timerSet = "none"
                this.canGo = false
                this.target = "none"
                this.x = lerp(this.x,glove.x,0)
                this.y = lerp(this.y,glove.y,0)
                this.retreat = true
            }
            // If all requirements to pick up are true, then start timer
            if ((this.timerSet == "none") && (glove.picked == false) && ((glove.x != glove.tableX) && (glove.y != glove.tableY))) {
                this.timerSet = "glove"
                this.gloveTimer = setTimeout(() => {
                    this.canGo = true
                    this.target = "glove"
                },10000)
            }

            // If timer is finished and requirements are still met then start moving towards gloves
            if ((this.canGo == true) && (this.target == "glove")  && ((glove.x != glove.tableX) && (glove.y != glove.tableY)) && (this.retreat == false)) {
                this.x = lerp(this.x,glove.x,0.03)
                this.y = lerp(this.y,glove.y,0.03)
                if (dist(this.x + this.width/2,this.y + this.height/2,glove.x + glove.width/2, glove.y + glove.height/2) < 50) {
                    this.item.push("Glove")
                    this.canGo = false
                    this.target = "none"
                    glove.picked = true
                    glove.picker = "Kat"
                }
            }
        }

        // Watering Can pickup
        if (((waterCan.x != waterCan.tableX) && (waterCan.y != waterCan.tableY)) && ((this.target != "clipper") && (this.target != "glove")) && (this.item.length == 0) && (this.justDropped == false)) {
            // Check if the watering can gets picked up while setting up the timer, if so then stop the timer and reset
            if ((this.timerSet == "waterCan") && (waterCan.picked == true)) {
                clearTimeout(this.waterCanTimer)
                this.timerSet = "none"
                this.canGo = false
                this.target = "none"
                this.x = lerp(this.x,waterCan.x,0)
                this.y = lerp(this.x,waterCan.y,0)
                this.retreat = true
            }
            // If all requirements to pick up are true, then start timer
            if ((this.timerSet == "none") && (waterCan.picked == false) && ((waterCan.x != waterCan.tableX) && (waterCan.y != waterCan.tableY))) {
                this.timerSet = "waterCan"
                this.waterCanTimer = setTimeout(() => {
                    this.canGo = true
                    this.target = "waterCan"
                },10000)
            }

            // If timer is finished and requirements are still met then start moving towards clippers
            if ((this.canGo == true) && (this.target == "waterCan") && ((waterCan.x != waterCan.tableX) && (waterCan.y != waterCan.tableY)) && (this.retreat == false)) {
                this.x = lerp(this.x,waterCan.x,0.03)
                this.y = lerp(this.y,waterCan.y,0.03)
                if ((dist(this.x + this.width/2,this.y + this.height/2,waterCan.x + waterCan.width/2, waterCan.y + waterCan.height/2) < 50) && (this.justDropped == false)) {
                    this.item.push("Watering Can")
                    this.canGo = false
                    this.target = "none"
                    waterCan.picked = true
                    waterCan.picker = "Kat"
                }
            }
        }

        // Check if Kat just dropped an item
        if (this.justDropped == true) {
            this.x = lerp(this.x,this.startX,0.05)
            this.y = lerp(this.y,this.startY,0.05)
            if (dist(this.x + this.width/2,this.y + this.height/2,this.startX,this.startY) <= 100) {
                this.justDropped = false
                this.x = this.startX
                this.y = this.startY
                this.width = 100
                this.height = 50
                this.target = "none"
                this.lerpPercentage = 0.05
                this.item = []
                this.canGo = false
                this.timerSet = "none"
                this.canPickUp = true
                this.retreat = false
            }
        }
    }
}

// Go to shop
function goToShop() {
    saveProgress()
    location.href = "Shop.html"
}

// Go to game
function goToGame() {
    location.href = "Game.html"
}

// Draw Function
function draw() {
    // Clear everything
    clear()

    // Plot function
    if (plotList.length > 0) {
        for (let plot of plotList) {
            plot.show()
            plot.plant()
            plot.rot()
            plot.dehydrate()
            plot.harvest()
        }
    }
    
    // Hose function
    hose.show()
    hose.fillWater()

    // Player function
    player.show()
    player.movement()

    // Table function
    table.show()
    
    // Cat function
    cat.show()
    cat.pickItem()

    // Clipper function
    clipper.show()
    clipper.pickUp()
    clipper.dropItem()

    // Glove function
    glove.show()
    glove.pickUp()
    glove.dropItem()

    // Watering Can function
    waterCan.show()
    waterCan.pickUp()
    waterCan.dropItem()
}