import { Input } from "antd";
import React, { ReactNode } from "react";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

interface BusinessSearchViewProps {
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  placeholder?: string;
  allowClear?: boolean | { clearIcon: ReactNode };
}
const BusinessSearchView: React.FC = ({
  allowClear = false,
  addonAfter = "",
  addonBefore = "",
  placeholder = "请输入",
}: BusinessSearchViewProps) => (
  <Search
    addonAfter={addonAfter}
    addonBefore={addonBefore}
    placeholder={placeholder}
    allowClear={allowClear}
    onSearch={onSearch}
  />
);

export default BusinessSearchView;
