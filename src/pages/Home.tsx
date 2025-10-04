import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>🏠 Home Page</h2>
      <p>React Router v6 예제입니다.</p>
      <ul>
        <li>
          <Link to="/users/1">User 1 상세보기</Link>
        </li>
        <li>
          <Link to="/users/2">User 2 상세보기</Link>
        </li>
        <li>
          <Link to="/users/3">User 3 상세보기</Link>
        </li>
        <li>
          <Link to="/about">About 페이지로 이동</Link>
        </li>
      </ul>
    </div>
  );
}
