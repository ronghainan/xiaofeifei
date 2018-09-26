new Vue({
    el: "#app"
    , data: {
        num:0
    }
    , methods: {
        asd:function(){
            this.num=this.num+1
        },
        aad:function(){
            this.num=this.num-1
        },
        fun: function () {
            alert(this.num)
        }
    }
})