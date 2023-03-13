import React, {CSSProperties} from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_2434100_cua9nok6oen.js',
});

interface SvgProps {
  type:string;
  style?:CSSProperties;
}

const Svg= ({type,style}:SvgProps) => (
  <IconFont type={type} style={style}/>
);

export default Svg;
