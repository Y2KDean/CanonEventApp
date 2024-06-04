// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import CalendarPage from './components/CalendarPage';
import EventList from './components/EventList';
import './styles.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <SearchBar onSearch={handleSearch} />
          <Routes>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/events" element={<EventList searchQuery={searchQuery} />} />
            {/* Other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
