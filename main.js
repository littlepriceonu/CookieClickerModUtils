    window.ModUtils = {};
    var ModUtils = window.ModUtils;
    var Game = window.Game
    ModUtils.GameLoadCallback = [];
    ModUtils.addGameLoadCallback = (callback) => {ModUtils.GameLoadCallback.push(callback)};
    setTimeout(() => {
        window.onload = () => {
            if (!Game.ready) {
                if (window.top!=window.self) Game.ErrorFrame();
                else {
                    console.log('[=== Cheated cookies taste AMAZING! ===]');
                    for (const callback in ModUtils.GameLoadCallBack) {
                        callback();
                    }
                    Game.Load();
                }
            }
        }
    }, 10)
    ModUtils.addObjectAmount = (object, amount) => {
        Game.Objects[object].amount += amount
    }

    ModUtils.setObjectAmount = (object, amount) => {
        Game.Objects[object].amount = amount
    }
