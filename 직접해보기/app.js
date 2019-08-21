Vue.component('child-component',{
    props: ['propsdata'],
    template: '<p>{{propsdata}}</p>'
});

Vue.component('sibling-component',{
    props: ['good'],
    template: '<p>{{good}}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue ! ',
        secondMessage : 'hello vue vue vue'
    }
});