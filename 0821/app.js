var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        message2: 'Hi Vue.js!',
        uid: '10',
        uid: '20',
        flag: true
    },
    methods: {
        clickBtn() {
            console.log("hi");
            if(this.flag == true)
            {
                this.flag=false;
            }else{
                this.flag=true;
            }
        }


    }
});