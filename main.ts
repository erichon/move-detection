let pos_threshold = 500
let neg_threshold = -500
basic.forever(function () {
    if (input.acceleration(Dimension.X) > pos_threshold) {
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
    if (input.acceleration(Dimension.X) < neg_threshold) {
        music.playTone(698, music.beat(BeatFraction.Whole))
    }
})
