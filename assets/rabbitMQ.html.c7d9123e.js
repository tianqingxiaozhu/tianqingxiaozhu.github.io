import{r as s,c as r,a as e,b as i,F as t,e as d,d as a,o as c}from"./app.27e35c2f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const o={},p=d(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>rabbitmq\u4F5C\u4E3A\u6D88\u606F\u4E2D\u95F4\u4EF6\u88AB\u5E94\u7528\u5230\u5F88\u591A\u573A\u666F\u3002</p><h2 id="\u4FE1\u606F\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u7EDF\u8BA1" aria-hidden="true">#</a> \u4FE1\u606F\u7EDF\u8BA1</h2><p>\u4E0B\u8F7D\u5730\u5740\uFF1A 1. erlang\uFF1A http://www.erlang.org/downloads 2. rabbitmq\uFF1A http://www.rabbitmq.com/install-rpm.html#downloads</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5B89\u88C5\u6B65\u9AA4\u5206\u4E3A\u4E24\u6B65\uFF0C\u7B2C\u4E00\u6B65\u662F\u5B89\u88C5erlang\u73AF\u5883\uFF0C\u7B2C\u4E8C\u6B65\u662F\u5B89\u88C5rabbitmq-server\u3002erlang\u7684\u5B89\u88C5\u65B9\u5F0F\u6709\u5F88\u591A\u79CD\uFF1A</p><ol><li>\u4F7F\u7528\u6E90\u7801\u65B9\u5F0F\u5B89\u88C5\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u9700\u8981\u5B89\u88C5gcc\u7684\u7B49\u7F16\u8BD1\u8F6F\u4EF6\uFF1B</li><li>\u76F4\u63A5\u4F7F\u7528\u5B89\u88C5\u5305\u65B9\u5F0F\u8FDB\u884C\u5B89\u88C5\uFF08\u91C7\u7528\u6B64\u65B9\u5F0F\u5B89\u88C5\uFF09\uFF1B</li><li>\u4F7F\u7528yum\u6E90\u65B9\u5F0F\u5B89\u88C5\uFF1B</li></ol><h3 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h3><h4 id="\u5B89\u88C5erlang" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5erlang" aria-hidden="true">#</a> \u5B89\u88C5erlang</h4><p><strong>\u6BD4\u8F83\u719F\u6089erlang\u7684\u53EF\u4EE5\u91C7\u7528\u6B64\u65B9\u5F0F\u8FDB\u884C\u5B89\u88C5\uFF0C\u5BF9\u4E8E\u4E0D\u719F\u6089erlang\u7684\uFF0C\u63A8\u8350\u4F7F\u7528\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u3002</strong></p><ul><li>\u5B89\u88C5\u4F9D\u8D56</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ yum install -y gcc glibc-devel make ncurses-devel openssl-devel xmlto
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u89E3\u538B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ tar zxf /opt/package/otp_src_21.2.tar.gz -C /opt/unziped/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFA\u6587\u4EF6\u5939</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ mkdir /usr/setup/otp_src_21.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u8FDB\u5165\u89E3\u538B\u540E\u7684\u6587\u4EF6\u5939\u5E76config</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cd /opt/unziped/otp_src_21.2/
$ ./configure --prefix=/usr/setup/otp_src_21.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u7F16\u8BD1\u5E76\u5B89\u88C5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ make &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u5E76\u4F7F\u4E4B\u751F\u6548</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /etc/profile
export ERL_HOME=/usr/setup/otp_src_21.2
PATH=$ERL_HOME/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u6D4B\u8BD5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ erl
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u5B89\u88C5\u5E76\u914D\u7F6Erabbitmq" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5E76\u914D\u7F6Erabbitmq" aria-hidden="true">#</a> \u5B89\u88C5\u5E76\u914D\u7F6Erabbitmq</h4><ul><li>\u76F4\u63A5\u5B89\u88C5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ rpm -ivh --nodeps rabbitmq-server-3.7.9-1.el7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5F00\u653E\u7AEF\u53E3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ firewall-cmd --zone=public --permanent --add-port=15672/tcp
$ firewall-cmd --zone=public --permanent --add-port=5672/tcp
$ firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u542F\u52A8\u7BA1\u7406\u5BA2\u6237\u7AEF\u529F\u80FD</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ rabbitmq-plugins enable rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u540E\u53F0\u542F\u52A8</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ rabbitmq-server -detached
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFA\u7528\u6237\uFF0C\u5E76\u8D4B\u4E88\u6743\u9650\uFF08\u6B64\u64CD\u4F5C\u8981\u653E\u5230\u542F\u52A8\u4E4B\u540E\uFF09</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ rabbitmqctl add_user root root1003
$ rabbitmqctl set_user_tags root administrator
$ rabbitmqctl set_permissions -p / root &#39;.*&#39; &#39;.*&#39; &#39;.*&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u65B9\u5F0F\u4E8C-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C-\u63A8\u8350" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C\uFF08\u63A8\u8350\uFF09</h3><ul><li>\u5B89\u88C5\u4F9D\u8D56</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ yum install -y socat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5B89\u88C5erlang</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ rpm -ivh erlang-21.0.9-1.el7.centos.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5B89\u88C5rabbitmq</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ rpm -ivh rabbitmq-server-3.7.9-1.el7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5F00\u653E\u7AEF\u53E3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ firewall-cmd --zone=public --permanent --add-port=15672/tcp
$ firewall-cmd --zone=public --permanent --add-port=5672/tcp
$ firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u540E\u53F0\u542F\u52A8</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ rabbitmq-server -detached
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u542F\u52A8\u7BA1\u7406\u5BA2\u6237\u7AEF\u529F\u80FD</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ rabbitmq-plugins enable rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFA\u7528\u6237\uFF0C\u5E76\u8D4B\u4E88\u6743\u9650</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ rabbitmqctl add_user northmeter admin123456 // \u5BC6\u7801\u4E0D\u80FD\u592A\u590D\u6742
$ rabbitmqctl set_user_tags northmeter administrator
$ rabbitmqctl set_permissions -p / northmeter &#39;.*&#39; &#39;.*&#39; &#39;.*&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u5F00\u673A\u81EA\u542F\u52A8</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ chkconfig rabbitmq-server on
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u95EE\u9898\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u89E3\u51B3" aria-hidden="true">#</a> \u95EE\u9898\u89E3\u51B3</h2>`,53),b=a("\u7279\u522B\u5F3A\u8C03\uFF1Arabbitmq\u7684\u5B89\u88C5\u7279\u522B\u4F9D\u8D56erlang\u7684\u7248\u672C\uFF0C\u5177\u4F53\u4F9D\u8D56\u54EA\u4E00\u4E2A\u7248\u672C\u8BF7\u53C2\u8003"),m={href:"http://www.rabbitmq.com/which-erlang.html",target:"_blank",rel:"noopener noreferrer"},g=a("\u6B64\u5904"),h=a("\u3002"),x=e("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),a(" \u53C2\u8003\u94FE\u63A5")],-1),v=e("li",null,"https://www.cnblogs.com/h--d/p/9982202.html",-1),_=e("li",null,"https://www.cnblogs.com/h--d/p/9981377.html",-1),f=e("li",null,"https://www.cnblogs.com/h--d/p/9998858.html",-1),$=a("https://blog.csdn.net/qwfys200/article/details/79744414 "),w=["src"];function q(n,k){const l=s("ExternalLinkIcon");return c(),r(t,null,[p,e("p",null,[b,e("a",m,[g,i(l)]),h]),x,e("ol",null,[v,_,f,e("li",null,[$,e("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:n.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,w)])])],64)}var E=u(o,[["render",q],["__file","rabbitMQ.html.vue"]]);export{E as default};
