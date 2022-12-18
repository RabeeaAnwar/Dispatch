import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';
import {HiHome} from 'react-icons/hi';
import {RiMenu2Fill} from 'react-icons/ri';
import {MdCollectionsBookmark,MdLightMode,MdDarkMode} from 'react-icons/md';
import {RxActivityLog} from 'react-icons/rx';


export const SideBar = () => {

  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded,setExpanded]=useState(sidebarCollapsed ? false: true);
  const [theme,setTheme] = useState(localStorage.getItem("theme"));


  
  

  const toggleTheme=()=>{
   
   
   
   
    theme === 'dark-theme' ?  setTheme('light-theme') :  setTheme('dark-theme')
     
      window.localStorage.setItem("theme",theme);
     
  }

  useEffect(()=>{
    
    document.body.className = theme;
    window.localStorage.setItem("theme",theme);
  
   
  },[theme]);
  
  const handleToggler =()=>{
    if(isExpanded){
      setExpanded(false);
      localStorage.setItem('sidebarCollapsed',true);
      return;
    }
    setExpanded(true);
    localStorage.removeItem('sidebar-collapsed')
  }
  
  
  
  return(
    <>
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      <div className='sidebar-header'>
      <RiMenu2Fill className='sidebar-icon' onClick={handleToggler}/>
      <span className='sidebar-text'>
      <h3>{`dis{patch...}`}</h3></span>
      </div>

      <div className='sidebar-items'>
      <div className='item'>
      <Link to='/' style={{ textDecoration: 'none'}}>
      <HiHome className='sidebar-icon'/>
      <span className='sidebar-text'>Home</span>
      </Link>
      </div>
      </div>
      <div className='sidebar-items'>
      <div className='item'>
      <Link to='/Activity' style={{ textDecoration: 'none'}}>
      <RxActivityLog className='sidebar-icon'/>
      <span className='sidebar-text'>Activity</span>
      </Link>
      </div>
      </div>

      <div className='sidebar-items'>
      <div className='item'>
      <Link to='/Collections' style={{ textDecoration: 'none'}}>
      <MdCollectionsBookmark className='sidebar-icon'/>
      <span className='sidebar-text'>Collections</span>
      </Link>
      </div>
      </div>

      

      <div className='sidebar-items'>
      <div className='item'>
      <button onClick={()=>toggleTheme()}
      style={{backgroundColor:'transparent', border:'none', cursor:'pointer',paddingLeft:'1px'}} >
      {theme === 'dark-theme' ? <MdLightMode className='sidebar-icon'/>
      : <MdDarkMode className='sidebar-icon'/>}
       <span className='sidebar-text'>Theme</span>
      </button>
      </div>
      </div>

    </div>
    </>
  )   
 
}


// const sideBar = useRef(null);
// const arrowCollapse = useRef(null);
// const [collapsed,setCollapsed]=useState(false);

// const handleClick=(e)=>{
// setCollapsed(!collapsed);
// e.currentTarget.classList.add('collapse');

// };


// return (
// <>
// <div className={(collapsed)? 'side-bar collapse' : 'side-bar'}>
// <div className="logo-name-wrapper">
// <div className="logo-name">
// <img
//   src={Logo}
//   className="logo logo-name__name"
//   alt="logo app"
//   srcSet=""
// />
// <span className="logo-name__name">dIsPAch</span>
// </div>
// <button className="logo-name__button" ref={arrowCollapse} onClick={e=>handleClick(e)}>
// { (collapsed) ?
// <BiChevronsRight  className="logo-name__icon"  id="logo-name__icon"/> 
//   :
// <BiChevronsLeft />
// }
// </button>
// </div>
// <ul className="features-list">
// <li className="features-item inbox active">
// <HiHome className="features-item-icon inbox-icon"/>
// <span className="features-item-text">Home</span>
// <span className="tooltip">Home</span>
// </li>
// <li className="features-item draft">
// <MdCollectionsBookmark className="features-item-icon"/>
// <span className="features-item-text">Collections</span>
// <span className="tooltip">Collections</span>
// </li>
// <li className="features-item star">
// <RxActivityLog className="features-item-icon"/>
// <span className="features-item-text">Activity</span>
// <span className="tooltip">Activity</span>
// </li>
// <li className="features-item sent">
// <MdLightMode className="features-item-icon"/>
// <span className="features-item-text">Theme</span>
// <span className="tooltip">Theme</span>
// </li>


// </ul>

// </div>