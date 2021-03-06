import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  base: '/antd-tree-table-dnd/',
  publicPath: '/antd-tree-table-dnd/',
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'antd-tree-table-dnd',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
