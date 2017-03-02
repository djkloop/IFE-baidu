### 三列布局

方法1：
float法：
左右分别是float:left,float:right,中间width：auto
注意点：三者排列顺序为左，右，中
方法2：
absolute法：
```css
.left:{
    position:absolute;
    left:0;
    top:0
}
.right{
    position:absolute;
    right:0;
    top:0;
}
.center{
    float:left;
    margin-left:left-length;
    margin-right:right-length;
}
```
