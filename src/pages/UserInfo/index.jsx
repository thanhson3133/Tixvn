import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
    render() {
        return (
            <div>
                <div className="text-center mx-auto w-50">
                <h1>THÔNG TIN NGƯỜI DÙNG</h1>
                <div>
                    <p>Họ Tên: {this.props.userInfo.hoTen} </p>
                    <p>Số Điện Thoại: {this.props.userInfo.soDT} </p>
                    <p>Email: {this.props.userInfo.email} </p>
                    <p>Tài Khoản: {this.props.userInfo.taiKhoan} </p>
                    <p>Mã Nhóm: {this.props.userInfo.maNhom} </p>
                    <p>Mã Loại Người Dùng: {this.props.userInfo.maLoaiNguoiDung}</p>
                </div>
                {/* <div className="bookingMovie">
                    <h3>Thông tin đặt vé</h3>
                </div> */}
                <div className="text-center">
                    <Link to="/" className="btn btn-info">Quay Lại</Link>
                </div>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
    userInfo : state.auth.user || {}
})
export default connect(mapStateToProps)(UserInfo);


