/**
 * Created by apple on 16/12/14.
 */
var audios = document.querySelectorAll('audio');
var divs   = document.querySelectorAll('div');
var code   = 0;
//console.log(div);
//console.log(audio);
//林志协的方法
// for(code=0;code<audios.length;code++){
//     audios[code].index = code;
//
// }
//在整个屏幕中检查是否又键盘按下的情况发生
window.onkeydown =function(event){
    console.log(event);
    //这边event会带着键盘按钮的输入值过来从0-9的携带值分别是48-57
    if(code != event.keyCode){
        code = event.keyCode;
        //判断是不是1-9的按钮
        if (code>=49&&code<=57){
            //divs[code-49]是为了通过对应的索引值找到节点列表中的相对应的那个键
            divs[code-49].classList.add("animate");
            playSound(code-49);
        }
    }
}
function playSound(index){
    //千万注意这边的audios[index];是一个索引列表并不是单纯的一个播放器,
    // 而我们药将音频加载然后播放,
    // 就只能拿出她里面的单个音频元素来进行播放
    var audio = audios[index];
    audio.load();
    audio.play();
}
//当键盘弹起来的时候,触发方法将全局变量code从新设为0,
// 而且divs节点列表中的样式移除,防止出现偶尔因为
// 其他样式正在展示造成本次点击的样式被覆盖无法展示的情况
//在最大可能性下提升用户体验
window.onkeyup =function(event){
    code = 0;
    // 把所有div的className移除
    for(var i = 0;i < divs.length;i ++){
        divs[i].classList.remove("animate");
    }
}

