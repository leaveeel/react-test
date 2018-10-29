# react-demo

跟着react文档写的demo

src/js/p/ 里的是[react理念](https://react.docschina.org/docs/thinking-in-react.html)的例子，container是官方代码，content-副本2是第一次自己写的代码，content是看完官方代码后优化副本2的代码.

~~index里注释了src/js/ 里其他的demo~~

添加路由设置目录，修改代码结构以便路由调用。
`<Route>`的exact属性为严格匹配。在使用`/`目录时，子目录`/child`不显示以`/`为路径目录下的内容e.g.
```
// 不使用exact属性，在/home页面同时展示/,/home内容
<Router>
    <div>
        <Route path='/' component={} />
        <Route path='/home' component={home} />
    </div>
</Router>

// 使用exact属性，在/home页面只展示/home内容
<Router>
    <div>
        <Route exact path='/' component={} />
        <Route path='/home' component={home} />
    </div>
</Router> 

使用<Switch>标签时必须设置exact
<Router>
    <Switch>
        <Route exact path='/' component={} />
        <Route path='/home' component={home} />
    </Switch>
</Router>
```
> ps: 可以将`\`的路由移动到路由的最下方以实现不重复显示的效果。  XD



\<Redirect\>标签用作404页面跳转到默认页

```
//需要与<Switch>标签同时使用，否则所有页面都跳转到Redirect的页面。e.g.

<Router>
    <Switch>
    <Route exact path='/page' component={page} />
    <Redirect to='/set' />
    </Switch>
</Router>
```
