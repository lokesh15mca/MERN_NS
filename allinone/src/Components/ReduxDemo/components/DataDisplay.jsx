// DataDisplay.js
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDataFromAction } from '../Action/Action';

const DataDisplay = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getDataFromAction());
  }, [dispatch]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>User Data</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
