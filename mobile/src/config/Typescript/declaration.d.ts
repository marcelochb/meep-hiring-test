declare module '*.jpg';
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
declare module '*.png';

declare module '@react-native-community/async-storage';
declare module 'react-native-md5';
