scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (randint(0, 3) == 0) {
        game.showLongText("you have collected 10 gold coins", DialogLayout.Bottom)
    } else if (randint(0, 3) == 1) {
        game.showLongText("you have collected wolf skin", DialogLayout.Bottom)
    } else if (randint(0, 3) == 2) {
        game.showLongText("you have collected a diamond", DialogLayout.Bottom)
    } else {
        game.showLongText("you have collected amber", DialogLayout.Bottom)
    }
})
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`ake`, SpriteKind.Player)
mySprite.setPosition(5, 250)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
animation.runImageAnimation(
mySprite,
[img`
    . . . . a a a a a a a a a . . . 
    . . c c c a a a a a a c c c c . 
    . a a a c c a a a a c c a a a . 
    a a a a a a c a a c a a a a a a 
    a a a a a a c c a c a a a a a a 
    a c c c c a a a a a a c c c c c 
    a a d d d c c c a a c d d d d d 
    a a d d c d d c a a d c d d d d 
    a a a d c d d a a a d c d d d d 
    a a a a a a a a a a a a a a a a 
    a a a a a a c c c a c d c a a a 
    a a c a a c c b c c c b d c a a 
    a a c c c c b b c c b b c c c a 
    . a a a c c c b b b c c c a a a 
    . a a a c b c c c c c b c a a a 
    . a a a c c b b b b b b d a a . 
    . a a a a c c c c d d d c a a . 
    . . a a a a a a a a a a a a . . 
    `,img`
    . . . . a a a a a a a a a . . . 
    . . c c c a a a a a a c c c c . 
    . a a a c c a a a a c c a a a . 
    a a a a a a c a a c a a a a a a 
    a a a a a a c c a c a a a a a a 
    a c c c c a a a a a a c c c c c 
    a a a a a c c c a a c a a a a a 
    a a c a a a a c a a c a a a a a 
    a a c c c c c a a a c c c c c c 
    a a a a a a a a a a a a a a a a 
    a a a a a a c c c a c d c a a a 
    a c c a a c c b c c c b d c a a 
    a a c c c c b b c c b b c c c c 
    . a a a c c c b b b c c c a a a 
    . a a a c b c c c c c b c a a a 
    . a a a c c b b b b b b d a a . 
    . a a a a c c c c d d d c a a . 
    . . a a a a a a a a a a a a . . 
    `,img`
    . . . . a a a a a a a a a . . . 
    . . c c c a a a a a a c c c c . 
    . a a a c c a a a a c c a a a . 
    a a a a a a c a a c a a a a a a 
    a a a a a a c c a c a a a a a a 
    a c c c c a a a a a a c c c c c 
    a a d d d c c c a a c d d d d d 
    a a d d c d d c a a d c d d d d 
    a a a d c d d a a a d c d d d d 
    a a a a a a a a a a a a a a a a 
    a a a a a a c c c a c d c a c a 
    a a a c a c c b c c c b d c a a 
    a a a a c c b b c c b b c c a a 
    . a a a c c c b b b c c c a a a 
    . a a a c b c c c c c b c a a a 
    . a a a c c b b b b b b d a a . 
    . a a a a c c c c d d d c a a . 
    . . a a a a a a a a a a a a . . 
    `,img`
    . . . . a a a a a a a a a . . . 
    . . c c c a a a a a a c c c c . 
    . a a a c c a a a a c c a a a . 
    a a a a a a c a a c a a a a a a 
    a a a a a a c c a c a a a a a a 
    a c c c c a a a a a a c c c c c 
    a a d d d c c c a a c d d d d d 
    a a d d c d d c a a d c d d d d 
    a a a d c d d a a a d c d d d d 
    a a a a a a a a a a a a a a a a 
    a a a a a a c c c a c d c a c a 
    a a a c a c c b c c c b d c a a 
    a a a a c c b b c c b b c c a a 
    . a a a c c c b b b c c c a a a 
    . a a a c b c c c c c b c a a a 
    . a a a c c b b b b b b d a a . 
    . a a a a c c c c d d d c a a . 
    . . a a a a a a a a a a a a . . 
    `],
500,
true
)
forever(function () {
    music.playMelody("C5 D A B F G C E ", 220)
})
