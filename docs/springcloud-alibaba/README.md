---
title: "基于SpringCloud-Alibaba的微服务实战演练"
category:
  - "springcloud-alibaba"
tag:
  - "分布式系统"
  - "实战"
---

## 说明

本系列教程，主要是基于SpringCloud-Alibaba相关组件的实战演练，属于HelloWord性质的工程内容。同时，在讲解各个组件的过程中会穿插一些分布式的基本原理，但是不会展开。如果读者有兴趣，可以自行查阅本网站的其他文章。


## 组件 

- Nacos ： 注册中心、配置中心
- SpringCloud-Gateway ： 微服务网关
- OpenFeign ： 远程过程调用
- Sentinel ： 限流
- Seata ： 分布式事务
- RocketMQ ： 分布式消息
- Skywalking ： 分布式链路追踪
- ELK ： 日志记录系统
- ... 


## 任务列表

这一部分虽然只是笔者在实际实践过程中的一个任务列表，但是也可以做为系列文章的目录大纲。

- [x] 架构师都是如何做技术选型的？
- [x] nacos
  - [x] 注册中心
    - [x] 传统调用方式
    - [x] 使用openfeign方式进行调用
    - [x] openfeign的进阶使用
      - [x] 多参数
      - [x] URL中携带参数
      - [x] 传递对象
      - [x] 文件上传
      - [x] 文件下载
      - [x] 开启GZIP压缩
      - [x] 开启日志
      - [x] 超时控制
      - [x] 替换客户端
    - [x] 注册到不同的命名空间以进行服务隔离
  - [x] 配置中心
    - [x] 传统读取配置文件方式
    - [x] 从配置中心中读取配置项
    - [x] 从共享配置文件中读取配置项
    - [x] 把共享配置文件中的配置项映射成JavaBean
    - [x] 以服务名作为命名空间进行配置隔离
    - [x] 以环境名作为命名空间进行配置隔离
    - [ ] 灰度发布
- [ ] gateway
  - [x] 服务发现的路由规则
  - [x] 重写路由
  - [x] 路由规则可配置化
  - [ ] https的使用[xxx] 现在微服务的部署架构大多情况下是SLB+Nginx类型的部署模型，而微服务大多都是在内网环境中，因此网关也很少使用https；
  - [ ] 自定义全局异常[xxx]
  - [ ] 基于限流及自定义限流异常
  - [x] 集成swagger
  - [ ] CROS方案
  - [ ] 灰度发布
- [ ] Seata
  - [x]  AT 模式
  - [ ]  TCC 模式
  - [ ]  XA 模式
  - [ ]  Saga 模式 
  - [ ] 两阶段提交事务
- [ ] 基于RabbitMQ使用消息中间件
  - [ ] 创建交换机、binding 、 queue 
  - [ ] 发送消息
  - [ ] 发送消息并确认
  - [ ] 接受消息
  - [ ] 接受消息并确认
- [ ] Cache
- [ ] 其他
  - [ ] 分布式锁
  - [ ] 分布式事务原理
  - [ ] 分布式ID
  - [ ] 分布式相关算法


## 获取代码

> 微信扫码关注“天晴小猪”（ID： it-come-true），回复“1000”，获取本系列教程的实战源码。

模块与端口对应关系如下：

- nacos-provider : 10000
- nacos-consumer : 10100
- nacos-config : 10200
- nacos-use-service-name : 10300
- nacos-use-env-name : 10400
- gateway-demo : 10500
- swagger-user : 10600
- swagger-order : 10700
- gateway-swagger : 10800
- seata-storage : 10900
- seata-account : 11000
- seata-order : 11100


## 技术选型

### 为什么要做技术选型

骑车上路，就要挑一辆顺手的车子，要想把车子骑好，就需要选择一副好的轮子。同理，要想让程序运行的好，一副好轮子也是必不可少的。世间轮子千千万万，哪一个最适合自己，这就是为什么要做技术选型的原因。

### 技术选型的标准

要做选择，就必须要有一些选择的标准。那么做技术选型的标准是什么呢？

做技术选型，大多情况下要从以下几个方面入手：

1. 项目的开源程度及社区活跃程度。
2. 项目的市场应用广度。
3. 功能与业务的契合程度。
4. 考虑相关成本：
   1. 经济成本，包括但不限于服务器资源...
   2. 人力成本，包括迁移成本、集成开发成本；
   3. 运维成本
   4. 扩展成本
   5. ...


### 技术选型的实践过程


大概的实践过程是：

1. 架构师根据上面几个选择标准，选定一组相关的备用技术；
2. 在架构会议上进行讨论，从各个角度去讨论是否符合自己公司的组织内的业务和技术架构；
3. 架构师团队编写对应的demo样例及相关的文档，甚至还需要举行培训会议；
4. 团队编写相关代码；

> 在实际的开发过程中，大多情况下都是架构师团队负责选取一些组件，而我们主要负责使用和业务代码，因此在我们的系列文章中，我们不对同类技术组件进行着重介绍，只着重介绍具体组件的用法。大家对上面的方法论有所了解即可。

## SpringCloud的版本

分为很多个组件，每一个组件都有自己的版本坐标，这个也很好理解，SpringCloud是一个大型的工程，在这个工程里面有很多组件，每一个组件都是由一个小团队负责交付，由于负责不同的组件的团队不同，所以组件的交付时间节点肯定不一样，所以SpringCloud有一个自己的版本，这个版本中每一个组件的版本是不同的。

### SpringCloud-Alibaba的版本

SpringCloud-Alibaba是基于SpringBoot开发的，也是有不同的组件组成的。

因此二者有一个对应关系。

### 对应关系

![Spring版本关系](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108131544.png)

![组件之间的版本关系](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108131636.png)

我们选取的版本如下：

- JDK1.8
- CentOS7.9
- SpringBoot-2.2.5.RELEASE
- SpringCloud-Hoxton.SR3
- SpringCloudAlibaba-2.2.1.RELEASE
- Nacos1.2.1
- Seata1.3.0
- Sentinel1.7.1
- ...


### 创建服务模块的方法

项目使用idea中的 Spring Initializer 进行生成。这样做的好处是`当团队规模较大，并且每一个团队都负责一个模块时，可以让不同的团队只需要下载自己负责的模块代码即可，便于代码权限的管理`。


## 运行环境说明

我们使用一个台式机作为我们的服务器，并且开发环境的一些组件是部署在docker上的。

```
[root@home ~]# uname -a
Linux home.centos 3.10.0-1160.76.1.el7.x86_64 #1 SMP Wed Aug 10 16:21:17 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
```

Docker的安装过程：

```shell
// 安装yum源的工具包
yum install -y yum-utils

// 配置docker的安装源
yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo

// 安装docker
yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin

// 设置开机自启
systemctl enable docker


mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
"registry-mirrors": ["https://hpifphoh.mirror.aliyuncs.com"]
}
EOF
systemctl daemon-reload
systemctl restart docker
```

## 自定义starter管理依赖的版本


为了更好的各个版本的依赖，我们搭建一个nexus私服，然后创建一个项目，配置好所有的依赖版本后，上传私服，然后让所有的模块都以这个模块父模块进行依赖，这样就达到所有的依赖的版本管理的目的。这也是spring官方starter的制作过程。

实际的本地开发过程中，可以不用搭建nexus私服。不过本篇文章可以带你体验一下官方Spring的Starter的制作过程。


### 安装 

```
docker pull sonatype/nexus3

mkdir -p /mydata/nexus/data
chmod 777 -R /mydata/nexus

docker run -d --name nexus -p 8081:8081 \
--restart always \
-v /mydata/nexus/data:/nexus-data sonatype/nexus3

docker logs -f nexus
```

### 登录admin

```
cat /mydata/nexus/data/admin.password 
```

登录页面后修改密码： root1003

### web页面上配置用于上传自定义包的用户

- 创建角色

![创建角色](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113305.png)

- 创建用户

![创建用户](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113401.png)


### 配置maven的config

```

<server>
    <id>maven-public</id>
    <username>zeanzai</username>
    <password>root1003</password>
</server>
<server>
    <id>maven-releases</id>
    <username>zeanzai</username>
    <password>root1003</password>
</server>
<server>
    <id>maven-snapshots</id>
    <username>zeanzai</username>
    <password>root1003</password>
</server>

    <mirror>
    <id>maven-public</id>
    <name>maven-public</name>
    <url>http://192.168.1.150:8081/repository/maven-public/</url>
    <mirrorOf>*</mirrorOf>
</mirror>

<profile> 
    <id>jdk-1.8</id> 
    <activation> 
    <activeByDefault>true</activeByDefault> 
    <jdk>1.8</jdk> 
    </activation> 
    <properties> 
    <maven.compiler.source>1.8</maven.compiler.source> 
    <maven.compiler.target>1.8</maven.compiler.target> 
    <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion> 
    </properties> 
</profile>
```

### 项目pom文件中的配置

```
<distributionManagement>
    <repository>
        <id>maven-releases</id>
        <url>http://192.168.1.150:8081/repository/maven-releases/</url>
    </repository>
    <snapshotRepository>
        <id>maven-snapshots</id>
        <url>http://192.168.1.150:8081/repository/maven-snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```

注意此处的id要与maven中的server中的id保持一致。

### deploy

- 在maven的窗口中，找到“create..”：

![打开maven的生命周期](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113526.png)

- 在打开的窗口中输入 `clean deploy -DskipTests` ：

![创建maven的deploy命令](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113624.png)

- 运行命令，发布到nexus私服上：

![双击运行](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113646.png)

- 运行结果：

![运行成功](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113701.png)

![上传成功](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113739.png)


### 其他模块的依赖坐标

在其他模块中统一引用我们自定义的starter依赖，这样就能进行统一的依赖的版本管理了。

```
<parent>
    <groupId>com.tianqingxiaozhu</groupId>
    <artifactId>tianqingxiaozhu-starter</artifactId>
    <version>0.0.1-SNAPSHOT</version>
</parent>
```




---

<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
