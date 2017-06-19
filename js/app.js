// Create a container object called the 'stage'
var stage = new PIXI.Container();

// Create the renderer
var renderer = PIXI.autoDetectRenderer(400, 400);

// Add the canvas to the HTML document
document.body.appendChild(renderer.view);

PIXI.loader
  .add("assets/test.png")
  .load(setup);

function setup() {

  var test = new PIXI.Sprite(
    PIXI.loader.resources["assets/test.png"].texture
  );

  stage.addChild(test);

  // Tell the 'renderer' to 'renderer' the 'stage'
  renderer.render(stage);
}

// Remember to launch web server!
// Open game with terminal command:
// open http://localhost:8888/htdocs/S.W.O.R.D.M.A.N./