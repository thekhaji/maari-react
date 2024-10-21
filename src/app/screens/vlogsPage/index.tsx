import React from "react";
import TextTruncate from "../../components/TextTruncate";
import { Link, Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import VlogPage from "./VlogPage";
import VlogsList from "./VlogsList";
import '../../../css/vlogs.css';
import '../../../css/vlog.css';

function VlogsPage(){
  const vlogsPath = useRouteMatch();
  console.log(vlogsPath);
  
  return (
    <>
      <Switch>
        <Route path={`${vlogsPath.path}/:id`}>
          <VlogPage/>
        </Route>
        <Route path={`${vlogsPath.path}`}>
          <VlogsList/>
        </Route>
      </Switch>
    </>

    
  )
} 

export default VlogsPage;