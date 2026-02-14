import React, { useState } from 'react';
import { User } from '../task1/types'; // Импорт твоего интерфейса [cite: 138]
import UserCard from '../task1/UserCard';

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 35 },
  { name: "Diana", email: "diana@mail.com", age: 28 },
  { name: "Ethan", email: "ethan@mail.com", age: 22 }
];

const SearchApp = () => {
  // Используем дженерики для типизации стейта [cite: 124, 151]
  const [users] = useState<User[]>(INITIAL_DATA); 
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  // Типизированный обработчик события изменения (ChangeEvent) [cite: 156-157]
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    
    // Фильтрация
    const results = users.filter(user => 
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(results);
  };

  // Типизированный обработчик клика (MouseEvent) [cite: 172]
  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Search users..." 
      />
      <button onClick={handleClear}>Clear</button>

      <div style={{ marginTop: '20px' }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard key={index} user={user}>
              <p>Status: Active</p>
            </UserCard>
          ))
        ) : (
          <p>No results found</p> // Условие из Task 3 [cite: 181]
        )}
      </div>
    </div>
  );
};

export default SearchApp;