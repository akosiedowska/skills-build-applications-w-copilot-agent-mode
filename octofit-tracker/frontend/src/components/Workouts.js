import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/workouts/`
    : window.location.hostname.includes('github.dev')
      ? `https://${window.location.hostname.replace('-3000', '-8000')}/api/workouts/`
      : 'http://localhost:8000/api/workouts/';

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API endpoint:', baseUrl);
        console.log('Fetched workouts:', data);
        setWorkouts(data.results || data);
      })
      .catch(err => {
        console.error('Failed to fetch workouts:', err);
      });
  }, [baseUrl]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Workouts</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Suggested For</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, idx) => (
                <tr key={workout.id || idx}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                  <td>{workout.suggested_for ? workout.suggested_for.map(u => u.name || u).join(', ') : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
