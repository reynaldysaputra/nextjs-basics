import {useState, useEffect} from 'react';

export default function Dashboard(){
  const [isLoading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData(){
      const response = await fetch('http://localhost:3004/dashboard');
      const data = await response.json();
      setDashboardData(data);
      setLoading(false);      
    }

    fetchDashboardData();
  }, [])

  if(isLoading){
    return <h2>Loading Dashboard...</h2>
  }

  return(
    <>
      <h2>Dashboard</h2>
      <h3>Post - {dashboardData.posts}</h3>
      <h3>Likes - {dashboardData.likes}</h3>
      <h3>Followes - {dashboardData.followers}</h3>
      <h3>Following - {dashboardData.following}</h3>
    </>
  )
}