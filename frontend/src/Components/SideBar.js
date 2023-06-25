import Transparency from '../Transparency.svg';
import Epic from '../awesome.png';
import SearchBar from './SearchBar.js';
import React from 'react';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      company: '',
      salary: '',
      location: '',
      jobTitle: '',
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Perform POST API request with the form data
    const { company, salary, location, jobTitle } = this.state;
    // Make your API request here
    console.log('Company:', company);
    console.log('Salary:', salary);
    console.log('Location:', location);
    console.log('Job Title:', jobTitle);

    // Reset the form fields
    this.setState({
      company: '',
      salary: '',
      location: '',
      jobTitle: '',
      showForm: false,
    });
  };

  render() {
    const { showForm, company, salary, location, jobTitle } = this.state;

    return (
      <div className="side-bar">
      <img src={Epic} alt="Logo ting" className="real-logo" width={50} />
      <img src={Transparency} alt="React Logo" className="logo" width={100} />
        <div className="sideSearch">
          <input className="side-search-bar" type="text" placeholder="Search Salaries" />
          <hr className="line" />
          <div className="side-by-side">
            <div className="watchlist">
              <p className="watchlist"></p>
            </div>
            <div className="plus" onClick={this.toggleForm}>
              <p className="add"></p>
            </div>    
          </div>
          {showForm && (
            <div className="popup-form">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="input-submit"
                  type="text"
                  name="company"
                  value={company}
                  onChange={this.handleChange}
                  placeholder="Company"
                  required
                />
                <input
                  className="input-submit"
                  type="text"
                  name="salary"
                  value={salary}
                  onChange={this.handleChange}
                  placeholder="Salary"
                  required
                />
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={this.handleChange}
                  placeholder="Location"
                  required
                />
                <input
                  type="text"
                  name="jobTitle"
                  value={jobTitle}
                  onChange={this.handleChange}
                  placeholder="Job Title"
                  required
                />
                <button type="submit" class="button">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SideBar;
