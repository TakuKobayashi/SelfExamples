# 命令 ステートメント の順で記述
# FROM 命令は Docker に対して基となるイメージを伝える
FROM ubuntu
FROM ruby
# MAINTAINER 命令は誰がこの新しいイメージを管理するか指定します。
# MAINTAINER {YOUR NAME}
RUN apt-get update && apt-get install -y apt-utils ruby ruby-dev
RUN gem install bundler