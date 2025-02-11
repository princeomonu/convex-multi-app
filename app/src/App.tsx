import { useQuery, useMutation } from "convex/react";
import { api } from "../../api/convex/_generated/api";
import { useState } from "react";

function App() {
  const tasks = useQuery(api.tasks.get);
  const addTask = useMutation(api.tasks.add);
  const toggleTask = useMutation(api.tasks.toggle);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    await addTask({ text: newTask.trim() });
    setNewTask("");
  };

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '600px', 
      margin: '0 auto',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        color: '#1e293b', 
        fontSize: '2rem',
        marginBottom: '2rem',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '0.5rem'
      }}>Task List</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s ease',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            Add
          </button>
        </div>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {tasks?.map(({ _id, text, isCompleted }) => (
          <div 
            key={_id}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onClick={() => toggleTask({ id: _id })}
          >
            <input 
              type="checkbox" 
              checked={isCompleted} 
              readOnly 
              id={_id}
              aria-label={`Task: ${text}`}
              style={{
                width: '1.2rem',
                height: '1.2rem',
                accentColor: '#3b82f6'
              }}
            />
            <label 
              htmlFor={_id}
              style={{
                color: isCompleted ? '#94a3b8' : '#334155',
                textDecoration: isCompleted ? 'line-through' : 'none',
                fontSize: '1rem',
                fontWeight: 500
              }}
            >
              {text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
