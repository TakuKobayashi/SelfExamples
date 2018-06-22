#include <jni.h>
#include <string>
#include <opencv2/opencv.hpp>
#include <opencv2/core.hpp>

extern "C" {

JNIEXPORT jstring JNICALL Java_kobayashi_taku_taptappun_net_opencvcppsample_MainActivity_stringFromJNI(JNIEnv* env ,jobject instance) {
    std::string hello = "Hello from C++";
    return env -> NewStringUTF(hello . c_str()) ;
}

JNIEXPORT void JNICALL Java_kobayashi_taku_taptappun_net_opencvcppsample_MainActivity_SampleMat(
        JNIEnv *env,
        jobject instance,
        jlong mat,
        jlong result){
    cv::Mat& cvMat  = *(cv::Mat*) mat;
    cv::Mat& resultMat = *(cv::Mat*)result;
    resultMat = cv::Mat(cvMat, cv::Rect(0,0,cvMat.cols / 2,cvMat.rows / 2));
}
}