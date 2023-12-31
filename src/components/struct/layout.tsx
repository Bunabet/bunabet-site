/**
 * Layout
 * 2023-2023
 * v 0.0.2
 * 
 * */
// REACT
import React, { FC } from "react";
// APP
import { Header } from "./header";
import { Footer } from "./footer";
import { get_css_value } from "../../utils/tools";
import './layout.css';

interface Props {
  menu_is?: boolean;
  children? : React.ReactNode;
}
const style_content_box = {
  background : get_css_value("--layout_bg"),
  borderTop: "2px solid " + get_css_value("--color_line"),
}
const style_content_cell = {
  color: get_css_value("--color_text"),
  margin: "0 auto",
  paddingBottom: 24,
  paddingLeft: 42,
  paddingRight: 42,
  
  maxWidth: get_css_value("--width_content_max"),
}

export const Layout: FC<Props> = ({menu_is, children}) => {
  console.log("menu_is", menu_is);
  return (<>
    {(menu_is === undefined || menu_is === true) && <Header/>}
    {/* {(menu_is === undefined || menu_is === true) ? <Header/> : null} */}
    <div style={style_content_box}>
      <div style={style_content_cell}>
        {children}
      </div>
    </div>
    <Footer/>  
  </>
  );
};

