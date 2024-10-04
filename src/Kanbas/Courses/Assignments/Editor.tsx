export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container mt-4">
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="wd-description">Description</label>
            <textarea id="wd-description" className="form-control">
              The assignment is available online. Submit a link to the landing page of
              your Web application running on Netlify. The landing page should include 
              the following: Your full name and section, links to each of the lab assignments,
              link to the Kanbas application, and links to all relevant source code repositories.
              The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-points">Points</label>
            <input id="wd-points" type="number" className="form-control" value={100} />
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-group">Assignment Group</label>
            <select id="wd-group" className="form-control">
              <option>ASSIGNMENTS</option>
            </select>
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
            <select id="wd-display-grade-as" className="form-control">
              <option>Percentage</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-submission-type">Submission Type</label>
            <select id="wd-submission-type" className="form-control">
              <option>Online</option>
            </select>
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col">
            <label>Online Entry Options</label><br />
            <input id="wd-text-entry" type="checkbox" /> <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input id="wd-website-url" type="checkbox" /> <label htmlFor="wd-website-url">Website URL</label><br />
            <input id="wd-media-recordings" type="checkbox" /> <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input id="wd-student-annotation" type="checkbox" /> <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input id="wd-file-upload" type="checkbox" /> <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-assign-to">Assign to</label>
            <input id="wd-assign-to" className="form-control" value="Everyone" />
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-due-date">Due</label>
            <input id="wd-due-date" type="date" className="form-control" value="2024-05-13" />
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-available-from">Available from</label>
            <input id="wd-available-from" type="date" className="form-control" value="2024-05-06" />
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-available-until">Until</label>
            <input id="wd-available-until" type="date" className="form-control" value="2024-05-20" />
          </div>
        </div>
  
        <div className="row">
          <div className="col text-right">
            <button className="btn btn-secondary me-2">Cancel</button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    );
  }
  