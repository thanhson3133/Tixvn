import React, { PureComponent } from "react";
import { connect } from "react-redux";

import UserItem from "../UserItem";

class index extends PureComponent {
   

   render() {
     

      const renderTodos = () => {
         // console.log("currentTodos", currentTodos);

         return this.props.userListItem.map((item, index) => {
            return (
               <UserItem
                  
                  key={index}
                  data={item}
               />
            );
         });
      };

      
      return (
         <div className="">
            <table className="table table-hover text-center">
               <thead>
                  <tr className="table-active">
                     <th scope="col">Tên</th>
                     <th scope="col">Tài Khoản</th>
                     <th scope="col">Email</th>
                     <th scope="col">Số điện thoại</th>
                     <th scope="col">Mã người dùng</th>
                     <th scope="col">Chức Năng</th>
                  </tr>
               </thead>
               <tbody>{renderTodos()}</tbody>
            </table>
            
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      userListItem: state.userManager.userListItem,
   };
};

export default connect(mapStateToProps)(index);
