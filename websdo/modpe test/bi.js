/*本js禁止任何用于任何工作室，仅作为学习交流使用*/
//作者@小马
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var rad=Math.PI / 180;
var 开关=true;
print("debug");
function 粒子运动(x, y, z, rad2) {
    var a = Entity.spawnMob(x, y, z, 81, 29);
    Entity.setVelX(a, Math.cos(0 + rad2) * 1.5);
    Entity.setVelZ(a, Math.sin(0 + rad2) * 1.5);
    var b = Entity.spawnMob(x, y, z, 81, 29);
    var c = Entity.spawnMob(x, y, z, 81, 29);
    var d = Entity.spawnMob(x, y, z, 81, 29);
    var e = Entity.spawnMob(x, y, z, 81, 29);
    Entity.setVelX(b, Math.cos(72 * rad + rad2) * 1.5);
    Entity.setVelZ(b, Math.sin(72 * rad + rad2) * 1.5);
    Entity.setVelX(c, Math.cos(144 * rad + rad2) * 1.5);
    Entity.setVelZ(c, Math.sin(144 * rad + rad2) * 1.5);
    Entity.setVelX(d, Math.cos(-144 * rad + rad2) * 1.5);
    Entity.setVelZ(d, Math.sin(-144 * rad + rad2) * 1.5);
    Entity.setVelX(e, Math.cos(-72 * rad + rad2) * 1.5);
    Entity.setVelZ(e, Math.sin(-72 * rad + rad2) * 1.5);
	clientMessage('lz moving is over');
}

function 波粒(x, y, z) {
	var 速度 = 0;
	var 加速度 = rad / 20;
	var 时间 = 0.1;
	clientMessage('work out values');
	
	while (开关) {
		粒子运动(x, y, z, 速度 + 加速度 * 时间);
		时间 = 时间 + 0.1;
		速度 = 速度 + 加速度 * 时间;
		if (时间 == 3) {
			加速度 = -加速度;
			时间 = 0;
		}
		clientMessage('doing');
		java.lang.Thread.currentThread.sleep(3 * 1000);
    }
}

function useItem(x, y, z, itemId/*手持物品ID*/, blockId/*点击方块ID*/, side/*点击面*/, itemDamage/*手持物品特殊值*/, blockDamage) {
	
	if (itemId == 280) {
		clientMessage('on');
	
		开关 = true;
		newT(function(){
			clientMessage("&start");
			波粒(x, y + 2, z);
		});
		
	} else if (itemId == 268) {
		clientMessage('off');
	
		开关 = false;
	}
} 

function newT(f) {
	new java.lang.Thread(new java.lang.Runnable({run: function(){
		try {
			if (f != null) f();
		} catch(e) {
			print(e);
			
			ctx.runOnUiThread( new java.lang.Readable({run: function(){
				new android.app.AlertDialog.Builder(ctx).setMessage(e + "").create().show();
			}}));
		}
	}}));
}
