import{c as o,a as e,F as r,e as t,d as c,o as s}from"./app.27e35c2f.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const d={},n=t(`<h2 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h2><p>yum\u6E90\u662F\u6211\u4EEC\u4E0B\u8F7D\u8F6F\u4EF6\u7684\u4ED3\u5E93\u5730\u5740\uFF0C\u53EF\u4EE5\u7C7B\u6BD4\u7740\u7406\u89E3\u4E3Amaven\u7BA1\u7406\u7BA1\u7406java\u9879\u76EE\u4E2D\u7684\u4F9D\u8D56\u7684jar\u3002\u4F46\u662Fcentos\u7CFB\u7EDF\u9ED8\u8BA4\u7684yum\u6E90\u662F\u56FD\u5916\u5730\u5740\uFF0C\u8FD9\u5C31\u9020\u6210\u4E86\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528yum\u5B89\u88C5\u4E00\u4E9B\u8F6F\u4EF6\u7684\u65F6\u5019\uFF0C\u9700\u8981\u82B1\u8D39\u5F88\u957F\u7684\u65F6\u95F4\u53BB\u7B49\u5F85\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u4FEE\u6539yum\u6E90\u4E3A\u56FD\u5185\u7684\u4EE3\u7406yum\u6E90\u3002</p><h2 id="\u5C06yum\u6E90\u4FEE\u6539\u4E3A\u56FD\u5185\u7684yum\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5C06yum\u6E90\u4FEE\u6539\u4E3A\u56FD\u5185\u7684yum\u6E90" aria-hidden="true">#</a> \u5C06yum\u6E90\u4FEE\u6539\u4E3A\u56FD\u5185\u7684yum\u6E90</h2><p>\u4EE5centos7\u4E3A\u4F8B\uFF0C\u4FEE\u6539\u4E3A\u963F\u91CC\u7684yum\u6E90</p><ol><li>\u5907\u4EFD\u672C\u5730yum\u6E90</li></ol><p><code>mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo_bak </code></p><p>2.\u83B7\u53D6\u963F\u91CCyum\u6E90\u914D\u7F6E\u6587\u4EF6</p><p><code>wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo</code></p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum-config-manager --add-repo http://mirrors.aliyun.com/repo/Centos-7.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6B64\u64CD\u4F5C\u4F1A\u5728/etc/yum.repos.d/\u76EE\u5F55\u4E0B\u521B\u5EFACentos-7.repo\u6587\u4EF6\u3002</p><p>3.\u66F4\u65B0cache</p><p><code>yum makecache</code></p><p>4.\u67E5\u770B</p><p><code>yum -y update</code></p><blockquote><p>\u6CE8\u610F\uFF1A \u5728\u7B2C\u4E8C\u6B65\u83B7\u53D6yum\u6E90\u914D\u7F6E\u6587\u4EF6\u65F6\uFF0C\u6267\u884Cwget\u547D\u4EE4\u53EF\u80FD\u65E0\u6CD5\u6267\u884C\u6210\u529F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u673A\u4E0B\u8F7D\u597Dyum\u6E90\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u4E0A\u4F20\u5230\u76F8\u5173\u76EE\u5F55\u4E0B\u5373\u53EF\u3002</p></blockquote><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,17),m=c("https://www.cnblogs.com/xjh713/p/7458437.html "),u=["src"];function i(a,l){return s(),o(r,null,[n,e("p",null,[m,e("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:a.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,u)])],64)}var _=p(d,[["render",i],["__file","update-yum.html.vue"]]);export{_ as default};
