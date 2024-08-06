import { injectStores } from '@mobx-devtools/tools';
import AppStore from "./app-store";
import DsStore from "./ds-store";

const appStore = new AppStore();
const dsStore = new DsStore();

injectStores({
  appStore,
  dsStore,
});

export {appStore, dsStore};
