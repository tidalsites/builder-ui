import { FC } from "react";
import "./ProjectCreation.css";
import { FormGroup } from "../FormGroup/FormGroup";

export const ProjectCreation: FC = () => {
  return (
    <div className="ProjectCreation">
      <div className="ProjectCreation__wrapper">
        <form action="">
          <p className="ProjectCreation__section-header">Project Information</p>
          <FormGroup
            identifier="project_name"
            inputType="text"
            label="Project Name"
          />
          <p className="ProjectCreation__section-header">
            Organization Information
          </p>
          <div className="ProjectCreation__org">
            <label htmlFor="project_org">Organization</label>
            <select name="org" id="project_org">
              <option value="org1">Org 1</option>
              <option value="org2">Org 2</option>
            </select>
            <button>+ New Organization</button>
          </div>
          <p className="ProjectCreation__section-header">
            Point Of Contact Information
          </p>
          <div className="ProjectCreation__poc">
            <label htmlFor="project_org">Point Of Contact</label>
            <select name="poc" id="project_poc">
              <option value="poc1">Person 1</option>
              <option value="poc2">Person 2</option>
            </select>
            <button>+ Add Point of Contact</button>
          </div>
          {/* <FormGroup identifier="client_first_name" label="First Name" />
          <FormGroup identifier="client_last_name" label="Last Name" />
          <FormGroup identifier="client_email" label="Email" /> */}

          <p className="ProjectCreation__section-header">Services</p>
          <FormGroup
            identifier="branding"
            inputType="checkbox"
            label="Branding"
          />
          <FormGroup
            identifier="website"
            inputType="checkbox"
            label="Website"
          />
          <FormGroup
            identifier="hosting"
            inputType="checkbox"
            label="Hosting"
          />
          <FormGroup
            identifier="email"
            inputType="checkbox"
            label="Email Services"
          />
          <FormGroup
            identifier="authentication"
            inputType="checkbox"
            label="Login Services"
          />
          <p className="ProjectCreation__section-header">Code Base</p>
          <FormGroup
            identifier="default"
            inputType="checkbox"
            label="Use Default"
          />
          <div className="ProjectCreation__github">
            <label htmlFor="project_github">Github Account</label>
            <select name="github" id="project_github">
              <option value="github1">Github 1</option>
              <option value="github2">Github 2</option>
            </select>
            <button>+ Add Githhub</button>
          </div>
          <div className="ProjectCreation__template">
            <label htmlFor="project_template">Template</label>
            <select name="template" id="project_template">
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
            </select>
          </div>
          <button type="submit">Create Project</button>
        </form>
      </div>
    </div>
  );
};
