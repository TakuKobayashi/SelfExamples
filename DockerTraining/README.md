# Dockerの使い方メモ
## チュートリアル
【参考】https://qiita.com/wMETAw/items/8d1b0c053a39841765bf
とりあえず、nginxをダウンロードして、ポート8080で起動するコマンド
```
docker run -d -p 8080:80 --name webserver nginx
```
このとき、nginxというdockerのイメージ名でイメージが作られ、webserverというコンテナが作られて実行される。
なお、nginxというイメージは公式からpullして、用いています。

コンテナはいわゆる作業スペースのようなイメージのもの。
```
docker kill webserver
```
これが実行中のコンテナを停止するコマンド。

```
docker rm webserver
```
これが作成したコンテナを削除するコマンド

【参考】http://uxmilk.jp/55512
イメージの中身を保存するときは
```
docker save nginx > save_nginx.tar
```
これでファイルに吐き出すことができ、

```
docker load nginx > save_nginx.tar
```
これでが吐き出したイメージをファイルに読み込むことができる。

コンテナの中身を保存するときは
```
docker export webserver > export_webserver.tar
```
これでファイルに吐き出すことができ、

```
docker import export_webserver.tar
```
これでが吐き出したコンテナをファイルに読み込むことができる。

## 色々な開発環境について
【参考】https://qiita.com/akiko-pusu/items/e6e78ed1f3df661e7b8a
 * CentOSの開発環境を構築したい時のコマンド
```
docker run -it centos cat /etc/redhat-release
```
これでCentOSのimageをダウンロードさせることができる。この時インストールされるものはCentOS7になる。
 * CentOS6をインストールしたい場合は以下のコマンド
```
docker run -it centos:centos6 cat /etc/redhat-release
```

