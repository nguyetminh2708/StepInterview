import { Col, Row } from 'antd';
import styled from 'styled-components';

export const StyleFilterOptions = styled(Col)`
  margin-bottom: 20px;
  .heatmap-filter-label {
    margin-right: 20px;
    font-size: large;
    font-weight: bold;
  }
`;

export const StyleForm = styled(Col)`
  margin-bottom: 20px;
  width: 50%;
  min-width: 500px;
  .ant-col.ant-form-item-label {
    width: 120px;
  }
`;
