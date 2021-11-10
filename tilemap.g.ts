// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100005010101040404010101050401010103010101010101040401010104010101010404040404010104010104040101010101010101040101010101010401010101010101010401010101010104010101010101040104010404040404040101040401010401010104050101010101010101040404010104040101010101010101010101010101040401010101010404040401010101010404040404010101010101040105040404040501040101010101010101010401010101010401010104010101010104010101010104010104040401010104040101040404040101040101010101010101010101010101010401010102010101010101040404040404040401`, img`
. . . . 2 2 2 . . . . 2 . . . . 
. . . . . . 2 2 . . . 2 . . . . 
2 2 2 2 2 . . 2 . . 2 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . 2 . 2 . 2 2 2 2 2 2 . . 2 2 
. . 2 . . . 2 . . . . . . . . . 
2 2 2 . . 2 2 . . . . . . . . . 
. . . . . 2 2 . . . . . 2 2 2 2 
. . . . . 2 2 2 2 2 . . . . . . 
2 . . 2 2 2 2 . . 2 . . . . . . 
. . . 2 . . . . . 2 . . . 2 . . 
. . . 2 . . . . . 2 . . 2 2 2 . 
. . 2 2 . . 2 2 2 2 . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.dungeon.stairWest,sprites.dungeon.collectibleInsignia,sprites.builtin.brick,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
