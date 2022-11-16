---
title: "分布式服务网关"
category:
  - "springcloud-alibaba"
tag:
  - "分布式系统"
  - "网关"
---

## 背景知识

## 网关的必要性

部署视图中的物理网关的相关作用

微服务架构中网关的作用，作为组件所能提供的功能

## 技术选型



## SpringCloud-Gateway

版本关系

官方文档使用方法

相关概念

## 实践过程

结合配置中心进行请求转发

重写路由

路由规则可配置化

https的使用
  一般情况下服务都是放到内网里面的，相互之间的调用使用http即可完成，但是有些api接口需要暴露到外网，而暴露给外网，https更为安全，此时又想所有的服务通过网关进行暴露，此时就涉及到https到http的转化。

自定义全局异常

基于sentinel限流及自定义限流异常
  安装sentinel
  添加依赖
  配置连接地址
  启动并进行测试
    当有请求进入时才会在sentinel控制台显示服务信息

  新增限流规则

  限流降级模式
    redirect
    response

集成swagger
  完成

CROS方案
  

灰度发布


## 总结


## 参考

- https://www.cnblogs.com/longtds/p/15956961.html
- https://blog.csdn.net/fyang2007/article/details/6180361

<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />