import React from 'react';
import { FaPlus, FaCheckCircle, FaGripVertical, FaFileAlt } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4 p-3 border rounded">
      {/* Header and Search */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="m-0">ASSIGNMENTS</h4>
        <div className="text-muted">40% of Total</div>
        <button className="btn btn-outline-secondary ms-auto">
          <FaPlus /> Add Assignment
        </button>
      </div>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-group">
        {/* Assignment Item */}
        {['A1', 'A2', 'A3'].map((assignment, index) => (
          <li key={index} className="wd-assignment-list-item list-group-item border-0 d-flex justify-content-between align-items-center p-3 mb-2" style={{ borderLeft: '5px solid green', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
            <div className="d-flex align-items-center">
              {/* Vertical Dots Icon */}
              <FaGripVertical className="me-3 text-secondary" size={16} />
              
              {/* Document Icon */}
              <FaFileAlt className="me-3 text-success" size={24} />
              
              <div>
                <a className="wd-assignment-link text-decoration-none fw-bold" href="#/Kanbas/Courses/1234/Assignments/123">
                  {assignment}
                </a>
                <div className="text-muted">
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3" size={20} />
              <BsThreeDots size={20} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
