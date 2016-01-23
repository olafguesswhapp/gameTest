import React from 'react';
import {Link} from 'react-router';

class TopBar extends React.Component {
	
  render() {
    var nav = this.props.pages.map((page, index)=>{
      return (
        <div key={index}>
          <ul className="nav nav-pills pull-right">
            <li className=''><Link to={page.pageLink} >{page.pageTitle}</Link></li>
          </ul>
        </div>
      );
    });
    return (
      <nav className="page-header">
        {nav}
        <h1><Link to={'/'} >GameHub</Link></h1>
      </nav>
    )
  }
}

export default TopBar

TopBar.propTypes = {
  pages: React.PropTypes.array.isRequired
};