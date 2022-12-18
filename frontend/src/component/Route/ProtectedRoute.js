// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Redirect, Route } from "react-router-dom";

// const ProtectedRoute = ({  component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Redirect to="/login" />;
//             }

//             // if (isAdmin === true && user.role !== "admin") {
//             //   return <Redirect to="/login" />;
//             // }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;

// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Redirect, Route, useNavigate } from "react-router-dom";

// const ProtectedRoute = ({  component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
// let navigate = useNavigate()
//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return navigate("login")
//             }

//             // if (isAdmin === true && user.role !== "admin") {
//             //   return <Redirect to="/login" />;
//             // }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;



import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  loading,
 
  isAdmin,

  redirect = "/login",
  account = "/account"
 
}) => {
  const {user } = useSelector((state) => state.user);



  // console.log(user?.role);
  if (loading ===false && isAuthenticated === false) {
    console.log("false")
    return <Navigate to={redirect} />;
  }

  // if(user?.role === "user" && isAuthenticated){
    
  //   return <Navigate to={account} />;
  // }
 

  if(isAdmin && loading===false && user?.role !== "admin"){
    console.log("this is form");
    return <Navigate to={redirect} />;
  }


  // if (adminRoute && !isAdmin) {
  //   return <Navigate to={redirectAdmin} />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;