AFRAME.registerComponent("bowlingPins", {
    schema : {

    },

    init : function () {
        this.spawnPins();
    },

    spawnPins : function() {
        let xPosition = -3;

        for(var i = 0; i < 7; i++){
            var pin = document.createElement("a-entity");

            var positionX = xPosition + 1;
            var position = { x: positionX, y: 0, z: -6}
            var scale = { x: 4, y: 4, z: 4}

            pin.setAttribute("id", "pin" + i);
            pin.setAttribute("gltf-model", "./models/bowling_pin/scene.gltf")
            pin.setAttribute("position", position);
            pin.setAttribute("scale", scale);

            var scene = document.querySelector("#scene")
            scene.appendChild(pin)
        }
    }
})