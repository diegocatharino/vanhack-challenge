import fetch from 'isomorphic-unfetch';
import Header from '../components/organisms/header/header';
import Earnings from '../components/organisms/earnings/earnings';
import Ranking from '../components/organisms/ranking/ranking';
import SuggestedProjects from '../components/organisms/suggestedprojects';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarker, faStar, faBars, faChevronCircleDown, faChevronLeft, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarker, faStar, faBars, faChevronCircleDown, faChevronLeft, faChevronRight, faArrowRight)
export default function Index() {
  return (
    <div>
      <Header />
      <Earnings /> 
      <Ranking />
      <SuggestedProjects />
    </div>
  );
}