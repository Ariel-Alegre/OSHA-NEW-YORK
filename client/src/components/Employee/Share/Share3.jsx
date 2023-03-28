import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosShareAlt } from "react-icons/io";
import style from "./Share3.module.css";
import { useSelector } from "react-redux";

export default function Share3() {
  const employee3 = useSelector((state) => state.DetailsEmployee);

  const shareUrl = employee3.test;
  return (
    <div className={style.container_Share3}>
      <Dropdown>
        <Dropdown.Toggle className={style.Toggleicon3} id="dropdown-basic3">
          <IoIosShareAlt className={style.icon3} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <FacebookShareButton
              url={shareUrl}
              quote={"true"}
              hashtag={"#certificate"}
            >
              <FacebookIcon className={style.iconFacebook3} size={40} /> Share
              on facebook
            </FacebookShareButton>
          </Dropdown.Item>
          <Dropdown.Item>
            <TwitterShareButton
              url={shareUrl}
              quote={"true"}
              hashtag={"#certificate"}
            >
              <TwitterIcon className={style.iconTwitter3} size={40} /> Share on
              twitter
            </TwitterShareButton>
          </Dropdown.Item>
          <Dropdown.Item>
            <PinterestShareButton
              url={shareUrl}
              quote={"true"}
              hashtag={"#certificate"}
            >
              <PinterestIcon className={style.iconPin3} size={40} /> Share on
              Pin it
            </PinterestShareButton>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
