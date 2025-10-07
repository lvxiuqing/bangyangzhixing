// Google Apps Script 接口配置
// 使用方法：
// 1) 部署好 Apps Script Web 应用，拿到以 /exec 结尾的 URL
// 2) 将 enabled 设为 true，并把 endpoint 填上你的 URL
// 3) 可选：设置一个简单的 apiKey，与服务端校验一致

window.GAS_CONFIG = {
  enabled: false, // 如使用本地 Node 接口，请改为 true
  // 本地方案（默认）：
  endpoint: 'http://localhost:8000/api',
  // 若改用谷歌脚本，把上面替换为你的 /exec 地址
  apiKey: ''
};


