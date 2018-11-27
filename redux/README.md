# redux demo

写demo的时候需要获取登陆状态，在登陆组件改变状态后需要让父组件或同级组建同时改变状态，使用`target`获取的方式太繁琐，可以用`redux`还有专为react优化的`react-redux`解决数据传递问题。因为新学所以选用`redux`。  
  
上周的杂事和摸鱼导致项目进度基本为0，这周先看看redux然后接着写[segmentfault](../react-segmentfault-demo)的demo。

根据[这篇文章](https://segmentfault.com/a/1190000011474522)进行了拓展，对redux的使用基本熟悉。明天完善这个demo以后可以继续做前面的了。

基本功能做完了，还有个取消选中状态的小功能，不需要在操作reducer了。update功能很顺利，因为是单选，到delete多选的时候出了些问题，首先`splice`方法会导致数组`index`变化，故选用了`filter`方法，然后在filter内需要再次遍历存在store里要删除元素的index，先直接用`forEach`发现会循环两遍，然后琢磨了挺久。最后创建了一个新的数组用来储存多次遍历的结果，而后用`every`判断并返回。详细可见[cart-reducer](./src/redux/reducers/cart-reducers)内`//delete方法`。

redux的练习demo算是完成了，按照上面提到的文章另外分了模块，加了两个功能，按需求修改了点语法。注释还不完善，趁现在还看的懂多少补一点。通过这个demo对使用redux来说有了大概的了解了，之后的就在项目里慢慢提升吧。

