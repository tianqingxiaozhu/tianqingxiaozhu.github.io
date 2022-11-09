---
title: "分布式远程服务调用"
category:
  - "springcloud-alibaba"
tag:
  - "分布式系统"
  - "远程服务调用"
---

## 背景知识

1. 为什么要使用远程服务调用；
2. RPC 和 SOA 的区别；
3. 传统的使用方式
   1. httpclient
   2. okhttp
   3. 

## 技术选型

- 框架选型
  - dubbo
  - springcloud
  - gRPC
- 组件选型
  - RestTemplate
  - OpenFeign
  - 

## 功能实践

- resttemplate方式调用
- openfeign简单调用
- 不同使用方式
  - 多参数
  - URL中携带参数
  - 传递对象
  - 文件上传
  - 文件下载
- 开启GZIP压缩
- 开启日志
- 超时控制
  - 在服务提供者提供的接口中休眠3s，服务消费者接口就会报连接超时的情况；
  - 在配置文件中设置默认的超时时间
- 替换客户端
  - 替换成httpclient
    - 超时时间的默认配置不能丢
  - 替换成okhttp
    - 超时时间的默认配置不能丢



## 总结


<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />