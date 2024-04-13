import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import NotFoundPage from "../pages/error/NotFoundPage";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import MyPageQuestion from "../pages/myPage/MyPageQuestion";
import MyPageReview from "../pages/myPage/MyPageReview";
import SearchId from "../pages/searchId/SearchId";
import SearchPw from "../pages/searchPw/SearchPw";
import Identification from "../pages/Identification/Identification";
import LotteworldAttraction from "../pages/attractions/LotteworldAttraction";
import EverlandAttraction from "../pages/attractions/EverlandAttraction";
import SeoullandAtrraction from "../pages/attractions/SeoullandAtrraction";
import LotteworldAttractionExplain from "../pages/attractions/LotteworldAttractionExplain";
import EverlandAttractionExplain from "../pages/attractions/EverlandAttractionExplain";
import SeoullandAttractionExplain from "../pages/attractions/SeoullandAttracionExplain";
import Performance from "../pages/performance/Performance";
import ChangePw from "../pages/changePw/ChangePw";
import CourseLotteworld from "../pages/course/CourseLotteworld";
import CourseEverland from "../pages/course/CourseEverland";
import CourseSeoulland from "../pages/course/CourseSeoulland";
import BasicCostEverland from "../pages/basicCost/BasicCostEverland";
import BasicCostLotteworld from "../pages/basicCost/BasicCostLotteworld";
import BasicCostSeoulland from "../pages/basicCost/BasicCostSeoulland";
import BenefitEverland from "../pages/benefit/BenefitEverland";
import BenefitSeoulland from "../pages/benefit/BenefitSeoulland";
import BenefitLotteworld from "../pages/benefit/BenefitLotteworld";
import BenefitExplain from "../pages/benefitexplain/BenefitExplain";
import Pay from "../pages/pay/Pay";
import YearCostExplainEverland from "../pages/yearcost/YearCostExplainEverland";
import YearCostExplainLotteworld from "../pages/yearcost/YearCostExplainLotteworld";
import YearCostExplainSeoulland from "../pages/yearcost/YearCostExplainSeoulland";
import YearCostBenefitEverland from "../pages/yearcost/YearCostBenefitEverland";
import YearCostBenefitLotteworld from "../pages/yearcost/YearCostBenefitLotteworld";
import YearCostBenefitSeoulland from "../pages/yearcost/YearCostBenefitSeoulland";
import YearcostBenefitExplain from "../pages/yearcostBenefitExplain/YearcostBenefitExplain";
import FnbEverland from "../pages/fnb/FnbEverland";
import FnbLotteworld from "../pages/fnb/FnbLotteworld";
import FnbSeoulland from "../pages/fnb/FnbSeoulland";
import FnbExplain from "../pages/fnbExplain/FnbExplain";
import GiftshopEverland from "../pages/giftshop/GiftshopEverland";
import GiftshopLotteworld from "../pages/giftshop/GiftshopLotteworld";
import GiftshopSeoulland from "../pages/giftshop/GiftshopSeoulland";
import GiftshopExplain from "../pages/giftshopExplain/GiftshopExplain";
import GuidemapEverland from "../pages/guide/GuidemapEverland";
import GuidemapLotteworld from "../pages/guide/GuidemapLotteworld";
import GuidemapSeoulland from "../pages/guide/GuidemapSeoulland";
import LayoutMain from "../pages/layout/LayoutMain";
import EventEverland from "../pages/event/EventEverland";
import EventLotteworld from "../pages/event/EventLotteworld";
import EventSeoulland from "../pages/event/EventSeoulland";
import EventExplain from "../pages/eventExplain/EventExplain";
import QnaRegister from "../pages/qnaRegister/QnaRegister";
import QnaList from "../pages/qnaList/QnaList";
import QnaExplain from "../pages/qnaExplain/QnaExplain";
import FaqList from "../pages/faqExplain/FaqExplain";
import FaqExplain from "../pages/faqExplain/FaqExplain";
import LostnFoundListEverland from "../pages/lostnfoundList/LostnFoundListEverland";
import LostnFoundListLotteworld from "../pages/lostnfoundList/LostnFoundListLotteworld";
import LostnFoundListSeoulland from "../pages/lostnfoundList/LostnFoundListSeoulland";
import LostnFoundRegisterEverland from "../pages/lostnfoundRegister/LostnFoundRegisterEverland";
import LostnFoundRegisterLotteworld from "../pages/lostnfoundRegister/LostnFoundRegisterLotteworld";
import LostnFoundRegisterSeoulland from "../pages/lostnfoundRegister/LostnFoundRegisterSeoulland";
import LostnFoundExplain from "../pages/lostnfoundExplain/LostnFoundExplain";
import LostnFoundSearch from "../pages/lostnfoundSearch/LostnFoundSearch";
import SignupFinish from "../pages/signupFinish/SignupFinish";

const router = createBrowserRouter([
  {
   path:"/",
    element : <LayoutMain />,
    children :  [{
      path: "/",
      element: <Main />
    }]
  }
  ,{
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/signUp",
        element:<SignUp />
      },
      {
        path : "/signUpFinish",
        element:<SignupFinish/>
      },
      {
        path : "/signIn",
        element : <SignIn/>
      },
      {
        path : "/myPage",
        element : <MyPageQuestion />
      },
      {
        path : "/myPage/review",
        element : <MyPageReview />
      },
      {
        path : "/searchId",
        element : <SearchId />
      },
      {
        path : "/searchPw",
        element : <SearchPw />
      },
      {
        path : "/identification",
        element : <Identification />
      },  
      {
        path : "/changepassword",
        element : <ChangePw />
      },
      {
        path:"/attraction/lotteworld",
        element : <LotteworldAttraction/>
      },  
      {
        path:"/attraction/lotteworld/explain",
        element : <LotteworldAttractionExplain />
      },
      {
        path:"/attraction/everland",
        element : <EverlandAttraction />
      },
      {
        path:"/attraction/everland/explain",
        element : <EverlandAttractionExplain />
      },

      {
        path:"/attraction/seoulland",
        element : <SeoullandAtrraction />
      },
      {
        path:"/attraction/seoulland/explain",
        element : <SeoullandAttractionExplain />
      },
      {
        path:"/performance",
        element : <Performance />
      },
      {
        path:"/course/lotteworld",
        element : <CourseLotteworld />
      },
      {
        path:"/course/everland",
        element : <CourseEverland />
      },
      {
        path:"/course/seoulland",
        element : <CourseSeoulland />
      },
      {
        path:"/basiccost/everland",
        element : <BasicCostEverland />
      },
      {
        path:"/basiccost/lotteworld",
        element : <BasicCostLotteworld />
      },
      {
        path:"/basiccost/seoulland",
        element : <BasicCostSeoulland />
      },
      {
        path : "/benefit/everland",
        element : <BenefitEverland />
      },
      {
        path : "/benefit/lotteworld",
        element : <BenefitLotteworld />
      },
      {
        path : "/benefit/seoulland",
        element : <BenefitSeoulland />
      },
      {
        path : "benefit/explain",
        element : <BenefitExplain />
      },
      {
        path : "/pay",
        element : <Pay />
      },
      {
        path : "yearcost/explain/everland",
        element : <YearCostExplainEverland/>
      },  
      {
        path : "yearcost/explain/lotteworld",
        element : <YearCostExplainLotteworld />
      },
      {
        path : "yearcost/explain/seoulland",
        element : <YearCostExplainSeoulland />
      },
      {
        path : "yearcost/benefit/everland",
        element :<YearCostBenefitEverland />
      },
      {
        path : "yearcost/benefit/lotteworld",
        element : <YearCostBenefitLotteworld />
      },
      {
        path : "yearcost/benefit/seoulland",
        element : <YearCostBenefitSeoulland />
      },
      {
        path : "yearcost/benefit/explain",
        element :<YearcostBenefitExplain />
      },
      {
        path : "fnb/everland",
        element :<FnbEverland />
      },
      {
        path : "fnb/lotteworld",
        element :<FnbLotteworld />
      },
      {
        path : "fnb/seoulland",
        element :<FnbSeoulland />
      },
      {
        path : "fnb/explain",
        element : <FnbExplain />
      },
      {
        path : "giftshop/everland",
        element :<GiftshopEverland />
      },
      {
        path : "giftshop/lotteworld",
        element :<GiftshopLotteworld />
      },
      {
        path : "giftshop/seoulland",
        element :<GiftshopSeoulland />
      },
      {
        path : "giftshop/explain",
        element :<GiftshopExplain />
      },
      {
        path :"guidemap/everland",
        element : <GuidemapEverland />
      },
      {
        path : "guidemap/lotteworld",
        element :<GuidemapLotteworld />
      },
      {
        path : "guidemap/seoulland",
        element : <GuidemapSeoulland />
      },
      {
        path : "event/everland",
        element :<EventEverland />
      },
      {
        path : "event/lotteworld",
        element :<EventLotteworld />
      },
      {
        path : "event/seoulland",
        element :<EventSeoulland />
      },
      {
        path : "event/explain",
        element :<EventExplain />
      },
      {
        path:"qna/register",
        element :<QnaRegister />
      },
      {
        path : "qna/list",
        element :<QnaList />
      },
      {
        path:"qna/explain",
        element :<QnaExplain/>
      },
      {
        path :"faq/list",
        element :<FaqList />
      },
      {
        path :"faq/explain",
        element :<FaqExplain />
      },
      {
        path :"lostnfound/list/everland",
        element :<LostnFoundListEverland />
      },
      {
        path :"lostnfound/list/lotteworld",
        element :<LostnFoundListLotteworld />
      },
      {
        path :"lostnfound/list/seoulland",
        element :<LostnFoundListSeoulland />
      },
      {
        path :"lostnfound/register/everland",
        element :<LostnFoundRegisterEverland />
      },
      {
        path :"lostnfound/register/lotteworld",
        element :<LostnFoundRegisterLotteworld />
      },
      {
        path :"lostnfound/register/seoulland",
        element :<LostnFoundRegisterSeoulland />
      },
      {
        path :"lostnfound/explain",
        element :<LostnFoundExplain />
      },
      {
        path :"lostnfound/search",
        element :<LostnFoundSearch />
      }
    ]},

  {
    path: "*",
    element: <NotFoundPage />
  }
]);

export default router;
