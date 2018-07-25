##display##

>1.display:inline;//将块级元素转化为行级元素，这时块级元素设置的宽高无效 
>2.display:block;//将行级元素转块级元素，这时原本的行级元素会变成块级元素独占一行，同时可以设置宽高 
>3.display:inline-block;//将行级元素转块级元素，不会独占一行，可以设置宽高

>行内元素：a、abbr、acronym、b、big、br、cite、code、dfn、em、font、i、img、input、kbd、label、q、samp、select、small、span、s、del、strike、strong、sub、sup、textarea、tt、u、var等


>块级元素：address、blockquote、center、dir、div、dl、ul、ol、li、fieldset、form、form、*hn、hr、menu、noframes、frames、noscript、p、 pre、table等

    兼容性：display:inline-block;*display:inline;*zoom:1;
    行内元素：会在水平方向排列，不能包含块级元素，设置width、height无效(可以设置line-height)，margin、padding上下无效。
    块级元素：各占据一行，垂直方向排列，可以包含行内元素。
    块级元素的 width 默认为 100%（宽度自动填满其父元素宽度），而内联元素则是根据其自身的内容或子元素来决定其宽度。