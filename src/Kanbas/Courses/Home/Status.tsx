import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdHomeFilled } from "react-icons/md";
import { LiaStreamSolid } from "react-icons/lia";
import { MdOutlineAnnouncement } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdHomeFilled className="me-2 fs-5" /> Choose Home Page </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaStreamSolid className="me-2 fs-5"/> View Course Stream </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdOutlineAnnouncement className="me-2 fs-5"/>New announcement</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoAnalyticsSharp className="me-2 fs-5"/>New analytics</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoIosNotifications className="me-2 fs-5"/>View Course Notifications</button>
      




      

        
        {/* <button >Import from Commons</button><br></br> */}
        {/* <button >Choose Home Page</button><br /> */}
        {/* <button >View Course Stream</button><br /> */}
        {/* <button >New announcement</button><br /> */}
        {/* <button >New analytics</button><br /> */}
        {/* <button >View Course Notifications</button><br /> */}
    </div>
);}
