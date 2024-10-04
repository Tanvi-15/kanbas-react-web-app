import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { CgWebsite } from "react-icons/cg";
 


export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }} className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a
        className="border-0 text-center bg-black text-white list-group-item"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
      >
        <img
          src="data:image/png;base64,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"
          width={100}
          height={100}
          style={{ zIndex: 1 }}
        />
      </a>

      <Link to="/Kanbas/Account" id="wd-account-link" className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account
      </Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className="list-group-item text-center border-0
                   bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard
      </Link>

      <Link to="/Kanbas/Courses/1234/Home" id="wd-course-link" className="list-group-item text-white
                   bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses
      </Link>

      <Link to="/Kanbas/Calendar" id="wd-calendar-link" className="list-group-item text-white
                   bg-black text-center border-0">
        <SlCalender className="fs-1 text-danger" /><br />
        Calendar
      </Link>
      
      <Link to="/Kanbas/Inbox" id="wd-inbox-link" className="list-group-item text-white
                   bg-black text-center border-0">
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox
      </Link>
      <Link to="/Labs" id="wd-labs-link" className="list-group-item text-white
                   bg-black text-center border-0">
        <CgWebsite className="fs-1 text-danger" /><br />
        Labs
      </Link>
    </div>
  );
}
