const e={key:"v-4f143340",path:"/java/notes/redis.html",title:"Redis \u6838\u5FC3\u539F\u7406\u4E0E\u5B9E\u6218",lang:"zh-CN",frontmatter:{title:"Redis \u6838\u5FC3\u539F\u7406\u4E0E\u5B9E\u6218",category:["notes"],tag:["redis"],summary:"01 Redis \u662F\u5982\u4F55\u6267\u884C\u7684 socket \u57FA\u7840\u77E5\u8BC6; IO\u591A\u8DEF\u590D\u7528; redis\u6267\u884C\u8FC7\u7A0B; 02 Redis \u5FEB\u901F\u642D\u5EFA\u4E0E\u4F7F\u7528 redis\u7279\u6027; \u652F\u6301\u591A\u79CD\u6570\u636E\u5B58\u50A8\u7C7B\u578B; \u529F\u80FD\u5B8C\u5584; \u652F\u6301\u591A\u79CD\u8BED\u8A00; \u9AD8\u6027\u80FD; \u793E\u533A\u6D3B\u8DC3\u5EA6\u9AD8; \u5B89\u88C5\u8FC7\u7A0B; \u4F7F\u7528; redis-server	\u542F\u52A8 Redis; redis-cli	Redis \u547D\u4EE4\u884C\u5DE5\u5177; redis-bench",head:[["meta",{property:"og:url",content:"https://tianqingxiaozhu.com/java/notes/redis.html"}],["meta",{property:"og:site_name",content:"\u5929\u6674\u5C0F\u732A"}],["meta",{property:"og:title",content:"Redis \u6838\u5FC3\u539F\u7406\u4E0E\u5B9E\u6218"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-10-19T13:57:15.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"redis"}],["meta",{property:"article:modified_time",content:"2022-10-19T13:57:15.000Z"}]]},excerpt:"",headers:[{level:2,title:"01 Redis \u662F\u5982\u4F55\u6267\u884C\u7684",slug:"_01-redis-\u662F\u5982\u4F55\u6267\u884C\u7684",children:[]},{level:2,title:"02 Redis \u5FEB\u901F\u642D\u5EFA\u4E0E\u4F7F\u7528",slug:"_02-redis-\u5FEB\u901F\u642D\u5EFA\u4E0E\u4F7F\u7528",children:[]},{level:2,title:"03 Redis \u6301\u4E45\u5316\u2014\u2014RDB",slug:"_03-redis-\u6301\u4E45\u5316\u2014\u2014rdb",children:[]},{level:2,title:"04 Redis \u6301\u4E45\u5316\u2014\u2014AOF",slug:"_04-redis-\u6301\u4E45\u5316\u2014\u2014aof",children:[]},{level:2,title:"05 Redis \u6301\u4E45\u5316\u2014\u2014\u6DF7\u5408\u6301\u4E45\u5316",slug:"_05-redis-\u6301\u4E45\u5316\u2014\u2014\u6DF7\u5408\u6301\u4E45\u5316",children:[]},{level:2,title:"06 \u5B57\u7B26\u4E32\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",slug:"_06-\u5B57\u7B26\u4E32\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",children:[]},{level:2,title:"07 \u9644\u5F55\uFF1A\u66F4\u591A\u5B57\u7B26\u4E32\u64CD\u4F5C\u547D\u4EE4",slug:"_07-\u9644\u5F55-\u66F4\u591A\u5B57\u7B26\u4E32\u64CD\u4F5C\u547D\u4EE4",children:[]},{level:2,title:"08 \u5B57\u5178\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",slug:"_08-\u5B57\u5178\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",children:[]},{level:2,title:"09 \u9644\u5F55\uFF1A\u66F4\u591A\u5B57\u5178\u64CD\u4F5C\u547D\u4EE4",slug:"_09-\u9644\u5F55-\u66F4\u591A\u5B57\u5178\u64CD\u4F5C\u547D\u4EE4",children:[]},{level:2,title:"10 \u5217\u8868\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",slug:"_10-\u5217\u8868\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",children:[]},{level:2,title:"11 \u9644\u5F55\uFF1A\u66F4\u591A\u5217\u8868\u64CD\u4F5C\u547D\u4EE4",slug:"_11-\u9644\u5F55-\u66F4\u591A\u5217\u8868\u64CD\u4F5C\u547D\u4EE4",children:[]},{level:2,title:"12 \u96C6\u5408\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",slug:"_12-\u96C6\u5408\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",children:[]},{level:2,title:"13 \u9644\u5F55\uFF1A\u66F4\u591A\u96C6\u5408\u64CD\u4F5C\u547D\u4EE4",slug:"_13-\u9644\u5F55-\u66F4\u591A\u96C6\u5408\u64CD\u4F5C\u547D\u4EE4",children:[]},{level:2,title:"14 \u6709\u5E8F\u96C6\u5408\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",slug:"_14-\u6709\u5E8F\u96C6\u5408\u4F7F\u7528\u4E0E\u5185\u90E8\u5B9E\u73B0\u539F\u7406",children:[]},{level:2,title:"15 \u9644\u5F55\uFF1A\u66F4\u591A\u6709\u5E8F\u96C6\u5408\u64CD\u4F5C\u547D\u4EE4",slug:"_15-\u9644\u5F55-\u66F4\u591A\u6709\u5E8F\u96C6\u5408\u64CD\u4F5C\u547D\u4EE4",children:[]},{level:2,title:"16 Redis \u4E8B\u52A1\u6DF1\u5165\u89E3\u6790",slug:"_16-redis-\u4E8B\u52A1\u6DF1\u5165\u89E3\u6790",children:[]},{level:2,title:"17 Redis \u952E\u503C\u8FC7\u671F\u64CD\u4F5C",slug:"_17-redis-\u952E\u503C\u8FC7\u671F\u64CD\u4F5C",children:[]},{level:2,title:"18 Redis \u8FC7\u671F\u7B56\u7565\u4E0E\u6E90\u7801\u5206\u6790",slug:"_18-redis-\u8FC7\u671F\u7B56\u7565\u4E0E\u6E90\u7801\u5206\u6790",children:[]},{level:2,title:"19 Redis \u7BA1\u9053\u6280\u672F\u2014\u2014Pipeline",slug:"_19-redis-\u7BA1\u9053\u6280\u672F\u2014\u2014pipeline",children:[]},{level:2,title:"20 \u67E5\u8BE2\u9644\u8FD1\u7684\u4EBA\u2014\u2014GEO",slug:"_20-\u67E5\u8BE2\u9644\u8FD1\u7684\u4EBA\u2014\u2014geo",children:[]},{level:2,title:"21 \u6E38\u6807\u8FED\u4EE3\u5668\uFF08\u8FC7\u6EE4\u5668\uFF09\u2014\u2014Scan",slug:"_21-\u6E38\u6807\u8FED\u4EE3\u5668-\u8FC7\u6EE4\u5668-\u2014\u2014scan",children:[]},{level:2,title:"23 \u5185\u5B58\u6DD8\u6C70\u673A\u5236\u4E0E\u7B97\u6CD5",slug:"_23-\u5185\u5B58\u6DD8\u6C70\u673A\u5236\u4E0E\u7B97\u6CD5",children:[]},{level:2,title:"24 \u6D88\u606F\u961F\u5217\u2014\u2014\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F",slug:"_24-\u6D88\u606F\u961F\u5217\u2014\u2014\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F",children:[]},{level:2,title:"25 \u6D88\u606F\u961F\u5217\u7684\u5176\u4ED6\u5B9E\u73B0\u65B9\u5F0F",slug:"_25-\u6D88\u606F\u961F\u5217\u7684\u5176\u4ED6\u5B9E\u73B0\u65B9\u5F0F",children:[]},{level:2,title:"26 \u6D88\u606F\u961F\u5217\u7EC8\u6781\u89E3\u51B3\u65B9\u6848\u2014\u2014Stream\uFF08\u4E0A\uFF09",slug:"_26-\u6D88\u606F\u961F\u5217\u7EC8\u6781\u89E3\u51B3\u65B9\u6848\u2014\u2014stream-\u4E0A",children:[]},{level:2,title:"27 \u6D88\u606F\u961F\u5217\u7EC8\u6781\u89E3\u51B3\u65B9\u6848\u2014\u2014Stream\uFF08\u4E0B\uFF09",slug:"_27-\u6D88\u606F\u961F\u5217\u7EC8\u6781\u89E3\u51B3\u65B9\u6848\u2014\u2014stream-\u4E0B",children:[]},{level:2,title:"28 \u5B9E\u6218\uFF1A\u5206\u5E03\u5F0F\u9501\u8BE6\u89E3\u4E0E\u4EE3\u7801",slug:"_28-\u5B9E\u6218-\u5206\u5E03\u5F0F\u9501\u8BE6\u89E3\u4E0E\u4EE3\u7801",children:[]},{level:2,title:"29 \u5B9E\u6218\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668\u5B89\u88C5\u4E0E\u4F7F\u7528\u53CA\u539F\u7406\u5206\u6790",slug:"_29-\u5B9E\u6218-\u5E03\u9686\u8FC7\u6EE4\u5668\u5B89\u88C5\u4E0E\u4F7F\u7528\u53CA\u539F\u7406\u5206\u6790",children:[]},{level:2,title:"30 \u5B8C\u6574\u6848\u4F8B\uFF1A\u5B9E\u73B0\u5EF6\u8FDF\u961F\u5217\u7684\u4E24\u79CD\u65B9\u6CD5",slug:"_30-\u5B8C\u6574\u6848\u4F8B-\u5B9E\u73B0\u5EF6\u8FDF\u961F\u5217\u7684\u4E24\u79CD\u65B9\u6CD5",children:[]},{level:2,title:"31 \u5B9E\u6218\uFF1A\u5B9A\u65F6\u4EFB\u52A1\u6848\u4F8B",slug:"_31-\u5B9E\u6218-\u5B9A\u65F6\u4EFB\u52A1\u6848\u4F8B",children:[]},{level:2,title:"32 \u5B9E\u6218\uFF1ARediSearch \u9AD8\u6027\u80FD\u7684\u5168\u6587\u641C\u7D22\u5F15\u64CE",slug:"_32-\u5B9E\u6218-redisearch-\u9AD8\u6027\u80FD\u7684\u5168\u6587\u641C\u7D22\u5F15\u64CE",children:[]},{level:2,title:"33 \u5B9E\u6218\uFF1ARedis \u6027\u80FD\u6D4B\u8BD5",slug:"_33-\u5B9E\u6218-redis-\u6027\u80FD\u6D4B\u8BD5",children:[]},{level:2,title:"34 \u5B9E\u6218\uFF1ARedis \u6162\u67E5\u8BE2",slug:"_34-\u5B9E\u6218-redis-\u6162\u67E5\u8BE2",children:[]},{level:2,title:"35 \u5B9E\u6218\uFF1ARedis \u6027\u80FD\u4F18\u5316\u65B9\u6848",slug:"_35-\u5B9E\u6218-redis-\u6027\u80FD\u4F18\u5316\u65B9\u6848",children:[]},{level:2,title:"36 \u5B9E\u6218\uFF1ARedis \u4E3B\u4ECE\u540C\u6B65",slug:"_36-\u5B9E\u6218-redis-\u4E3B\u4ECE\u540C\u6B65",children:[]},{level:2,title:"37 \u5B9E\u6218\uFF1ARedis\u54E8\u5175\u6A21\u5F0F\uFF08\u4E0A\uFF09",slug:"_37-\u5B9E\u6218-redis\u54E8\u5175\u6A21\u5F0F-\u4E0A",children:[]},{level:2,title:"38 \u5B9E\u6218\uFF1ARedis \u54E8\u5175\u6A21\u5F0F\uFF08\u4E0B\uFF09",slug:"_38-\u5B9E\u6218-redis-\u54E8\u5175\u6A21\u5F0F-\u4E0B",children:[]},{level:2,title:"39 \u5B9E\u6218\uFF1ARedis \u96C6\u7FA4\u6A21\u5F0F\uFF08\u4E0A\uFF09",slug:"_39-\u5B9E\u6218-redis-\u96C6\u7FA4\u6A21\u5F0F-\u4E0A",children:[]},{level:2,title:"40 \u5B9E\u6218\uFF1ARedis \u96C6\u7FA4\u6A21\u5F0F\uFF08\u4E0B\uFF09",slug:"_40-\u5B9E\u6218-redis-\u96C6\u7FA4\u6A21\u5F0F-\u4E0B",children:[]},{level:2,title:"41 \u6848\u4F8B\uFF1ARedis \u95EE\u9898\u6C47\u603B\u548C\u76F8\u5173\u89E3\u51B3\u65B9\u6848",slug:"_41-\u6848\u4F8B-redis-\u95EE\u9898\u6C47\u603B\u548C\u76F8\u5173\u89E3\u51B3\u65B9\u6848",children:[]},{level:2,title:"42 \u6280\u80FD\u5B66\u4E60\u6307\u5357",slug:"_42-\u6280\u80FD\u5B66\u4E60\u6307\u5357",children:[]},{level:2,title:"43 \u52A0\u9910\uFF1ARedis \u7684\u53EF\u89C6\u5316\u7BA1\u7406\u5DE5\u5177",slug:"_43-\u52A0\u9910-redis-\u7684\u53EF\u89C6\u5316\u7BA1\u7406\u5DE5\u5177",children:[]}],git:{createdTime:1666187835e3,updatedTime:1666187835e3,contributors:[{name:"zeanzai",email:"zeanzai.me@gmail.com",commits:1}]},readingTime:{minutes:38.35,words:11506},filePathRelative:"java/notes/redis.md"};export{e as data};
