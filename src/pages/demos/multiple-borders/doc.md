
# 多重边框
## background-clip 使用

## 解决方案
目前为止，我们大多数人可能已经用过(或滥用过)box-shadow 来生 成投影。不太为人所知的是，它还接受第四个参数(称作“扩张半径”)，通 过指定正值或负值，可以让投影面积加大或者减小。一个正值的扩张半径加 上两个为零的偏移量以及为零的模糊值，得到的“投影”其实就像一道实线 边框

## css代码演示
```css
{
  background: yellowgreen;
  box-shadow: 0 0 0 10px #655,
            0 0 0 15px deeppink,
            0 2px 5px 15px rgba(0,0,0,.6);
}
```
[在线demo](play.csssecrets.io/multiple-borders)

## background-clip 使用

在某些情况下，你可能只需要两层边框，那就可以先设置一层常规边 框，再加上 outline(描边)属性来产生外层的边框。这种方法的一大优 点在于边框样式十分灵活，不像上面的 box-shadow 方案只能模拟实线边框
(假设我们需要产生虚线边框效果，box-shadow 就没辙了)。描边的另一个好处在于，你可以通过 outline-offset 属性来控制它跟 元素边缘之间的间距，这个属性甚至可以接受负值。这对于某些效果来说非 常有用。举个例子，图 2-8 就实现了简单的缝边效果(`对一层 dashed(虚线)描边使用负的 outline-offset 后，可以得到简单的缝边效果`)

## css代码演示
```css
{
  background: yellowgreen;
  border: 10px solid #655;
  outline: 5px solid deeppink;
}
```




