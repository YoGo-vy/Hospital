export default {
  getCookie(name = "language") {
      let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      let arr = document.cookie.match(reg)
      return arr ? unescape(arr[2]) : null;
  },
  setCookie(name, value) {
      let Days = 30;
      let exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  }
}