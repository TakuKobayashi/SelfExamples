package kobayashi.taku.taptappun.net.opencvcppsample;

import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import org.opencv.android.Utils;
import org.opencv.core.CvType;
import org.opencv.core.Mat;

import java.io.IOException;
import java.io.InputStream;

public class MainActivity extends AppCompatActivity {

    // Used to load the 'native-lib' library on application startup.
    static {
        System.loadLibrary("native-lib");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Example of a call to a native method
        TextView tv = (TextView) findViewById(R.id.sample_text);
        tv.setText(stringFromJNI());

        try {
            InputStream ims = getAssets().open("sample_sprite.jpg");
            Bitmap bitmap = BitmapFactory.decodeStream(ims);
            Mat mat = new Mat(bitmap.getWidth(), bitmap.getHeight(), CvType.CV_8UC4);
            Utils.bitmapToMat(bitmap, mat);
            Mat croppedMat = new Mat();
            SampleMat(mat.getNativeObjAddr(), croppedMat.getNativeObjAddr());
            Bitmap newBitmap = Bitmap.createBitmap(croppedMat.width(), croppedMat.height(), Bitmap.Config.ARGB_8888);
            Utils.matToBitmap(croppedMat, newBitmap);

            ImageView image = (ImageView) findViewById(R.id.sample_image);
            image.setImageBitmap(newBitmap);
            mat.release();
            croppedMat.release();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public native void SampleMat(long mat, long resultMat);

    /**
     * A native method that is implemented by the 'native-lib' native library,
     * which is packaged with this application.
     */
    public native String stringFromJNI();
}
