import React from "react";
import { Link } from "react-router-dom";

export function TitleNavigation(id, title) { 
    let route = "/blog/" + id;
    return <h3><Link to={route} title={title}>{title}</Link></h3>;
}