new Vue({
    el:"#app",
    data:{
        num:0,
        ok:true,
        n:"sss",
        b:"aaa"
    },
    computed:{
        yes:function(){
          return this.num+1;
        },
        l:function(){
            return this.n + "和" + this.b;
        }
    }
})