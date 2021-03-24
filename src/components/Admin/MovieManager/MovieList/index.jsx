import React, { PureComponent } from "react";
import { connect } from "react-redux";

import MovieItem from "../MovieItem";

class index extends PureComponent {
   render() {
      const renderTodos = () => {
         // console.log("currentTodos", currentTodos);

         return this.props.movieList.map((item, index) => {
            return (
               <MovieItem
                 
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
                     <th scope="col">Mã phim</th>
                     <th width="120px" scope="col">Tên phim</th>
                     <th scope="col">Trailer</th>
                     <th scope="col">Hình Ảnh</th>

                     <th scope="col">Đánh giá</th>
                     <th scope="col">Mô tả</th>
                     <th scope="col">Ngày khởi chiếu</th>
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
      movieList: state.movie.movieList,
   };
};

export default connect(mapStateToProps)(index);
