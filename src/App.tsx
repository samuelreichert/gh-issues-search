import './App.css';

function App() {
  return (
    <div className="app">

      <div className='search-container'>
        <h3 className='search-title'>GitHub Issues Search</h3>
        <div>
          <input type='search' placeholder='Organization Name...' />
          <span className='input-divider'>/</span>
          <input type='search' placeholder='Repository Name...' />
        </div>
        <div className='btn-container'>
          <button className='btn-search'>Search for Issues</button>
        </div>
      </div>
    </div>
  );
}

export default App;
