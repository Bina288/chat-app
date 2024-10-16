
import { createStore } from 'vuex'
import { chatModule } from './chatModule';
import { messageModule } from './messageModule';
import { searchModule } from './searchModule';
export default createStore({
	modules: { messageModule, chatModule,  searchModule},
});

