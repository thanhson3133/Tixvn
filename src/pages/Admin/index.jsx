import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import MovieManager from "../../components/Admin/MovieManager";
import UserManager from "../../components/Admin/UserManager";
import "./style.css";
import Swal from "sweetalert2";

export default class index extends Component {
   
   chuyenHuongAdmin() {
      Swal.fire({
         title: "Bạn không phải là quản trị!",
         text: "Vui lòng đăng nhập bằng tài khoản quản trị",
         icon: "error", //error, success,warning,question
         confirmButtonText: "Đăng nhập",
      });
      localStorage.removeItem("userInfo");
      this.props.history.replace("/signin");
   }
   render() {
      const token = JSON.parse(localStorage.getItem("userInfo"));

      return (
         <div>
            {token && token.maLoaiNguoiDung === "QuanTri" ? (
               <>
                  <div className="row m-0 head">
                     <NavLink className="logoAd" to="/">
                        <img width="60px" src="https://tix.vn/app/assets/img/icons/web-logo.png" />
                     </NavLink>
                     <span className="admin">ADMIN</span>
                  </div>
                  <div className="container">
                     <div className="row">
                        <div
                           className="nav nav-pills bg-navy mx-auto"
                           id="v-pills-tab"
                           role="tablist"
                           aria-orientation="vertical"
                        >
                           <a
                              className='effect'
                              id="v-pills-profile-tab"
                              data-toggle="pill"
                              href="#v-pills-profile"
                              role="tab"
                              aria-controls="v-pills-profile"
                              aria-selected="false"
                           >
                              <button className="btn btn-primary mr-2">UserManager</button>
                           </a>
                           <a
                              className=" effect"
                              id="v-pills-messages-tab"
                              data-toggle="pill"
                              href="#v-pills-messages"
                              role="tab"
                              aria-controls="v-pills-messages"
                              aria-selected="false"

                           >
                              <button className="btn btn-warning text-white">MovieManager</button>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className="tab-content" id="v-pills-tabContent">
                        <div
                           className="tab-pane fade show active"
                           id="v-pills-profile"
                           role="tabpanel"
                           aria-labelledby="v-pills-profile-tab"
                        >
                           <UserManager></UserManager>
                        </div>
                        <div
                           className="tab-pane fade "
                           id="v-pills-messages"
                           role="tabpanel"
                           aria-labelledby="v-pills-messages-tab"
                        >
                           <MovieManager></MovieManager>
                        </div>
                     </div>
                  </div>
               </>

            ) : (
               this.chuyenHuongAdmin()
            )}
         </div>
      );
   }
}
