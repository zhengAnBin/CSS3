# 3d旋转相册
#### dome 分析

```
// 分析dome中所使用到的css3属性
// 只介绍我个人认为平时很少见的css样式

NO.1
perspective: number | none
该属性定义3D元素的观看距离 单位为px 当元素设置了perspective属性后，其子元素会获得透视效果
而且 perspective 只影响3D元素

什么是3D元素？

平常，所有的元素都是以2D呈现的
而css3有一个新属性  

NO.2
transform-style: flat | preserve-3d;
该属性定义子元素是放在怎么样的空间里（2D，3D）
设置transform-style: preserve-3d; 
这时候该元素就变成了3D元素了，元素就可以被 perspective 属性影响
注意！ transform-style 使用前，必须先使用 transform 属性才会生效


NO.3
box-reflect: none | <direction> <offset> <mask-box-image>
<direction> = above | below | left | right
<offset> = <length> | <percentage>
<mask-box-image> = none | <url> | <linear-gradient> | <radial-gradient> | <repeating-linear-gradient> | <repeating-radial-gradient>
设置倒影
例如一个人的影子
direction 是设置影子的方向
offset 是设置影子的距离，通常情况下，我们的影子和我们的脚跟是连在一起的，设置该属性就让影子离开我们一段距离 单位为px
mask-box-image 遮罩影子
	url 使用某个图片将影子遮住
    linear-gradient 线性渐变，作用是使 影子离我们越远越模糊 这样比较真实。
    其他的同理
```

### 看源码的方法

负责一份代码，将css样式删了，逐个添加 chrome 中查看效果即可