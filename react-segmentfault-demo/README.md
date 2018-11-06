# react重写思否 segmentfault 网站

> 2018年11月5日
>> 今天边查边写了半个header，进度缓慢；  
>> 用了styled-components，暂时没遇到大问题；  
>> 基本在画样式，也暂时没遇到js上的问题；  
>> border-box用的不太适应；  
>> map已经得心应手了。
  
> 2018年11月6日
>> 纠结了一上午styled-components里是把每个标签都export一个模块还是在整个模块内写完子元素样式。改成了后者看着又觉得乱又退了回来，先这样写吧反正也不麻烦。  
>> 今天做了header未登录的右边部分，附带整理了一下昨天的结构，把nav单独建了个组建，这样在暴露到root的Header就整洁了很多，把数据都转成了repair获取的形式，jsx加了登陆状态的判断条件。  
>> 进度仍然极慢，原生写的话现在主页应该就结束了，还要适应。  
>> 明天把header组件和loginbanner写完，争取在写好内容左侧导航。又要想一下loginbanner是放在header还是单独一个组件了。