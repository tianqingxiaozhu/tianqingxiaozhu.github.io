import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
  
  // 服务器相关
  "/linux/": [

    // 服务器管理
    {
      text: "服务器管理",
      collapsable: true,
      prefix: "server/",
      
      children: [
        {
          text: "服务器基本信息",
          link: "basic-information.md",
        },
        {
          text: "安装CentOS7.5",
          link: "cento7.5-install-tutorial.md",
        },
        {
          text: "定时器",
          link: "cron.md",
        },
        {
          text: "磁盘扩展",
          link: "disk-extend.md",
        },
        {
          text: "DNS",
          link: "dns.md",
        },
        {
          text: "创建用户",
          link: "new-users.md",
        },
        {
          text: "服务自启动",
          link: "services-autorun.md",
        },
        {
          text: "tomcat日志切分",
          link: "split-tomcat-log.md",
        },
        {
          text: "修改yum源",
          link: "update-yum.md",
        },
        {
          text: "使用vi编辑器",
          link: "use-vi-vim.md",
        },
      ],
    },

    // 软件安装
    {
      text: "软件安装",
      collapsable: true,
      prefix: "install/",
      icon: "software",
      children: [
        { text: "docker", link: "docker.md"},
        { text: "ffmpeg", link: "ffmpeg.md"},
        { text: "git", link: "git.md"},
        { text: "gitlab", link: "gitlab.md"},
        { text: "golang", link: "golang.md"},
        { text: "jdk", link: "jdk.md"},
        { text: "jekyll", link: "jekyll.md"},
        { text: "jenkins", link: "jenkins.md"},
        { text: "maven", link: "maven.md"},
        { text: "mysql", link: "mysql.md"},
        { text: "nexus", link: "nexus.md"},
        { text: "nginx", link: "nginx.md"},
        { text: "node", link: "node.md"},
        { text: "rabbitMQ", link: "rabbitMQ.md"},
        { text: "redis", link: "redis.md"},
        { text: "showdoc", link: "showdoc.md"},
        { text: "tomcat", link: "tomcat.md"},
      ],
    },

    // 软件维护
    {
      text: "软件维护",
      collapsable: true,
      prefix: "software/",
      icon: "set",
      children: [
        { text: "删除openjdk", link: "delete-openjdk.md" },
        { text: "前端项目自动部署", link: "forend-auto-deploy.md" },
        { text: "图片服务器", link: "image-server.md" },
        { text: "后端系统自动部署", link: "jenkins-java-project.md" },
        { text: "jenkins使用问题", link: "jenkins-use.md" },
        { text: "maven配置jdk1.8", link: "maven-config-jdk1.8.md" },
        { text: "迁移showdoc", link: "move-showdoc.md" },
        { text: "mysql常见配置", link: "mysql-config-file.md" },
        { text: "mysql配置文件", link: "mysql5.7-config-file.md" },
        { text: "mysql不同配置场景解决方案", link: "mysql5.7-configure.md" },
        { text: "mysql配置主从", link: "mysql5.7-master-and-slave.md" },
        { text: "nexus配置阿里代理源", link: "nexus-config-aliyun-proxy.md" },
        { text: "nexus私服的使用", link: "nexus-deploy-jar.md" },
        { text: "nginx配置https", link: "nginx-config-https.md" },
        { text: "nginx配置tomcat", link: "nginx-tomcat.md" },
        { text: "nginx配置方向代理", link: "nginx-upstream.md" },
        { text: "linux问题汇总", link: "problems.md" },
        { text: "redis3.0配置文件", link: "redis3.0-configFile.md" },
        { text: "redis5.0集群模式安装", link: "redis5.0-cluster.md" },
        { text: "tomcat设置jmx", link: "tomcat-jmx.md" },
        { text: "使用nexus", link: "use-nexus.md" },
        { text: "使用visualVM连接tomcat", link: "use-visualVM-connect-tomcat.md" },
        { text: "西部数码配置https", link: "west.cn-https-config.md" },
        { text: "windows系统进行部署", link: "window-develop.md" },
        { text: "windows配置ng的自启动", link: "window-nginx-install-auto-start.md" },
      ],
    },

    // HOME服务器日志
    {
      text: "HOME服务器",
      collapsable: true,
      prefix: "home/",
      icon: "emoji",
      children: [
        { text: "00.服务器安装软件日志", link: "home.centos-install.log.md", },
        { text: "01.挂载NTFS硬盘", link: "mount-disk.md", },
      ],
    },
  ],

  // 面试前准备
  "/resume/": [
    {
      text: "学习方法",
      
      link: "study.md",
    },
    {
      text: "简历编写",
      
      link: "resume.md",
    },
    {
      text: "面试技巧",
      
      link: "interview.md",
    },
    {
      text: "辞职",
      
      link: "quictjob.md",
    },
  ],

  // java
  "/java/": [

    // 计算机基础
    {
      text: "一、计算机基础",
      collapsable: true,
      prefix: "cscore/",
      children: [
        { text: "计算机网络", link: "network.md" },
        {
          text: "数据结构与算法",
          collapsable: true,
          prefix: "dsa/",
          children: [
            { text: "写在前面", link: "firstread.md" },
            { text: "数据结构与算法", link: "dsa.md" },
            { text: "哈希表", link: "hashtable.md" },
            { text: "红黑树", link: "redblacktree.md" },
            { text: "B+树", link: "bplustree.md" },
            { text: "LRU算法", link: "lru.md" },
            { text: "令牌桶算法", link: "tokenbukect.md" },
          ],
        },
        { text: "设计模式", link: "design-pattern.md" },
      ],
    },

    // Java核心
    {
      text: "二、JavaCore",
      collapsable: true,
      prefix: "core/",
      children: [
        
        { text: "集合", link: "collections.md" },
        { text: "JUC", link: "juc.md" },
        { text: "泛型", link: "everytype.md" },
        {
          text: "JVM",
          collapsable: true,
          prefix: "jvm/",
          children: [
            { text: "01.类的编译、加载及运行", link: "01.类的编译、加载及运行.md" },
            { text: "02.内存结构", link: "02.内存结构.md" },
            { text: "03.java中的GC", link: "03.java中的GC.md" },
            { text: "04.字节码文件", link: "04.字节码文件.md" },
            { text: "05.虚拟机中的高效并发", link: "05.虚拟机中的高效并发.md" },
            { text: "面试题", link: "面试题.md" },
          ],
        },
        {
          text: "JVM02",
          collapsable: true,
          prefix: "jvm02/",
          children: [
            { text: "00-jvm作业", link: "00-jvm作业.md" },
            { text: "01-初识jvm", link: "01-初识jvm.md" },
            { text: "02-jvm运行机制", link: "02-jvm运行机制.md" },
            { text: "03-常用jvm配置参数", link: "03-常用jvm配置参数.md" },
            { text: "04-GC算法和种类", link: "04-GC算法和种类.md" },
            { text: "05-GC参数", link: "05-GC参数.md" },
            { text: "06-类加载器", link: "06-类加载器.md" },
            { text: "07-性能监控工具", link: "07-性能监控工具.md" },
            { text: "08-java堆分析", link: "08-java堆分析.md" },
            { text: "jvm编译和运行过程", link: "jvm编译和运行过程.md" },
          ],
        },
        { text: "本地缓存", link: "localcache.md" },
        {
          text: "其他",
          collapsable: true,
          prefix: "other/",
          children: [
            { text: "装箱和拆箱问题详解", link: "ints-and-integers.md" },
          ],
        },
      ],
    },

    // Java框架
    {
      text: "三、框架",
      collapsable: true,
      prefix: "arch/",
      children: [

        {
          text: "框架知识",
          link: "knowledge.md",
        },
        {
          text: "mybatis",
          link: "mybatis.md",
        },
        {
          text: "spring",
          link: "spring.md",
        },
        {
          text: "SpringCloud",
          collapsable: true,
          prefix: "springcloud/",
          children: [
            { text: "01 微服务与SpringCloud", link: "Ch01.md" },
            { text: "02 SpringCloud Eureka上篇", link: "Ch02.md" },
            { text: "03 SpringCloud Eureka下篇", link: "Ch03.md" },
            { text: "04 SpringCloud Feign的使用扩展", link: "Ch04.md" },
            { text: "05 SpringCloud Ribbon实战", link: "Ch05.md" },
            { text: "06 SpringCloud Hystrix实战", link: "Ch06.md" },
            { text: "07 SpringCloud zuul 实战", link: "Ch07.md" },
            { text: "12 SpringCloud 配置中心", link: "Ch12.md" },
          ],
        },
      ],
    },

    // 中间件
    {
      text: "四、中间件",
      collapsable: true,
      prefix: "middleware/",
      children: [
        {
          text: " MySQL",
          link: "mysql.md",
        },
        {
          text: "Redis",
          link: "redis.md",
        },
        {
          text: " ZooKeeper",
          link: "zk.md",
        },
        {
          text: "MQ",
          prefix: "mq/",
          collapsable: true,
          children: [
            {
              text: "rocket",
              link: "rocket.md",
            },
            {
              text: "kafka",
              link: "kafka.md",
            },
          ]
        },
      ],
    },

    // 分布式
    {
      text: "五、分布式",
      collapsable: true,
      prefix: "distribute/",
      children: [
        {
          text: "分布式基本原理",
          link: "distribute-system-theory.md",
        },
        {
          text: "分布式缓存",
          link: "cache.md",
        },
        {
          text: "一致性Hash",
          link: "hash.md",
        },
        {
          text: "分布式事务",
          link: "transaction.md",
        },
        {
          text: "Seata TCC分布式事务",
          link: "seataTCC/SeataTCC.md",
        },
        {
          text: "分布式锁",
          link: "distribute-lock.md",
        },
        {
          text: "分库分表",
          link: "sharding.md",
        },
        {
          text: "分布式ID",
          link: "distribute-id.md",
        },
        {
          text: "分布式消息",
          
          prefix: "mq/",
          collapsable: true,
          children: [
            {
              text: "rocket",
              link: "rocket.md",
            },
            {
              text: "kafka",
              link: "kafka.md",
            },
          ]
        },
        {
          text: "系统高可用设计研究",
          link: "high-avaiable.md",
        },
      ],
    },

    // 源码系列
    {
      text: "六、源码系列",
      collapsable: true,
      prefix: "origincode/",
      children: [
        {
          text: "集合源码",
          link: "collections.md",
        }
      ],
    },

    // 项目实战
    {
      text: "七、项目实战",
      collapsable: true,
      prefix: "practice/",
      children: [
        {
          text: "框架中的线程池",
          link: "excutors.md",
        },
        {
          text: "开发阶段如何进行任务分配",
          link: "management.md",
        },
        {
          text: "RedisUtils",
          link: "RedisUtils.md",
        },
        {
          text: "如何设计一个XXX系统",
          link: "designASystem.md",
        },
        {
          text: "多租户SaaS实战",
          link: "una-saas-toturial.md",
        },
      ],
    },

    // 学习笔记
    {
      text: "八、学习笔记",
      collapsable: true,
      prefix: "notes/",
      children: [
        {
          text: "《分布式技术原理与实战45讲》",
          link: "distribute-system-theory.md",
        },
        {
          text: "《中华石杉》",
          link: "zh13.md",
        },
        {
          text: "《C2C 电商系统微服务架构 120 天实战训练营》",
          link: "c2c.md",
        },
        {
          text: "《Redis 核心原理与实战》",
          link: "redis.md",
        },
        {
          text: "《基于Shardingsphere的分库分表实战》",
          link: "Shardingsphere.md",
        },
      ],
    },
  ],

  // 谷粒商城
  "/guli": [
    {
      text: "1.全文搜索（ElasticSearch）.md",
      icon: "alias",
      link: "1.全文搜索（ElasticSearch）.md",
    },
    {text:"2.压力测试+优化（Jmeter）",icon:"alias",link:"2.压力测试+优化（Jmeter）.md"},
    {text:"3.缓存（Redis）",icon:"alias",link:"3.缓存（Redis）.md"},
    {text:"4.异步与线程池（Concurrent）",icon:"alias",link:"4.异步与线程池（Concurrent）.md"},
    {text:"5.短信服务",icon:"alias",link:"5.短信服务.md"},
    {text:"6.社交登录OAuth2.0",icon:"alias",link:"6.社交登录OAuth2.0.md"},
    {text:"7.分布式session（SpringSession）",icon:"alias",link:"7.分布式session（SpringSession）.md"},
    {text:"8.消息中间件（RabbitMQ）",icon:"alias",link:"8.消息中间件（RabbitMQ）.md"},
    {text:"9.本地事务&分布式事务（Seata）",icon:"alias",link:"9.本地事务&分布式事务（Seata）.md"},
    {text:"10.支付",icon:"alias",link:"10.支付.md"},
    {text:"11.定时任务（Scheduled）",icon:"alias",link:"11.定时任务（Scheduled）.md"},
    {text:"12.熔断+降级+限流+链路追踪（sentinel）",icon:"alias",link:"12.熔断+降级+限流+链路追踪（sentinel）.md"},
    {text:"13.服务链路追踪（sleuth+zipkin）",icon:"alias",link:"13.服务链路追踪（sleuth+zipkin）.md"},
    {text:"14.K8S+KubeSphere+DevOps（新版笔记）",icon:"alias",link:"14.K8S+KubeSphere+DevOps（新版笔记）.md"},
    {text:"14.k8s+devops（旧版笔记）",icon:"alias",link:"14.k8s+devops（旧版笔记）.md"},
    {text:"15.集群知识（MySQL+Redis+ElasticSearch+RabbitMQ）",icon:"alias",link:"15.集群知识（MySQL+Redis+ElasticSearch+RabbitMQ）.md"},
  ],

  // 网站建设 done
  "/slashteen/web/": [
    {
      text: "个人网站搭建",
      icon: "alias",
      link: "genstaticweb.md",
    },
    {
      text: "文章编辑规范",
      icon: "edit",
      link: "writearticle.md",
    },
  ],  
});
