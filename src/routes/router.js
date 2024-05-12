import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout.js";
import Main from "../pages/main/Main.js";
import NotFoundPage from "../pages/error/NotFoundPage.js";
import SignUp from "../pages/signUp/SignUp.js";
import SignIn from "../pages/signIn/SignIn.js";
import MyPageQuestion from "../pages/myPage/MyPageQuestion.js";
import MyPageReview from "../pages/myPage/MyPageReview.js";
import SearchId from "../pages/searchId/SearchId.js";
import SearchPw from "../pages/searchPw/SearchPw.js";
import Identification from "../pages/Identification/Identification.js";
import LotteworldAttraction from "../pages/attractions/LotteworldAttraction.js";
import EverlandAttraction from "../pages/attractions/EverlandAttraction.js";
import SeoullandAtrraction from "../pages/attractions/SeoullandAtrraction.js";
import LotteworldAttractionExplain from "../pages/attractions/LotteworldAttractionExplain.js";
import EverlandAttractionExplain from "../pages/attractions/EverlandAttractionExplain.js";
import SeoullandAttractionExplain from "../pages/attractions/SeoullandAttracionExplain.js";
import Performance from "../pages/performance/Performance.js";
import ChangePw from "../pages/changePw/ChangePw.js";
import CourseLotteworld from "../pages/course/CourseLotteworld.js";
import CourseEverland from "../pages/course/CourseEverland.js";
import CourseSeoulland from "../pages/course/CourseSeoulland.js";
import BasicCostEverland from "../pages/basicCost/BasicCostEverland.js";
import BasicCostLotteworld from "../pages/basicCost/BasicCostLotteworld.js";
import BasicCostSeoulland from "../pages/basicCost/BasicCostSeoulland.js";
import BenefitEverland from "../pages/benefit/BenefitEverland.js";
import BenefitSeoulland from "../pages/benefit/BenefitSeoulland.js";
import BenefitLotteworld from "../pages/benefit/BenefitLotteworld.js";
import BenefitExplain from "../pages/benefitexplain/BenefitExplain.js";
import Pay from "../pages/pay/Pay.js";
import YearCostExplainEverland from "../pages/yearcost/YearCostExplainEverland.js";
import YearCostExplainLotteworld from "../pages/yearcost/YearCostExplainLotteworld.js";
import YearCostExplainSeoulland from "../pages/yearcost/YearCostExplainSeoulland.js";
import YearCostBenefitEverland from "../pages/yearcost/YearCostBenefitEverland.js";
import YearCostBenefitLotteworld from "../pages/yearcost/YearCostBenefitLotteworld.js";
import YearCostBenefitSeoulland from "../pages/yearcost/YearCostBenefitSeoulland.js";
import YearcostBenefitExplain from "../pages/yearcostBenefitExplain/YearcostBenefitExplain.js";
import FnbEverland from "../pages/fnb/FnbEverland.js";
import FnbLotteworld from "../pages/fnb/FnbLotteworld.js";
import FnbSeoulland from "../pages/fnb/FnbSeoulland.js";
import FnbExplain from "../pages/fnbExplain/FnbExplain.js";
import GiftshopEverland from "../pages/giftshop/GiftshopEverland.js";
import GiftshopLotteworld from "../pages/giftshop/GiftshopLotteworld.js";
import GiftshopSeoulland from "../pages/giftshop/GiftshopSeoulland.js";
import GiftshopExplain from "../pages/giftshopExplain/GiftshopExplain.js";
import GuidemapEverland from "../pages/guide/GuidemapEverland.js";
import GuidemapLotteworld from "../pages/guide/GuidemapLotteworld.js";
import GuidemapSeoulland from "../pages/guide/GuidemapSeoulland.js";
import LayoutMain from "../pages/layout/LayoutMain.js";
import EventEverland from "../pages/event/EventEverland.js";
import EventLotteworld from "../pages/event/EventLotteworld.js";
import EventSeoulland from "../pages/event/EventSeoulland.js";
import EventExplain from "../pages/eventExplain/EventExplain.js";
import QnaRegister from "../pages/qnaRegister/QnaRegister.js";
import QnaList from "../pages/qnaList/QnaList.js";
import QnaExplain from "../pages/qnaExplain/QnaExplain.js";
import FaqList from "../pages/faqList/FaqList.js";
import FaqExplain from "../pages/faqExplain/FaqExplain.js";
import LostnFoundListEverland from "../pages/lostnfoundList/LostnFoundListEverland.js";
import LostnFoundListLotteworld from "../pages/lostnfoundList/LostnFoundListLotteworld.js";
import LostnFoundListSeoulland from "../pages/lostnfoundList/LostnFoundListSeoulland.js";
import LostnFoundRegisterEverland from "../pages/lostnfoundRegister/LostnFoundRegisterEverland.js";
import LostnFoundRegisterLotteworld from "../pages/lostnfoundRegister/LostnFoundRegisterLotteworld.js";
import LostnFoundRegisterSeoulland from "../pages/lostnfoundRegister/LostnFoundRegisterSeoulland.js";
import LostnFoundExplain from "../pages/lostnfoundExplain/LostnFoundExplain.js";
import LostnFoundSearch from "../pages/lostnfoundSearch/LostnFoundSearch.js";
import SignupFinish from "../pages/signupFinish/SignupFinish.js";

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
        path : "/changePassword",
        element : <ChangePw />
      },
      {
        path:"/attraction/lotteworld",
        element : <LotteworldAttraction/>
      },  
   
      {
        path:"/attraction/lotteworld/explain/:id",
        element : <LotteworldAttractionExplain />
      },
      {
        path:"/attraction/everland",
        element : <EverlandAttraction />
      },
      {
        path:"/attraction/everland/explain/:id",
        element : <EverlandAttractionExplain />
      },

      {
        path:"/attraction/seoulland",
        element : <SeoullandAtrraction />
      },
      {
        path:"/attraction/seoulland/explain/:id",
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
        path : "event/explain/:id",
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
        path:"qna/explain/:id",
        element :<QnaExplain/>
      },
      {
        path :"faq/list",
        element :<FaqList />
      },
      {
        path :"faq/explain/:id",
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