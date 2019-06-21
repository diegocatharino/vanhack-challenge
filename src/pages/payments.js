import fetch from 'isomorphic-unfetch';
import css from "../static/css/style.scss";
import Header from '../components/organisms/header';
import Slack from '../components/organisms/slack';
import EarningsAll from '../components/organisms/earnings-all';
export default function Index() {
  return (
    <div>
      <Header />
      <EarningsAll />
      <Slack />
    </div>
  );
}