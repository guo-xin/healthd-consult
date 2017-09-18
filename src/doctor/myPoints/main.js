import Vue from 'vue';
import App from './App.vue';
import util from '../../common/util';

util.initApp({
    role: 'doctor'
}, function () {
    new Vue({ //eslint-disable-line no-new
        el: '#app',
        created: function () {
            util.setTitle('我的积分');
        },
        render: h => h(App)
    });
});
