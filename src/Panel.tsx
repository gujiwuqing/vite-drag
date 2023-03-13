import React from 'react';
import {Row,Col} from 'antd';
import Svg from './components/Svg'

const Panel = () => {
  const list = [
    {
      title: '输入框',
      type: 'input',
      icon: 'iconwenben'
    },
    {
      title: '单选框',
      type: 'radio',
      icon: 'iconradio-checked'
    },
    {
      title: '复选框',
      type: 'checkbox',
      icon: 'icondanxuankuang'
    },
  ];

  const handleAddItem =(type:string)=>{

  }
  return (
    <div className="panel">
      <h1>组件</h1>
      <Row>
        {
          list.map(item=>{
            return (
              <Col span={12} key={item.type} className='panel-item' onClick={()=>{
                handleAddItem(item.type)
              }}>
                <div>{item.title}</div>
               <Svg type={item.icon} style={{fontSize:18}}/>
              </Col>
            )
          })
        }
      </Row>
    </div>
  );
};

export default Panel;
