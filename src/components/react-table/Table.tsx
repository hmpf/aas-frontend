import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import './table.css';
import 'react-table/react-table.css'
import axios from 'axios';

const Table: React.FC = () => {
  const [alerts, setAlerts] = useState<Object[]>([]);

  useEffect(() => {
    getAlert();
  }, []);

  //fetches alerts and sets state
  const getAlert = async () => {
    await axios({
      url: 'http://localhost:8000/alerts/',
      method: 'GET',
      headers: {
        Authorization: 'Token ' + localStorage.getItem('token')
      }
    }).then((response: any) => {
      setAlerts(response.data);
    });
  };

  const columns: any = [
    {
      Header: 'Timestamp',
      accessor: 'timestamp'
    },
    {
      Header: 'Alert ID',
      accessor: 'alert_id'
    },
    { Header: 'Source', accessor: 'source' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Details URL', accessor: 'details_url' },
    { Header: 'Object', accessor: 'object' },
    { Header: 'Parent object', accessor: 'parent_object' },
    { Header: 'Problem type', accessor: 'problem_type' }
  ];

  return (
    <ReactTable
      columns={columns}
      data={alerts}
      pageSize={alerts.length}
      showPaginationBottom={false}></ReactTable>
  );
};

export default Table;
