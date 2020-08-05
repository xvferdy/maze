//import
const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    MouseConstraint,
    Mouse
} = Matter;

//#1 define width and height, karena kita butuh width height untuk random value
const width = 800;
const height = 600;

const engine = Engine.create();
//object world didapat dari membuat Engine
const {
    world
} = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: { //#2 hapus value width height
        wireframes: false, //#6 mode wireframes
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);




World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}));

//membuat persegi panjang sebagai pembatas / border, simpan dalam array
const walls = [
    Bodies.rectangle(400, 0, 800, 40, {
        isStatic: true
    }),
    Bodies.rectangle(400, 600, 800, 40, {
        isStatic: true
    }),
    Bodies.rectangle(0, 300, 40, 600, {
        isStatic: true
    }),
    Bodies.rectangle(800, 300, 40, 600, {
        isStatic: true
    })
];
World.add(world, walls);

//#3 buat 20 shape
for (let i = 0; i < 20; i++) {
    //#5 buat kotak jika > 0.5 jika bukan maka buat lingkaran
    if (Math.random() > 0.5) {
        //#4 random width height (x and y axis)
        World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
    } else {
        World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 35, {
            render: {
                fillStyle: 'red'
            }
        }));
    }
}