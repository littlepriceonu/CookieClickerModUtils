window.ModUtils = {}
ModUtils.GameLoadCallback = []
ModUtils.addGameLoadCallback = (callback) => {ModUtils.GameLoadCallback.push(callback)}
setTimeout(() => {
    window.onload = () => {
    	
    	if (Game.ready) {		
    		console.log('[=== Cheated cookies taste AMAZING! ===]');
    		Game.Load();
    	}
    }
}, 10)
