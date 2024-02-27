import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { gql, useMutation, useSubscription, useQuery } from '@apollo/client';

const GET_ITEMS = gql`
query MyQuery {
  values {
    col1
    col2
    col3
    id
  }
}`;

const Dashboard = () => {
  const { data, loading, error } = useQuery(GET_ITEMS);
  console.log(data);
  return (
    <div>
      {!data? (<div>No data</div>
      ):(<ul>{data.values.map((todo)=>{
        return(<div>
          <li>{todo.col1},{todo.col2},{todo.col3}</li>
        </div>)
      })}</ul>)}
    </div>
      
  );
};

export default Dashboard;
