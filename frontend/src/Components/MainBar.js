import Epic from '../awesome.png';
import { useState } from 'react';
import React from 'react';
import './MainBar.css';
// import axios from 'axios';
import './MainBar.css';

const MainBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [company, setCompany] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [jobPostings, setJobPostings] = useState([
    {
      company: 'St. Vincent\'s Center',
      company_name: 'Surgeon',
      location: 'Los Angeles',
      salary: '$85,000'
      },
      {
        company: 'Google',
        company_name: 'Software Engineer',
        location: 'Mountain View',
        salary: '$120,000'
        },
        {
        company: 'Amazon',
        company_name: 'Warehouse Worker',
        location: 'Seattle',
        salary: '$95,000'
        },
        {
        company: 'Microsoft',
        company_name: 'Product Manager',
        location: 'Redmond',
        salary: '$110,000'
        },
        {
        company: 'Facebook',
        company_name: 'Data Scientist',
        location: 'Menlo Park',
        salary: '$125,000'
        },
        {
        company: 'Apple',
        company_name: 'UX/UI Designer',
        location: 'Cupertino',
        salary: '$105,000'
        },
        {
        company: 'IBM',
        company_name: 'Cybersecurity Analyst',
        location: 'New York',
        salary: '$98,000'
        },
        {
        company: 'Tesla',
        company_name: 'Mechanical Engineer',
        location: 'Palo Alto',
        salary: '$115,000'
        },
        {
        company: 'Netflix',
        company_name: 'Content Strategist',
        location: 'Los Angeles',
        salary: '$100,000'
        },
        {
        company: 'Uber',
        company_name: 'Operations Manager',
        location: 'San Francisco',
        salary: '$105,000'
        },
        {
        company: 'Twitter',
        company_name: 'Social Media Manager',
        location: 'San Francisco',
        salary: '$95,000'
        },
        {
        company: 'Salesforce',
        company_name: 'Sales Manager',
        location: 'San Francisco',
        salary: '$110,000'
        },
        {
        company: 'Intel',
        company_name: 'Hardware Engineer',
        location: 'Santa Clara',
        salary: '$100,000'
        },
        {
        company: 'Oracle',
        company_name: 'Database Administrator',
        location: 'Redwood City',
        salary: '$98,500'
        },
        {
        company: 'Adobe',
        company_name: 'Graphic Designer',
        location: 'San Jose',
        salary: '$95,000'
        },
        {
        company: 'Cisco Systems',
        company_name: 'Network Engineer',
        location: 'San Jose',
        salary: '$105,000'
        },
        {
        company: 'HP',
        company_name: 'Supply Chain Analyst',
        location: 'Houston',
        salary: '$92,000'
        },
        {
        company: 'Deloitte',
        company_name: 'Management Consultant',
        location: 'New York',
        salary: '$115,000'
        },
        {
        company: 'McKinsey & Company',
        company_name: 'Strategy Analyst',
        location: 'Chicago',
        salary: '$120,000'
        },
        {
        company: 'Goldman Sachs',
        company_name: 'Financial Analyst',
        location: 'New York',
        salary: '$105,000'
        },
        {
        company: 'JP Morgan Chase',
        company_name: 'Investment Banking Associate',
        location: 'New York',
        salary: '$125,000'
        },
        {
        company: 'PwC',
        company_name: 'Tax Consultant',
        location: 'Chicago',
        salary: '$95,000'
        },        
      {
      company: 'Memorial Center',
      company_name: 'Oncology Nurse',
      location: 'New York',
      salary: '$95,678'
      },
      {
      company: 'Johns Hopkins Hospital',
      company_name: 'Emergency Room Nurse',
      location: 'Baltimore',
      salary: '$89,500'
      },
      {
      company: 'Massachusetts General Hospital',
      company_name: 'Pediatric Nurse',
      location: 'Boston',
      salary: '$92,345'
      },
      {
      company: 'Cleveland Clinic',
      company_name: 'Surgical Nurse',
      location: 'Cleveland',
      salary: '$88,900'
      },
      {
      company: 'Mayo Clinic',
      company_name: 'Cardiac Nurse',
      location: 'Rochester',
      salary: '$90,750'
      },
      {
      company: "Texas Children's Hospital",
      company_name: 'NICU Nurse',
      location: 'Houston',
      salary: '$87,500'
      },
      {
      company: 'Brigham and Women\'s Hospital',
      company_name: 'Critical Care Nurse',
      location: 'Boston',
      salary: '$91,200'
      },
      {
      company: 'UCLA Medical Center',
      company_name: 'Neonatal Nurse',
      location: 'Los Angeles',
      salary: '$86,450'
      },
      {
      company: 'University of Washington Medical Center',
      company_name: 'Nurse Anesthetist',
      location: 'Seattle',
      salary: '$100,000'
      },
      {
      company: 'NewYork-Presbyterian Hospital',
      company_name: 'Labor and Delivery Nurse',
      location: 'New York',
      salary: '$93,780'
      },
      {
      company: 'Duke University Hospital',
      company_name: 'Psychiatric Nurse',
      location: 'Durham',
      salary: '$87,900'
      },
      {
      company: 'Stanford Health Care',
      company_name: 'Orthopedic Nurse',
      location: 'Palo Alto',
      salary: '$94,500'
      },
      {
      company: 'UPMC Presbyterian Shadyside',
      company_name: 'Rehabilitation Nurse',
      location: 'Pittsburgh',
      salary: '$88,250'
      },
      {
      company: 'Children\'s Hospital of Philadelphia',
      company_name: 'Pediatric Intensive Care Nurse',
      location: 'Philadelphia',
      salary: '$92,890'
      },
      {
      company: 'Cedars-Sinai Medical Center',
      company_name: 'Hematology/Oncology Nurse',
      location: 'Los Angeles',
      salary: '$90,500'
      },
      {
      company: 'Vanderbilt University Medical Center',
      company_name: 'Trauma Nurse',
      location: 'Nashville',
      salary: '$87,600'
      },
      {
      company: 'Mount Sinai Hospital',
      company_name: 'Infection Control Nurse',
      location: 'New York',
      salary: '$89,200'
      },
      {
      company: 'Northwestern Memorial Hospital',
      company_name: 'Operating Room Nurse',
      location: 'Chicago',
      salary: '$91,800'
      },
      {
      company: 'University of Michigan Hospitals-Michigan Medicine',
      company_name: 'Nurse Researcher',
      location: 'Ann Arbor',
      salary: '$96,000'
      },
      {
        company: 'Walmart',
        company_name: 'Cashier',
        location: 'Houston',
        salary: '$21,000'
        },
        {
        company: 'McDonald\'s',
        company_name: 'Fast Food Crew Member',
        location: 'Chicago',
        salary: '$19,240'
        },
        {
        company: 'Starbucks',
        company_name: 'Barista',
        location: 'Seattle',
        salary: '$25,000'
        },
        {
        company: 'Target',
        company_name: 'Retail Sales Associate',
        location: 'New York',
        salary: '$24,000'
        },
        {
        company: 'Amazon',
        company_name: 'Warehouse Worker',
        location: 'Los Angeles',
        salary: '$31,200'
        },
        {
        company: 'Subway',
        company_name: 'Sandwich Artist',
        location: 'Dallas',
        salary: '$20,280'
        },
        {
        company: 'Burger King',
        company_name: 'Restaurant Team Member',
        location: 'Phoenix',
        salary: '$21,320'
        },
        {
        company: 'Dollar General',
        company_name: 'Store Associate',
        location: 'Atlanta',
        salary: '$18,720'
        },
        {
        company: 'CVS Health',
        company_name: 'Pharmacy Technician',
        location: 'Philadelphia',
        salary: '$26,000'
        },
        {
          company: 'TD Bank',
          company_name: 'Bank Teller',
          location: 'Toronto',
          salary: '$35,000'
          },
          {
          company: 'Air Canada',
          company_name: 'Flight Attendant',
          location: 'Vancouver',
          salary: '$50,000'
          },
          {
          company: 'RBC',
          company_name: 'Financial Advisor',
          location: 'Calgary',
          salary: '$60,000'
          },
          {
          company: 'Loblaws',
          company_name: 'Store Manager',
          location: 'Montreal',
          salary: '$45,000'
          },
          {
          company: 'Bell Canada',
          company_name: 'Customer Service Representative',
          location: 'Ottawa',
          salary: '$40,000'
          },
          {
          company: 'Tim Hortons',
          company_name: 'Team Member',
          location: 'Edmonton',
          salary: '$25,000'
          },
          {
          company: 'Scotiabank',
          company_name: 'Personal Banking Officer',
          location: 'Winnipeg',
          salary: '$42,000'
          },
          {
          company: 'Canadian Tire',
          company_name: 'Retail Associate',
          location: 'Halifax',
          salary: '$30,000'
          },
          {
          company: 'Suncor Energy',
          company_name: 'Maintenance Technician',
          location: 'Fort McMurray',
          salary: '$55,000'
          },
          {
          company: 'WestJet',
          company_name: 'Customer Service Agent',
          location: 'Victoria',
          salary: '$38,000'
          },
          {
          company: 'Shoppers Drug Mart',
          company_name: 'Pharmacy Assistant',
          location: 'Saskatoon',
          salary: '$32,000'
          },
          {
          company: 'CIBC',
          company_name: 'Mortgage Specialist',
          location: 'Quebec City',
          salary: '$55,000'
          }     
  ]);


  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'company') {
      setCompany(value);
    } else if (name === 'salary') {
      setSalary(value);
    } else if (name === 'location') {
      setLocation(value);
    } else if (name === 'jobTitle') {
      setJobTitle(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      company: company,
      salary: salary,
      location: location,
      jobTitle: jobTitle,
    };

    setJobPostings([...jobPostings, data]);

    // Make your API request here using axios
    // axios.post('http://localhost:8080/api', data)

    // Reset the form fields
    setCompany('');
    setSalary('');
    setLocation('');
    setJobTitle('');
    setSearchTerm('');
    setShowForm(false);
  };

  const filterJobs = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredJobPostings = jobPostings.filter((jobPosting) => {
    const jobFields = Object.values(jobPosting).join(' ').toLowerCase();
    return jobFields.includes(searchTerm);
  });

  return (
    <div className="main-bar">
      <div className="title-container">
        <h2 className="reveal-worth">
          Reveal your Worth
          <br />
          Secure Your Privacy
        </h2>
      </div>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search salaries, locations, companies..."
          value={searchTerm}
          onChange={filterJobs}
        />
      </div>
      <div className="plus" onClick={toggleForm}>
        <p className="add">+ Add</p>
      </div>
      {showForm && (
        <div className="popup-form">
          <form onSubmit={handleSubmit}>
            <input
              className="input-submit"
              type="text"
              name="company"
              value={company}
              onChange={handleChange}
              placeholder="Company"
              required
            />
            <input
              className="input-submit"
              type="text"
              name="salary"
              value={salary}
              onChange={handleChange}
              placeholder="Salary"
              required
            />
            <input
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
              placeholder="Location"
              required
            />
            <input
              type="text"
              name="jobTitle"
              value={jobTitle}
              onChange={handleChange}
              placeholder="Job Title"
              required
            />
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="job-postings-container">
        {filteredJobPostings.map((jobPosting, index) => (
          <div className="job-posting" key={index}>
            <h3>{jobPosting.company}</h3>
            <p>{jobPosting.company_name}</p>
            <p>{jobPosting.location}</p>
            <p>{jobPosting.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBar;