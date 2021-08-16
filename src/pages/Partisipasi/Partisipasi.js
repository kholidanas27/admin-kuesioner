import React, { Component } from 'react'
import TableComponent from "./Datatabel/TableComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../../actions/userAction'
import Style from "../../components/styles/partisipasi.module.css";
import NavbarComponent from "../../components/NavbarComponent";

class Partisipasi extends Component {
    componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }
    render() {
        return (
            <div>
                <NavbarComponent />
                <div className={Style.breadcumb}>
                <div className="col-md-12">
                <div className="row">
                    <h4>Partisipasi</h4>
                </div>
                </div>
                </div>
                <div className={Style.content}>
                    <div className="col-md-12">
                        <div className="row">
                            <TableComponent/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(Partisipasi);

