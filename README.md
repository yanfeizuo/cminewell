# cminewell

# 环境搭建

## 安装nodejs 

### 下载地址  http://nodejs.cn/download/

## 安装@vue/cli

### 打开windows命令行 win + R -> 输入cmd -> enter(回车)
### 在命令行中输入 npm install @vue/cli -g -> enter

## 安装项目编辑软件vscode

### 下载地址 https://code.visualstudio.com/

## 安装项目依赖

### 使用 vscode 打开项目 cminewell -> 打开 Terminal

### 通过 命令 npm install 安装项目依赖文件

## 运行项目

### 命令 npm run serve

## 编译项目

### 命令 npm run build

## 项目结构

- node_modules: 项目依赖包所在目录
- src：项目源文件
  - assets：存放图片资源目录
    - images： 项目中的图片
      - home：首页模块
        - banners：横幅展示图片
        - lastestProds：最近产品图片
      - brands：品牌模块
        - banners
        - brands：品牌图片（六边形）
      - product：产品模块
        - banners
        - blackHead：黑头仪图片
        - cleanser：清洁仪图片
        - eye：美眼仪图片
        - skin：嫩肤仪图片
        - ultrasonic：超声波图片
      - news：公司动态
        - banners
        - newsImages：公司动态模块所需图片
      - about：关于我们
        - banners
      - join：加入我们
        - banners
        - location：地图图片
  - config：项目中模块所需数据来源
    - home.js

    - brands.js

    - products.js

    - news.js

    - about.js

    - join.js
  - views
    - home
      - index.vue：home模块文件
      - rectangles.vue：banner图片上的小长方形组件
      - sliderItem.vue：banner图片组件
    - brands
      - index.vue
    - products
      - index.vue
      - navLiItem.vue：产品菜单组件
      - product.vue：产品模块
    - news
      - index.vue
      - paragraph.vue：段落组件
      - detail.vue：详情组件
    - about
      - index.vue
    - join
      -index.vue