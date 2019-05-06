import React from 'react';
import PropTypes from 'prop-types';
import { Table as RSTable } from 'reactstrap';

const renderHead = columns => {
  return columns.map(({ title, dataIndex, renderHeader, key }, idx) => {
    return (
      <th key={key + idx} className={`w-${columns.length === 2 ? 100 : 100 / columns.length}`}>
        {renderHeader ? renderHeader(title, dataIndex) : title}
      </th>
    );
  });
};

const renderBody = (columns, dataSource) => {
  return dataSource.map(entry => {
    return <tr key={entry.id}>{renderData(columns, entry)}</tr>;
  });
};

const renderData = (columns, entry) => {
  return columns.map(({ render, key }, idx) => {
    return <td key={key + idx}>{render ? render(entry[key], entry) : entry[key]}</td>;
  });
};

const Table = ({ dataSource, columns, ...props }) => {
  return (
    <RSTable {...props}>
      <thead>
        <tr>{renderHead(columns)}</tr>
      </thead>
      <tbody>{renderBody(columns, dataSource)}</tbody>
    </RSTable>
  );
};

Table.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array
};

export default Table;
