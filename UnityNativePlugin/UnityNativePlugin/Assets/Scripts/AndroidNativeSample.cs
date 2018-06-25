using System;
using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.UI;

public class AndroidNativeSample : MonoBehaviour {
	//Lets make our calls from the Plugin
    [DllImport("SimpleNativeLibrary")]
    private static extern int PrintANumber();

    [DllImport("SimpleNativeLibrary")]
    private static extern IntPtr PrintHello();

    [DllImport("SimpleNativeLibrary")]
    private static extern int AddTwoIntegers(int i1, int i2);

    [DllImport("SimpleNativeLibrary")]
    private static extern float AddTwoFloats(float f1, float f2);
    
    [SerializeField] Text textDebug;
    
    void Start()
    {
        string str = "";

        str += "PrintANumber() " + PrintANumber() + "\n";
        str += "PrintHello() " + Marshal.PtrToStringAuto(PrintHello()) + "\n";
        str += "AddTwoIntegers(2, 2) " + AddTwoIntegers(2, 2) + "\n";
        str += "AddTwoFloats(2.5f, 4.0f) " + AddTwoFloats(2.5f, 4.0f) + "\n";

        // Print result in console
        Debug.Log(str);

        // Display result in text UI
        if (textDebug)
        {
            textDebug.text = str;
        }
    }

    // Update is called once per frame
    void Update()
    {

    }
}
