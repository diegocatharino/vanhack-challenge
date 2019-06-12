import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Header from '../src/components/organisms/header/header';

export default function Blog() {
  return (
    <div>
      <Header />
      <h1>My Project</h1>
    </div>
  );
}