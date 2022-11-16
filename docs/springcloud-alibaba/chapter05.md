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

打个比方，
简单讲一下seata的原理，

1. 第一步，所有参与事务的客户端程序都先注册到seats的服务端
2. 第二步，由事务的发起者发起一个事务请求给seata的服务端，seata会生成一个全局事务id；
3. 第三步，

## 使用场景

举一个简单的应用场景：进销存系统中，一个用户发起购买商品的动作，后端业务逻辑是

- 扣减库存
- 扣减个人账户上的余额
- 创建一个订单

只要上面有一个步骤没有执行成功，就回滚已经执行成功的其他步骤。



```
# -h 主机，你可以使用localhost，-p 端口号 你可以使用8848，-t 命名空间ID，-u 用户名，-p 密码
$ sh nacos-config.sh -h 192.168.1.150 -p 8848 -g SEATA_GROUP -t bb4ba084-9183-4406-bdf4-9254d372849e -u nacos -w nacos

```






## 注意











<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


