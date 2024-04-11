/// <reference types="vite/client" />

//  import để sử dụng svg nếu không sẽ báo lỗi khi import 
// import { ReactComponent as LoginImg } from '../../assets/Illustration.svg';
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}