import {makeAutoObservable} from "mobx";

class AppStore {
  pakArticle = '';
  pakPrice = '';
  pakName = '';
  defaultOS = '';
  selectedPlatform = '';
  selectedOS = '';
  selectedModules = [];
  selectedSystems = [];
  isWindows = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPakPrice(price) {
    this.pakPrice = price
  }

  setPakArticle(article) {
    this.pakArticle = article;
  }

  setPakName(name) {
    this.pakName = name;
  }

  setIsWindows(value) {
    this.isWindows = value;
  }

  setDefaultOs(osId) {
    this.defaultOS = osId;
  }

  setSelectedPlatform(platformId) {
    this.selectedPlatform = platformId;
  }

  setSelectedOS(osId) {
    this.setIsWindows(osId.id.includes('win'));
    this.selectedOS = osId;
  }

  addModule(modules) {
    this.selectedModules = modules;
  }

  addSystems(systems) {
    this.selectedSystems = systems;
  }

  reset() {
    this.setIsWindows(false);
    this.selectedOS = this.defaultOS;
    this.addModule([]);
    this.addSystems([]);
  }

  get getPlatformId() {
    return this.selectedPlatform.id;
  }

  get getOSId() {
    return this.selectedOS.id;
  }

  get getTypeOsPlatform() {
    return this.selectedPlatform.typeOs;
  }

  get getTypePlatform() {
    return this.selectedPlatform.type;
  }

  get getModulesId() {
    return Object.values(this.selectedModules.map((module) => module.index));
  }

  get getSystemsId() {
    return Object.values(this.selectedSystems.map((system) => system.index));
  }

  get getPakName() {
    return this.pakName;
  }

  get getPakArticle() {
    return this.pakArticle;
  }

  get getPakPrice() {
    return this.pakPrice;
  }

  get getIsWindows() {
    return this.isWindows;
  }

  calcPakPrice() {
    let totalPrice = 0;
    const platformPrice = this.selectedPlatform.price;
    const osPrice = this.selectedOS.price;
    const modulePriceArray = Object.values(this.selectedModules.map((module) => module.price));
    const modulePrice = modulePriceArray.reduce((partialSum, a) => partialSum + a, 0);
    const systemPriceArray = Object.values(this.selectedSystems.map((system) => system.price));
    const systemPrice = systemPriceArray.reduce((partialSum, a) => partialSum + a, 0);
    totalPrice = platformPrice + osPrice + modulePrice + systemPrice;
    this.setPakPrice(totalPrice);
  }

  calcPakArticle() {
    let article = '';
    const platformArticle = this.selectedPlatform.article;
    const osArticle = `ОС_${this.selectedOS.article}`;
    const moduleArticleArray = Object.values(this.selectedModules.map((module) => module.article));
    const moduleArticle = moduleArticleArray.join('_');
    const systemArticleArray = Object.values(this.selectedSystems.map((system) => system.article));
    const systemArticle = systemArticleArray.join('_');
    article = `${platformArticle}(${osArticle}${systemArticle ? '/И' + systemArticle.slice(2) : ''}${moduleArticle ? '/М_' + moduleArticle : ''})`;
    this.setPakArticle(article);
  }

  calcPakName() {
    let name = '';
    const platformName = this.selectedPlatform.name;
    const osName = this.selectedOS.id;
    const moduleNameArray = Object.values(this.selectedModules.map((module) => module.id));
    const moduleName = moduleNameArray.join(', ');
    const systemNameArray = Object.values(this.selectedSystems.map((system) => system.id.toUpperCase()));
    const systemName = systemNameArray.join(', ');
    name = `${platformName}. В составе: ${osName.toUpperCase()}, INS-00${systemName ? systemName.toUpperCase() : ''}${moduleName ? ', ' + moduleName.toUpperCase() : ''}`;
    this.setPakName(name);
  }

  calcPakAttributes() {
    this.calcPakName();
    this.calcPakArticle();
    this.calcPakPrice();
  }
}

export default AppStore;
