import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
const NoPage = () => {
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate(-1); 
  };
  return <div className='flex items-center justify-center h-[100vh]' >
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={handleBack} type="primary">Back Home</Button>}
    />
  </div>
};

export default NoPage;