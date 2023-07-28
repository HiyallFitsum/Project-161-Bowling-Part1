AFRAME .registerComponent("bowling", {
    schema : {

    },

    init : function() {
        this.bowl();
    },

    bowl : function() {

        window.addEventListener("keydown", (e)=>{
            if(e.key === "z") {

                var ball = document.createElement("a-entity")

                var camera = document.querySelector("#camera").object3D;

                var scene = document.querySelector("#scene")

                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)

                ball.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf");

                ball.setAttribute("scale", { x: 3, y: 3,  z: 3});
                
                ball.setAttribute("velocity", direction.multiplyScalar(-10))
                ball.setAttribute("dynamic-body", {
                    shape: "sphere",
                    mass: "0"
                });
                ball.setAttribute("material", {
                    color: "black",
                })

                ball.addEventListener("collide", this.addCollision);
                scene.appendChild(ball)
            }
        })
    },

    addCollision : function() {
        var element = e.detail.target.el;

        var elementHit = e.detail.body.el;

        if (elementHit.id.includes("#pin")){
            elementHit.setAttribute("material", {
                transparent: true,
            })

            var impulse = new CANNON.Vec3(-2, 2, 1);
            var worldPoint = new CANNON.Vec3().copy(
                elementHit.getAttribute("position")
            );

            elementHit.body.applyImpulse(impulse, worldPoint);
        }
    }
})