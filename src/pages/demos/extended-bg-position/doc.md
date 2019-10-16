# 灵活背景定位
## background-position 的扩展语法方案

## 解决方案
在 CSS 背景与边框(第三版)(http://w3.org/TR/css3-background)中， background-position 属性已经得到扩展，它允许我们指定背景图片距离任 意角的偏移量，只要我们在偏移量前面指定关键字。举例来说，如果想让背 景图片跟右边缘保持 20px 的偏移量，同时跟底边保持 10px 的偏移量，可以 这样做(结果如图 2-11 所示):

## css代码演示
```css
{
  background: url(code-pirate.svg) no-repeat #58a;
  background-position: right 20px bottom 10px;
}
```
[在线demo](play.csssecrets.io/extended-bg-position)

## background-origin 方案

在网页开发生涯中，你很可能多次写过类似 background-position: top left; 这样的代码。你是否曾经有过疑惑:这个 top left 到底是哪 个左上角?你可能知道，每个元素身上都存在三个矩形框(参见图 2-14): border box(边框的外沿框)、padding box(内边距的外沿框)和 content box
(内容区的外沿框)。那 background-position 这个属性指定的到底是哪个 矩形框的左上角?
默认情况下，background-position 是以 padding box 为准的，这样边 框才不会遮住背景图片。因此，top left 默认指的是 padding box 的左上 角。不过，在背景与边框(第三版)(http://w3.org/TR/css3-background)中， 我们得到了一个新的属性 background-origin，可以用它来改变这种行为。 在默认情况下，它的值是(闭着眼睛也猜得到)padding-box。如果把它的 值改成 content-box(参见下面的代码)，我们在 background-position 属 性中使用的边角关键字将会以内容区的边缘作为基准(也就是说，此时背景 图片距离边角的偏移量就跟内边距保持一致了):

## css代码演示
```css
{
  padding: 10px;
  background: url("code-pirate.svg") no-repeat #58a bottom right;
  background-origin: content-box;
}
```
[在线demo](play.csssecrets.io/background-origin)

## calc() 方案

让我们回顾一下本节开头的挑战:把背景图片定位到距离底边 10px 且 距离右边 20px 的位置。如果我们仍然以左上角偏移的思路来考虑，其实 就是希望它有一个 100% - 20px 的水平偏移量，以及 100% - 10px 的垂直 偏移量。谢天谢地，calc() 函数允许我们执行此类运算，它可以完美地在 background-position 属性中使用:


## css代码演示
```css
{
  background: url("code-pirate.svg") no-repeat;
  background-position: calc(100% - 20px) calc(100% - 10px);
}
```

[在线demo](play.csssecrets.io/background-position-calc)

