import {makeAutoObservable} from "mobx";

class DsStore {
  dsArticle = '';
  dsPrice = '';
  dsName = '';
  defaultDsOS = '';
  defaultDsMod = '';
  defaultDsReader = '';
  selectedDs = '';
  selectedDsOs = '';
  selectedDsMod = '';
  selectedDsReader = '';
  isWindows = false;

  constructor() {
    makeAutoObservable(this);
  }

  setDsPrice(price) {
    this.dsPrice = price
  }

  setDsArticle(article) {
    this.dsArticle = article;
  }

  setDsName(name) {
    this.dsName = name;
  }

  setIsWindows(value) {
    this.isWindows = value;
  }

  setSelectedDs(id) {
    this.selectedDs = id;
  }

  setSelectedDsOs(id) {
    this.setIsWindows(id.id.includes('win'));
    this.selectedDsOs = id;
  }

  setSelectedDsMod(id) {
    this.selectedDsMod = id;
  }

  setSelectedDsReader(id) {
    this.selectedDsReader = id;
  }

  setDefaultDsOs(id) {
    this.defaultDsOS = id;
  }

  setDefaultDsMod(id) {
    this.defaultDsMod = id;
  }

  setDefaultDsReader(id) {
    this.defaultDsReader = id;
  }

  get getSelectedDsId() {
    return this.selectedDs.id;
  }

  get getSelectedDsOsId() {
    return this.selectedDsOs.id;
  }

  get getSelectedDsModId() {
    return this.selectedDsMod.id;
  }

  get getSelectedDsReaderId() {
    return this.selectedDsReader.id;
  }

  get getDsName() {
    return this.dsName;
  }

  get getDsArticle() {
    return this.dsArticle;
  }

  get getDsPrice() {
    return this.dsPrice;
  }

  get getIsWindows() {
    return this.isWindows;
  }


  calcDsName() {
    let name = '';
    const dsName = this.selectedDs.name;
    const osName = this.selectedDsOs.name;
    const modName = this.selectedDsMod.name;
    const readerName = this.selectedDsReader.name;
    name = `${dsName} ${modName || ''} c операционной системой: ${osName || ''}, ${readerName || ''}`;
    this.setDsName(name);
  }

  calcDsArticle() {
    let article = '';
    const dsArticle = this.selectedDs.article;
    const osArticle = this.selectedDsOs.article;
    const modArticle = this.selectedDsMod.article;
    const readerArticle = this.selectedDsReader.article;
    article = `${dsArticle}(ОС_${osArticle}${modArticle ? '/И_' + modArticle : ''}${readerArticle ? '/М_' + readerArticle : ''})`;
    this.setDsArticle(article);
  }

  calcDsPrice() {
    let price = '';
    const dsPrice = this.selectedDs.price;
    const osPrice = this.selectedDsOs.price;
    const modPrice = this.selectedDsMod.price;
    const readerPrice = this.selectedDsReader.price;
    price = dsPrice + osPrice + modPrice + readerPrice;
    this.setDsPrice(price);
  }

  calcDsAttributes() {
    this.calcDsName();
    this.calcDsArticle();
    this.calcDsPrice();
  }
}

export default DsStore;
