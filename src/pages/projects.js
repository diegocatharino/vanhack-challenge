import fetch from 'isomorphic-unfetch';
import css from "../static/css/style.scss";
import Header from '../components/organisms/header';
import Projects from '../components/organisms/suggestedprojects-all';
export default function Index() {
  return (
    <div>
      <Header />
      <Projects />
    </div>
  );
}