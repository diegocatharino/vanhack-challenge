import fetch from 'isomorphic-unfetch';
import css from "../static/css/style.scss";
import Header from '../components/organisms/header';
import ActivityAll from '../components/organisms/activity-all';
export default function Index() {
  return (
    <div>
      <Header />
      <ActivityAll />
    </div>
  );
}