import fetch from 'isomorphic-unfetch';
import css from "../static/css/style.scss";
import Header from '../components/organisms/header';
import ActivityAll from '../components/organisms/activity-all';
import TopEarnersAll from '../components/organisms/topearners-all';
export default function Index() {
  return (
    <div>
      <Header />
      <ActivityAll />
      <TopEarnersAll />
    </div>
  );
}