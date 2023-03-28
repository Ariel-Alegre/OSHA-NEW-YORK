import React from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon } from "react-share";
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosShareAlt } from 'react-icons/io';
import style from './Share2.module.css'
import {useSelector } from "react-redux";



export default function Share2  () {

  const employee2 = useSelector((state) => state.DetailsEmployee);

 



    const shareUrl = employee2.test2
    return (
      <div className={style.container_Share2} >
        

  
        <Dropdown  >
      <Dropdown.Toggle className = {style.Toggleicon2} id="dropdown-basic2">
       <IoIosShareAlt className={style.icon2} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >

        <FacebookShareButton url={shareUrl} quote={'true'} hashtag={'#certificate'}>
          <FacebookIcon  className={style.iconFacebook2} size={40}/> Share on facebook
        </FacebookShareButton>

        </Dropdown.Item>
        <Dropdown.Item >
        <TwitterShareButton url={shareUrl}  quote={'true'} hashtag={'#certificate'} >
        <TwitterIcon   className={style.iconTwitter2}  size={40}/> Share on twitter

        </TwitterShareButton>

        </Dropdown.Item>
        <Dropdown.Item>
        <PinterestShareButton  url={shareUrl} quote={'true'} hashtag={'#certificate'}>

        <PinterestIcon  className={style.iconPin2}  size={40}/> Share on Pin it

        </PinterestShareButton>

        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
 
    
      </div>
    );
  }

