import kaboom, { Vec2, GameObj, } from "kaboom";
import asepritePlugin from "kaboom/plugins/aseprite";

const k = kaboom({
  plugins: [ asepritePlugin, ]
});

export class LevelOne {

  spawnLevel() {
    k.addLevel([
    '!^^^^^^^^^^^^      &',
    '!^^^^^^^^^^^^      &',
    '!^^^^^^^^^^^^      &',
    '!                  &',
    '!                  &',
    '!                  &',

    ], {
      width: 30,
      height: 22,
      '^': [sprite('lvl1inv')],
    })
  }

}