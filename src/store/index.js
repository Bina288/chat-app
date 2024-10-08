
import { createStore } from 'vuex'
import { chatModule } from './chatModule';
import { messageModule } from './messageModule';
export default createStore({
	modules: { messageModule, chatModule },
});
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

