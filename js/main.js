console.log("here");

var vm = new Vue({
    el : "#app",
    data: {
        title: "Nguyen Van A",
        url: "http://google.com"
    },
    methods: {
        say: function (text) {
            return 'hello ' + text;
        }
    }
})

console.log(vm);

setTimeout(() => {
    vm.title = "Tran Thi B";
}, 3000)


var vmCounter = new Vue({
    el : "#counter",
    data: {
        counter: 0,
    },
    methods: {
        handleClick: function (event, number) {
            return this.counter += number;
        }
    }
})

var vmDemoForm = new Vue({
    el : "#demo-form",
    data: {
        demo_form: '',
    },
    methods: {
        submitForm: function () {
            console.log(this.demo_form);
            return false;
        }
    }
})

var varDemoComputed = new Vue({
    el : "#demo-computed",
    data: {
        a: 10,
        b: 20,
    },
    methods: {
        plusA: function () {
            console.log('plus a running');
            return this.a;
        },
        plusB: function () {
            console.log('plus b running');
            return this.b;
        }
    },
    computed: {
        plusA: function () {
            console.log('plus a running');
            return this.a;
        },
        plusB: function () {
            console.log('plus b running');
            return this.b;
        }
    }
})