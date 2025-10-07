// 路径配置文件 - 自动检测环境并设置正确的路径
const PathConfig = {
  // 检测是否在GitHub Pages上运行
  isGitHubPages: function() {
    return window.location.hostname === 'lvxiuqing.github.io';
  },
  
  // 获取基础路径
  getBasePath: function() {
    return this.isGitHubPages() ? '/bangyang' : '';
  },
  
  // 获取完整的资源路径
  getResourcePath: function(resource) {
    // 如果资源路径已经是绝对路径，则直接返回
    if (resource.startsWith('http') || resource.startsWith('//')) {
      return resource;
    }
    
    // 如果资源路径以/开头，则添加基础路径
    if (resource.startsWith('/')) {
      return this.getBasePath() + resource;
    }
    
    // 否则直接返回资源路径
    return resource;
  },
  
  // 获取Service Worker路径
  getServiceWorkerPath: function() {
    return this.isGitHubPages() ? '/bangyang/sw_github.js' : '/sw.js';
  },
  
  // 获取Manifest路径
  getManifestPath: function() {
    return this.isGitHubPages() ? '/bangyang/manifest_github.json' : '/manifest.json';
  }
};

// 导出配置对象
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PathConfig;
}