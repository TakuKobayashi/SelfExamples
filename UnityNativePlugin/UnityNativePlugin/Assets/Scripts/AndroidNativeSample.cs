using System;
using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.UI;

public class AndroidNativeSample : MonoBehaviour {
    [SerializeField] Text textDebug;
    
    void Start()
    {
		callStaticFunction();
    }

    // Update is called once per frame
    void Update()
    {

    }

	public void callStaticFunction()
    {
        AndroidJavaClass unityPlayer = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
		AndroidJavaClass plugin = new AndroidJavaClass("kobayashi.taku.taptappun.net.nativeplugin.Sample");
        plugin.CallStatic("staticFunction");
    }

	public void onCallBackShowResult(string resultText)
    {
		Debug.Log(resultText);
    }
}
