import React from 'react';
import { User } from './types';

interface UserCardProps {
  user: User; // [cite: 65]
  isActive?: boolean; // Опциональный проп [cite: 66]
  children: React.ReactNode; // Любой JSX внутри [cite: 66]
}

const UserCard = ({ user, isActive = true, children }: UserCardProps) => {
  return (
    <div style={{ opacity: isActive ? 1 : 0.5, border: '1px solid gray', padding: '10px' }}>
      <h2>{user.name}</h2> {/* [cite: 75] */}
      <p>Email: {user.email}</p> {/* [cite: 76] */}
      <p>Age: {user.age}</p> {/* [cite: 80] */}
      <div>{children}</div> {/* [cite: 77] */}
    </div>
  );
};

export default UserCard;