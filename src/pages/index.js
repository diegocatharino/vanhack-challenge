import fetch from 'isomorphic-unfetch';
import css from "../static/css/style.css";
import Header from '../components/organisms/header';
import Earnings from '../components/organisms/earnings';
import Ranking from '../components/organisms/ranking';
import SuggestedProjects from '../components/organisms/suggestedprojects';
import Activity from '../components/organisms/activity';
import TopEarners from '../components/organisms/topearners';
import Slack from '../components/organisms/slack';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarker, faStar, faBars, faChevronCircleDown, faChevronLeft, faChevronRight, faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarker, faStar, faBars, faChevronCircleDown, faChevronLeft, faChevronRight, faArrowRight, faCode)
export default function Index() {
  return (
    <div>
      <Header />
      <Earnings />
      <Ranking />
      <SuggestedProjects />
      <Slack />
      <Activity />
      <TopEarners />
    </div>
  );
}