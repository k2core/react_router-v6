import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { User } from '../types/User';

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // 예시용: 실제로는 fetch로 API 호출 가능
    const fakeUser: User = {
      id: Number(id),
      name: '홍길동',
      email: 'hong@test.com',
    };
    setUser(fakeUser);
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>👤 User Detail</h2>
      <p>ID: {user.id}</p>
      <p>이름: {user.name}</p>
      <p>이메일: {user.email}</p>
    </div>
  );
}
