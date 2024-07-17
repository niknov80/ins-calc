import { injectStores } from '@mobx-devtools/tools';
import AppStore from "./app-store";

const appStore = new AppStore();

injectStores({appStore});

export {appStore};
