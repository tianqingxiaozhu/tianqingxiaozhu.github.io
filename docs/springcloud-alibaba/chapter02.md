---
title: "分布式服务配置"
category:
  - "springcloud-alibaba"
tag:
  - "分布式系统"
  - "服务配置"
---

## 背景知识


## 技术选型

Nacos、ZK、Apollo

## Nacos相关概念

服务搭建过程

Data ID

Naming Space

Group



## 基于Nacos的实践



### 传统方式获取配置项

直接使用 @Value 注解获取即可。

tianqing

### 使用nacos获取配置项

myinfo

### 共享配置文件方式获取配置项

mygirlzinfo


### 共享配置文件映射成JavaBean

mybrotherzinfo

创建对象类，之后添加两个注解，

### 使用日志

- 直接在配置文件中添加对应的日志级别的设置
- 使用 @Slf4j 注解


## 开发的最佳实践

1. 有些配置项可以用到不同的环境中；
2. 有些配置项也可以用到不同的服务中；

### 方式一



为每一个服务都创建一个namespace，然后不同的环境使用不同的Group来隔离；

这样做的好处是：


这样做的坏处是：
1. 不能跨服务共享配置文件，但是可以满足跨环境共享配置文件；
就是不同的业务分组使用不同的namespace作为业务隔离，


启动不同的服务


### 方式二

为每一个环境都配置一个namespace，不同的服务使用同名的配置文件；
虽然不同服务之间可以共享配置文件，每一个namespace中都有服务的完整配置，配置文件就会出现冗余的情况；


## 总结


每次修改后都需要重启服务的配置项不用放到配置中心中；

<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />

