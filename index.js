var current_player = "x"

//start of vue area

Vue.component('cube', {
    data: function() {
        return {

        }
    },
    props: {
        id: {
            default: ""
        }
    },

    template: `<div class="cube" value="?" :id=id>
                    <div class="!front black pointer"></div>
                    <div class="!back black pointer"></div>
                    <div class="!top black2 pointer"></div>
                    <div class="!bottom black2 pointer"></div>
                    <div class="!left black3 pointer"></div>
                    <div class="!right black3 pointer"></div>
                </div> `
})

var app = new Vue({
    el: "#zone",
    data: {
        xscore: 0,
        oscore: 0
    },
    methods: {
        addone: function(player) {
            if (player == "x") {
                this.xscore++
            }
            if (player == "o") {
                this.oscore++
            }
        }
    }
})

//  end of vue area 

var defaultHandleLocation = ""

function moveCube(x, y) {
    x = Math.floor(x)
    y = Math.floor(y) * -1


    $(".layer1").css({
        transform: `rotate3d(0, 1, 0, ${28 + x}deg) rotate3d(1, 0, 0, ${y}deg) rotate3d(1, 0, 0, -20deg) translateY(100px)`
    })
    $(".layer2").css({
        transform: `rotate3d(0, 1, 0, ${28 + x}deg) rotate3d(1, 0, 0, ${-20 + y}deg) translateY(25px) translateX(10px) translateZ(40px)`
    })
    $(".layer3").css({
        transform: `rotate3d(0, 1, 0, ${28 + x}deg) rotate3d(1, 0, 0, ${-20 + y}deg) translateY(-55px) translateX(20px) translateZ(80px)`
    })
}

function repaint() {
    $("#canvas").css("display", "none")
    setTimeout(function() {
        $("#canvas").css("display", "")
    }, 20);
}

$("#draggable").draggable({
    containment: "#dragContainer ",
    scroll: false,
    start: function() {
        if (defaultHandleLocation == "") {
            var offset = $(this).offset();
            var x = offset.left;
            var y = offset.top;
            defaultHandleLocation = {
                'x': x,
                'y': y
            }
        }
    },
    drag: function() {
        var offset = $(this).offset();
        var x = offset.left - defaultHandleLocation.x;
        var y = offset.top - defaultHandleLocation.y;

        moveCube(x, y);
        repaint()
    },
    stop: function() { //repaint to remove 3d artifacts
		repaint()
    }
});

var colors = randomColor({
    count: 30
})

//paste the color options 
//player x
for (var color in colors) {
    $("#color-grid-x").append(`<div class="color-cube-x pointer" style='background:${colors[color]}'></div>`)
}
//player o
for (var color in colors) {
    $("#color-grid-o").append(`<div class="color-cube-o pointer" style='background:${colors[color]}'></div>`)
}

for (var i = 0; i < 30; i++) {
    $("#gradient-grid-x").append("<div class='g color-cube-x pointer'></div>")
    $("#gradient-grid-o").append("<div class='g color-cube-o pointer'></div>")
}

var images = ["https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/1558732/pexels-photo-1558732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/442188/pexels-photo-442188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/53592/paloma-source-wings-birds-53592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/574282/pexels-photo-574282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/163822/color-umbrella-red-yellow-163822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/65240/gummi-bears-fruit-gums-bear-sweetness-65240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/953215/pexels-photo-953215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/175727/pexels-photo-175727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/814533/pexels-photo-814533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/1118869/pexels-photo-1118869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/728880/pexels-photo-728880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/1102912/pexels-photo-1102912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/511448/pexels-photo-511448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/131414/pexels-photo-131414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/269057/pexels-photo-269057.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/442420/books-shelves-architecture-wood-442420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/1837422/pexels-photo-1837422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/1850009/pexels-photo-1850009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/1048043/pexels-photo-1048043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/1328891/pexels-photo-1328891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/990824/pexels-photo-990824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/987947/pexels-photo-987947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/48155/animal-owl-eagle-owl-wisdom-48155.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/416166/pexels-photo-416166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/54108/peacock-bird-spring-animal-54108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]

for (var i = 0; i < 30; i++) {
    $("#image-grid-o").append(`<div class='color-cube-o pointer' style="background:url(${images[i]}) 100% / cover"></div>`)
    $("#image-grid-x").append(`<div class='color-cube-x pointer' style="background:url(${images[i]}) 100% / cover"></div>`)
}

$("#gradient-x").click(function() {
    $("#gradient-grid-x").css({
        "opacity": "1",
        "z-index": "300"
    })
    $("#color-grid-x").css({
        "opacity": "0",
        "z-index": "200"
    })
    $("#image-grid-x").css({
        "opacity": "1",
        "z-index": "100"
    })
})

$("#color-x").click(function() {
    $("#color-grid-x").css({
        "opacity": "1",
        "z-index": "300"
    })
    $("#gradient-grid-x").css({
        "opacity": "0",
        "z-index": "200"
    })
    $("#image-grid-x").css({
        "opacity": "1",
        "z-index": "100"
    })
})

$("#image-x").click(function() {
    $("#image-grid-x").css({
        "opacity": "1",
        "z-index": "300"
    })
    $("#gradient-grid-x").css({
        "opacity": "0",
        "z-index": "200"
    })
    $("#color-grid-x").css({
        "opacity": "1",
        "z-index": "100"
    })
})

$("#gradient-o").click(function() {
    $("#gradient-grid-o").css({
        "opacity": "1",
        "z-index": "300"
    })
    $("#image-grid-o").css({
        "opacity": "0",
        "z-index": "200"
    })
    $("#color-grid-o").css({
        "opacity": "1",
        "z-index": "100"
    })
})

$("#color-o").click(function() {
    $("#color-grid-o").css({
        "opacity": "1",
        "z-index": "300"
    })
    $("#gradient-grid-o").css({
        "opacity": "0",
        "z-index": "200"
    })
    $("#image-grid-o").css({
        "opacity": "1",
        "z-index": "100"
    })
})

$("#image-o").click(function() {
    $("#image-grid-o").css({
        "opacity": "1",
        "z-index": "300"
    })
    $("#gradient-grid-o").css({
        "opacity": "0",
        "z-index": "200"
    })
    $("#color-grid-o").css({
        "opacity": "1",
        "z-index": "100"
    })
})



//when a cube is clicked 
$(".cube").click(function() {

    var default_ = "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"

    if ($(this).attr("value") != "?") { //cube was already picked 
        return
    }

    if (current_player == "x") {
        //check if a color was picked yet
        if ($("#px").css("background") != default_) { // the player has picked a color
            $(this).children().css("background", $("#px").css("background")) // change cube color 
            $(this).attr("value", "x") //change cube value
            current_player = "o" // change player
            $("#playero").css("background", "rgb(80, 211, 178)") //active player
            $("#playerx").css("background", "white") //active player
            //hide notice
            $("#notice").css({
                opacity: "0",
                height: "0%"
            })
        } else {
            //show notice
            $("#notice").css({
                opacity: "1",
                height: "5%"
            })
        }
    } else {
        //check if a color was picked yet 
        if ($("#po").css("background") != default_) {
            $(this).children().css("background", $("#po").css("background"))
            $(this).attr("value", "o")
            current_player = "x"
            $("#playerx").css("background", "rgb(80, 211, 178)") //active player
            $("#playero").css("background", "white") //active player
            //hide notice
            $("#notice").css({
                opacity: "0",
                height: "0%"
            })
        } else {
            //show notice
            $("#notice").css({
                opacity: "1",
                height: "5%"
            })
        }
    }

    var result = winnerCheck()
    if (result == "x" || result == "o") {
        app.addone(result)
        $("#winner_name").text(result)
        $("#winner").toggle(500)
    }

})
//when a color is clicked 
$(".color-cube-x").click(function() {
    var color = $(this).css("background");
    $("#px").css("background", color);
})

$(".color-cube-o").click(function() {
    var color = $(this).css("background");
    $("#po").css("background", color)
})

$("#again").click(function() {
    clearBoard()
    $("#winner").toggle(500)
})

function clearBoard() {
    $(".cube").each(function() {
        $(this).attr("value", "?")
    })

    $("*[class*= '!front']").css({
        "background": "",
        "box-shadow": ""
    })
    $("*[class*= '!back']").css({
        "background": "",
        "box-shadow": ""
    })
    $("*[class*= '!left']").css({
        "background": "",
        "box-shadow": ""
    })
    $("*[class*= '!right']").css({
        "background": "",
        "box-shadow": ""
    })
    $("*[class*= '!top']").css({
        "background": "",
        "box-shadow": ""
    })
    $("*[class*= '!bottom']").css({
        "background": "",
        "box-shadow": ""
    })
}

function glow(cubeArray) {

    for (var cube in cubeArray) {
        cube = cubeArray[cube]
        $(`#${cube}`).children().css({
            "background": "yellow",
            "box-shadow": "0px 0px 20px yellow"
        })
    }
}

function winnerCheck() {
    var matrix = []

    $(".cube").each(function() {
        matrix.push($(this).attr("value"))
    })

    var layer1 = matrix.slice(0, 9)
    var layer2 = matrix.slice(9, 18)
    var layer3 = matrix.slice(18)

    //check vertical on all layers
    for (var i = 0; i < 9; i += 3) {
        if (layer1[i] == layer1[i + 1] && layer1[i + 1] == layer1[i + 2]) { //layer 1 check
            if (layer1[i] != "?") { // default blank cube value 	      
                glow([`1-${i}`, `1-${i+1}`, `1-${i+2}`])
                return layer1[i] // x || o
            }
        }
        if (layer2[i] == layer2[i + 1] && layer2[i + 1] == layer2[i + 2]) { //layer 2 check
            if (layer2[i] != "?") { // default blank cube value 
                glow([`2-${i}`, `2-${i+1}`, `2-${i+2}`])
                return layer2[i] // x || o
            }
        }
        if (layer3[i] == layer3[i + 1] && layer3[i + 1] == layer3[i + 2]) { //layer 3 check
            if (layer3[i] != "?") { // default blank cube value 
                glow([`3-${i}`, `3-${i+1}`, `3-${i+2}`])
                return layer3[i] // x || o
            }
        }
    }

    //check horizontal on all layers
    for (var x = 0; x < 3; x++) {
        if (layer1[x] == layer1[x + 3] && layer1[x + 3] == layer1[x + 6]) { //layer 1 check
            if (layer1[x] != "?") { // default blank cube value 
                glow([`1-${x}`, `1-${x+3}`, `1-${x+6}`])
                return layer1[x] //x || o
            }
        }
        if (layer2[x] == layer2[x + 3] && layer2[x + 3] == layer2[x + 6]) { //layer 2 check
            if (layer2[x] != "?") { // default blank cube value 
                glow([`2-${x}`, `2-${x+3}`, `2-${x+6}`])
                return layer2[x] // x || o
            }
        }
        if (layer3[x] == layer3[x + 3] && layer3[x + 3] == layer3[x + 6]) { //layer 3 check
            if (layer3[x] != "?") { // default blank cube value 
                glow([`3-${x}`, `3-${x+3}`, `3-${x+6}`])
                return layer3[x] //x || o}
            }
        }
    }

    //check diagonal 
    var increase = 0;
    for (var i = 1; i <= 3; i++) {
        if (matrix[2 + increase] == matrix[4 + increase] && matrix[4 + increase] == matrix[6 + increase]) { // bottom to top check
            if (matrix[2 + increase] != "?") { // default blank cube value 
                glow([`${(increase / 9) + 1}-${2}`, `${(increase / 9) + 1}-${4}`, `${(increase / 9) + 1}-${6}`])
                return matrix[2 + increase]; //x || o 
            }
        } else if (matrix[0 + increase] == matrix[4 + increase] && matrix[4 + increase] == matrix[8 + increase]) { // top to bottom check
            if (matrix[0 + increase] != "?") { // default blank cube value 
                glow([`${(increase / 9) + 1}-${0}`, `${(increase / 9) + 1}-${4}`, `${(increase / 9) + 1}-${8}`])
                return matrix[0 + increase]; //x || o  
            }
        }
        increase += 9
    }

    //3d layer check

    //y check
    for (var y = 0; y < 3; y++) {
        if (layer1[0 + y] == layer2[3 + y] && layer2[3 + y] == layer3[6 + y]) { //check1 1l 2m 3r
            if (layer1[0 + y] != "?") { // default blank cube value 
                glow([`1-${0 + y}`, `2-${3 + y}`, `3-${6 + y}`])
                return layer1[0 + y] //x || o
            }
        }
        if (layer1[6 + y] == layer2[3 + y] && layer2[3 + y] == layer3[0 + y]) { //check2 1r 2m 3l 
            if (layer1[6 + y] != "?") { // default blank cube value 
                glow([`1-${6 + y}`, `2-${3 + y}`, `3-${0 + y}`])
                return layer1[6 + y]
            }
        }
    }

    //x check
    for (var u = 0; u < 9; u += 3) {
        if (layer1[0 + u] == layer2[1 + u] && layer2[1 + u] == layer3[2 + u]) { // 1l 2m 3r
            if (layer1[0 + u] != "?") { // default blank cube value 
                glow([`1-${0 + u}`, `2-${1 + u}`, `3-${2 + u}`])
                return layer1[0 + u]
            }
        }
        if (layer1[2 + u] == layer2[1 + u] && layer2[1 + u] == layer3[0 + u]) { // 1r 2m 3l
            if (layer1[2 + u] != "?") { // default blank cube value 
                glow([`1-${2 + u}`, `2-${1 + u}`, `3-${0 + u}`])
                return layer1[2 + u]
            }
        }
    }

    // z check 
    for (var w = 0; w < 9; w++) {
        if (layer1[w] == layer2[w] && layer2[w] == layer3[w]) {
            if (layer1[w] != "?") { // default blank cube value 
                glow([`1-${w}`, `2-${w}`, `3-${w}`])
                return layer1[w]
            }
        }
    }

    //diagonal check
    var coords = [
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (var t = 0; t < 2; t++) {
        if (layer1[coords[t][0]] == layer2[coords[t][1]] && layer2[coords[t][1]] == layer3[coords[t][2]]) { //  10 21 32
            if (layer1[coords[t][0]] != "?") {
                glow([`1-${coords[t][0]}`, `2-${coords[t][1]}`, `3-${coords[t][2]}`])
                return layer1[coords[t][0]];
            }
        }

        if (layer1[coords[t][2]] == layer2[coords[t][1]] && layer2[coords[t][1]] == layer3[coords[t][0]]) { //  12 21 30
            if (layer1[coords[t][2]] != "?") {
                glow([`1-${coords[t][2]}`, `2-${coords[t][1]}`, `3-${coords[t][0]}`])
                return layer1[coords[t][2]];
            }
        }
    }


    return "!"

}