---
"title": "分布式事务管理"
category:
  - "springcloud-alibaba"
tag:
  - "transaction"
---

## 分布式事务的原理

seata分为服务端和客户端，使用方法和mysql的使用方式类似，都是使用maven依赖，导入客户端，之后配置连接信息后，进行使用。

## 环境

Nacos
Seata 
MySQL


## 服务端的搭建

版本： 1.3.0

下载地址： https://github.com/seata/seata/releases/download/v1.3.0/seata-server-1.3.0.tar.gz

## 使用场景

举一个简单的应用场景：进销存系统中，

- 创建转账记录
- 从小王的账户上扣除100元；
- 给小李的账户上增加100元；


```
# -h 主机，你可以使用localhost，-p 端口号 你可以使用8848，-t 命名空间ID，-u 用户名，-p 密码
$ sh nacos-config.sh -h 192.168.1.150 -p 8848 -g SEATA_GROUP -t bb4ba084-9183-4406-bdf4-9254d372849e -u nacos -w nacos

```








<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


