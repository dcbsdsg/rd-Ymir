import { defineConfig } from "vitepress";
import nav from "./nav.mjs";
import sidebar from "./sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/rd-Ymir/",
  title: "Ymir Script description",
  head: [["link", { rel: "icon", href: "/rd-Ymir/game-icon.ico" }]],
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    logo: "/logo.png",

    // 中文配置
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    outline: {
      label: "页面导航",
      level: "deep",
    },

    // 搜索
    search: {
      provider: "local", // 提供者
      options: {
        translations: {
          // 搜索按钮
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          // 模式
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "Copyright © 2019-present Evan You",
    // },

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],

    // lastUpdated: {
    //   text: "更新时间",
    //   formatOptions: {
    //     dateStyle: "full",
    //     // timeStyle: 'medium'
    //   },
    // },
  },
  srcDir: "docs",
  // lastUpdated: true,
});
