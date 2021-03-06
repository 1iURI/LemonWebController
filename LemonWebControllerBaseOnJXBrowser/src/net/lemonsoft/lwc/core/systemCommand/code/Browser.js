/**
 * 浏览器对象
 * @constructor 调用Native创建一个浏览器对象
 */
function Browser() {
    var id = window.browser.create();

    /**
     * 获取浏览器ID
     * @returns {Object} 浏览器的id
     */
    this.getId = function () {
        return id;
    };

    /**
     * 显示这个浏览器
     */
    this.show = function () {
        try {
            window.browser.show(id);
        } catch (e) {
            Log.error("e.message" + e.message);
        }
    };

    /**
     * 隐藏这个浏览器
     */
    this.hide = function () {
        Log.info("run hide");
        window.browser.hide(id);
        Log.info("run hide over");
    };

    /**
     * 关闭这个浏览器
     */
    this.close = function () {
        window.browser.close(id);
    };

    /**
     * 设置浏览器窗口的大小尺寸
     * @param width 浏览器的窗口宽度
     * @param height 浏览器的窗口高度
     */
    this.setSize = function (width, height) {
        window.browser.setSize(id, width, height);
    };

    /**
     * 设置浏览器窗口的位置
     * @param x 新位置的x坐标
     * @param y 新位置的y坐标
     */
    this.setPosition = function (x, y) {
        window.browser.setPosition(id, x, y);
    };

    /**
     * 在浏览器中执行指定的js代码
     * @param jsCode
     */
    this.executeJavaScript = function (jsCode) {
        return window.browser.executeJavaScript(id, jsCode);
    };

    /**
     * 设置当加载成功的回调函数，不一定是通过LoadUrl加载的，有可能是通过A标签跳转的
     * @param url 当时的浏览器URL
     */
    this.setOnLoadSuccess = function (callback) {
        window.browser.setOnLoadSuccess(id, callback);
    };

    /**
     * 设置当加载失败的回调函数，不一定是通过LoadUrl加载的，有可能是通过A标签跳转的
     * @param url 当时的浏览器URL
     */
    this.setOnLoadFailed = function (callback) {
        window.browser.setOnLoadFailed(id, callback);
    };

    /**
     * 设置被关闭时候的回调函数
     */
    this.setOnClose = function (callback) {
        window.browser.setOnClose(id, callback);
    };

    this.operate = new BrowserOperate(this);
    this.dataGet = new BrowserDataGet(this);
}