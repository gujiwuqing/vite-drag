import "antd/dist/reset.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "md-editor-rt/lib/style.css";
import zhCN from 'antd/locale/zh_CN';
import {ConfigProvider} from 'antd';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
