let target = Array.from(game.user.targets)[0];
canvas.tokens.releaseAll();
let token = canvas.tokens.controlled[0];

new Sequence()
.effect()
.file("jb2a.bonfire.01.orange")
.atLocation(target)
.belowTokens()
.scale(.88)
.duration(5000)
.fadeOut(500)
.fadeIn(1000)
.play()

