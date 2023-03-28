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
import style from "./Share.module.css";
import { useSelector } from "react-redux";

export default function Share() {
  const employee = useSelector((state) => state.DetailsEmployee);

  const shareUrl = employee.test;
  return (
    <div className={style.container_Share}>
      <Dropdown>
        <Dropdown.Toggle className={style.Toggleicon} id="dropdown-basic">
          <IoIosShareAlt className={style.icon} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <FacebookShareButton
              url={shareUrl}
              quote={"true"}
              hashtag={"#certificate"}
            >
              <FacebookIcon className={style.iconFacebook} size={40} /> Share on
              facebook
            </FacebookShareButton>
          </Dropdown.Item>
          <Dropdown.Item>
            <TwitterShareButton
              url={shareUrl}
              quote={"true"}
              hashtag={"#certificate"}
            >
              <TwitterIcon className={style.iconTwitter} size={40} /> Share on
              twitter
            </TwitterShareButton>
          </Dropdown.Item>
          <Dropdown.Item>
            <PinterestShareButton
              url={shareUrl}
              quote={"true"}
              hashtag={"#certificate"}
            >
              <PinterestIcon className={style.iconPin} size={40} /> Share on Pin
              it
            </PinterestShareButton>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
