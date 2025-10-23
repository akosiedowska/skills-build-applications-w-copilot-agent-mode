import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/activities/`
    : window.location.hostname.includes('github.dev')
      ? `https://${window.location.hostname.replace('-3000', '-8000')}/api/activities/`
      : 'http://localhost:8000/api/activities/';

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API endpoint:', baseUrl);
        console.log('Fetched activities:', data);
        setActivities(data.results || data);
      })
      .catch(err => {
        console.error('Failed to fetch activities:', err);
      });
  }, [baseUrl]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Activities</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Type</th>
                <th>Duration (min)</th>
                <th>User</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, idx) => (
                <tr key={activity.id || idx}>
                  <td>{activity.type}</td>
                  <td>{activity.duration}</td>
                  <td>{activity.user?.name || activity.user || '-'}</td>
                  <td>{activity.timestamp ? new Date(activity.timestamp).toLocaleString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Activities;
