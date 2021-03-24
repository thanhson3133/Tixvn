import React, { Component } from "react";
import { connect } from "react-redux";

import Search from "./Search";
import ModalAddMovie from "./ModalAddMovie";
import MovieList from "./MovieList";
import { fetchMoives } from "../../../redux/actions/movieList";
import "./style.css";
class index extends Component {
   
   handleAddMovie = () => {
      const action = {
         type: "SHOW_MODAL",
      };
      this.props.dispatch(action);
   };
   render() {
      // console.log(this.props.userListItem);
      return (
         <div className="container-fluid px-5">
            <h1 className="display-4 text-center my-3">Quản lý Phim</h1>
            <div className="d-flex justify-content-between align-items-center">
               <Search></Search>
               <button
                  onClick={this.handleAddMovie}
                  className="btn btn-success"
               >
                  Thêm Phim
               </button>
            </div>
            <MovieList item={this.props.movieList}></MovieList>

            {this.props.isShow && <ModalAddMovie />}
         </div>
      ) 
   }
   componentDidMount = () => {
      this.props.dispatch(fetchMoives());
      
   };
}
const mapStateToProps = (state) => {
   return {
      isShow: state.modal,
      movieList: state.movie.movieList,
   };
};
export default connect(mapStateToProps)(index);
