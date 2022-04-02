import rules from "./rules";

class Validator {
  constructor() {
    this.cache = [];
  }
  /*  value获取： input的value，
    dom ：input自身对象，
    key：验证规则所对应的key值，
    incident：事件，

 */
  add({ value, dom, key, incident } = obj) {
    this.cache.push(() => {
        if (incident) {
            dom.addEventListener(incident,)
        }
      return rules(dom, rule);
    });
  }
}
