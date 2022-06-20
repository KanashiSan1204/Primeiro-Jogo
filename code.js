var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c57524bf-b19f-4408-83db-84cdb8cbbd82","654bb5be-0c18-4455-a209-12ad0dcbce72","cb3208c4-1112-4465-b874-89c74bbdea80","22286236-c936-48b7-8d52-04ce9d753358","f8a6251b-4463-494e-83e1-c2b290c7c97d"],"propsByKey":{"c57524bf-b19f-4408-83db-84cdb8cbbd82":{"name":"background_landscape07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"oy1yIltrLNQf4iGHFFcLGgYTezk0.f73","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png"},"654bb5be-0c18-4455-a209-12ad0dcbce72":{"name":"Alien.png_1","sourceUrl":"assets/v3/animations/kYTaT_SDR_nVUYONgfdEDWChNFUD_OpfnAKJlUFamU4/654bb5be-0c18-4455-a209-12ad0dcbce72.png","frameSize":{"x":40,"y":36},"frameCount":1,"looping":true,"frameDelay":4,"version":"0Nk5lO1G26p2CxcFMaLZy2aPyairWZAx","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":36},"rootRelativePath":"assets/v3/animations/kYTaT_SDR_nVUYONgfdEDWChNFUD_OpfnAKJlUFamU4/654bb5be-0c18-4455-a209-12ad0dcbce72.png"},"cb3208c4-1112-4465-b874-89c74bbdea80":{"name":"heart.png_1","sourceUrl":"assets/v3/animations/kYTaT_SDR_nVUYONgfdEDWChNFUD_OpfnAKJlUFamU4/cb3208c4-1112-4465-b874-89c74bbdea80.png","frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":4,"version":"HRrhMg5Rx5SZUcuIs7g4uSDO0_Gkq22s","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/v3/animations/kYTaT_SDR_nVUYONgfdEDWChNFUD_OpfnAKJlUFamU4/cb3208c4-1112-4465-b874-89c74bbdea80.png"},"22286236-c936-48b7-8d52-04ce9d753358":{"name":"Nave.png_1","sourceUrl":"assets/v3/animations/kYTaT_SDR_nVUYONgfdEDWChNFUD_OpfnAKJlUFamU4/22286236-c936-48b7-8d52-04ce9d753358.png","frameSize":{"x":40,"y":41},"frameCount":1,"looping":true,"frameDelay":4,"version":"XIpgX3PWYoA2.P5l7rA_pmiNNMvN.FKr","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":41},"rootRelativePath":"assets/v3/animations/kYTaT_SDR_nVUYONgfdEDWChNFUD_OpfnAKJlUFamU4/22286236-c936-48b7-8d52-04ce9d753358.png"},"f8a6251b-4463-494e-83e1-c2b290c7c97d":{"name":"Human4.png_1","sourceUrl":"assets/v3/animations/kYTaT_SDR_nVUYONgfdEDWChNFUD_OpfnAKJlUFamU4/f8a6251b-4463-494e-83e1-c2b290c7c97d.png","frameSize":{"x":60,"y":69},"frameCount":1,"looping":true,"frameDelay":4,"version":"gqn9KiKoihDknzz1bkkdoHYuWigPaZkz","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":69},"rootRelativePath":"assets/v3/animations/kYTaT_SDR_nVUYONgfdEDWChNFUD_OpfnAKJlUFamU4/f8a6251b-4463-494e-83e1-c2b290c7c97d.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200)
    b.setAnimation("background_landscape07_1")
var enemy1 = createSprite(200,290,10,10)
    enemy1.setAnimation("heart.png_1")
var enemy2 = createSprite(200,190,10,10)
    enemy2.setAnimation("Alien.png_1")
var enemy3 = createSprite(200,90,10,10)
    enemy3.setAnimation("Nave.png_1")
var human = createSprite(200,365,200,345)
    human.setAnimation("Human4.png_1")
var moon = createSprite(200,5,200,20)
    moon.shapeColor = "yellow"

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);

var deaths = 0;

function draw() {

createEdgeSprites()

  text("Mortes: " + deaths,20,300);
  strokeWeight(0);
  fill("lightblue");
  rect(18,170,52,40);
  rect(308,170,52,40);
  
enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)


  if(keyDown(UP_ARROW)){
  human.y=human.y-3
}

if(keyDown(DOWN_ARROW)){
  human.y=human.y+3
}

if(keyDown(LEFT_ARROW)){
  human.x=human.x-3
}

if(keyDown(RIGHT_ARROW)){
  human.x=human.x+3
}
  
if(human.isTouching(enemy1)|| human.isTouching(enemy2)|| human.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  human.x=200
  human.y=365
}

if (human.isTouching(moon)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  human.x=200
  human.y=365
}
  
  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
