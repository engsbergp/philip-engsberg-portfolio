import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Header() {

  const [navExpanded, setNavExpanded ] = useState(false);
  const [width, setWidth] = useState(0);


  
  //set width state to current browser width
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
    
    return () => window.removeEventListener("resize", updateWindowDimensions) 
    
  }, [width]);
  
  //reset nav expand on browser resize
  useEffect(() => {
    if(width > 650) {
      setNavExpanded(false);
    }
  }, [])

  const expandNav = () => {
    if(width < 650) {
       setNavExpanded(!navExpanded)
    }
  }

  return (
    <>
      <div onClick={() => expandNav()} className="bars pointer">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={navExpanded ? "navShow" : "sidebar"}>
        <div className="sidebar-contents">
          <Nav.Link onClick={()=> expandNav()} style={{color:"black", paddingTop:"4rem", fontSize:"1.5rem"}} as={Link} to='/'>Philip Engsberg</Nav.Link>
          <Nav.Link onClick={()=> expandNav()} style={{color:"black", marginLeft:"1rem"}} className="navLink" as={Link} to='/infrared'>infrared</Nav.Link>
          <Nav.Link onClick={()=> expandNav()} style={{color:"black", marginLeft:"1rem"}} className="navLink" as={Link} to='/traditional'>traditional</Nav.Link>
          <Nav.Link onClick={()=> expandNav()} style={{color:"black", marginLeft:"1rem"}} className="navLink" as={Link} to='/humans'>humans</Nav.Link>
          <Nav.Link onClick={()=> expandNav()} style={{color:"black", marginLeft:"1rem"}} className="navLink" as={Link} to='/ghosts'>ghosts</Nav.Link>
          <Nav.Link onClick={()=> expandNav()} style={{color:"black", marginLeft:"1rem"}} className="navLink" as={Link} to='/coffee'>coffee</Nav.Link>
          <Nav.Link onClick={()=> expandNav()} style={{color:"black", marginLeft:"1rem"}} className="navLink" as={Link} to='/ambl'>ambl</Nav.Link>
          {/* <Nav.Link onClick={()=> expandNav()} style={{color:"black", marginLeft:"1rem"}} className="navLink" as={Link} to='/support'>support</Nav.Link> */}
          <Nav.Link onClick={()=> expandNav()} style={{color:"black", marginLeft:"1rem"}} className="navLink" as={Link} to='/connect'>connect</Nav.Link>
        </div>
      </div>
    </>
  )
}
