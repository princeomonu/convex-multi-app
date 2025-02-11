import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const tasks = useQuery(api.tasks.get);
  
  return (
    <div className="App">
      <h1>Tasks</h1>
      {tasks?.map(({ _id, text, isCompleted }) => (
        <div key={_id} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input 
              type="checkbox" 
              checked={isCompleted} 
              readOnly 
              aria-label={`Task: ${text}`}
            />
            <span>{text}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default App;
