import fetch from 'isomorphic-unfetch';
import css from "../static/css/style.scss";
import Header from '../components/organisms/header';
import Slack from '../components/organisms/slack';
export default function Index() {
  return (
    <div>
      <Header />
      <Slack />
    </div>
  );
}