import React from 'react';
import { Table } from '../../../common/components/web';

const ProductTable = ({ dataSource, columns, ...props }) => {
  return <Table {...props} striped={false} dataSource={dataSource} columns={columns} />;
};

export default ProductTable;
