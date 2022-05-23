import { React } from "react";
import { render } from "react-dom";
import { Component } from 'react';

import "./popup.css";
$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("200");
  $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
});
function popup(){

}

render(<popup/>, document.getElementById("react-target"));