import { useState } from 'react';
import ModularDashboard from '../components/ModularDashboard';

export default function Home() {
  const [squidTheme, setSquidTheme] = useState(true);
  
  return (
    <div>
      <ModularDashboard squidTheme={squidTheme} />
    </div>
  );
}