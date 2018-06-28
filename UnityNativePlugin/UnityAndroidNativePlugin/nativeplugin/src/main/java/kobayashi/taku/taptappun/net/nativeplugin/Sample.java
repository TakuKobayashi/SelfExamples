package kobayashi.taku.taptappun.net.nativeplugin;

import android.util.Log;

import com.unity3d.player.UnityPlayer;

public class Sample {
    public static void staticFunction(){
        Log.e("[Unity Test]","Static Method has been called!");
        UnityPlayer.UnitySendMessage("NativeSample","onCallBackShowResult","Static Method has been called!");
    }

    public void nonStaticFunction(){
        Log.e("[Unity Test]","Non static Method has been called!");
        UnityPlayer.UnitySendMessage("NativeSample","onCallBackShowResult","Non static Method has been called!");
    }
}
