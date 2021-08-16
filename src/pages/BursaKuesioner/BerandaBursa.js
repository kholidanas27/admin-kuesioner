import React, { Component } from 'react'
import SidebarComponent from './SidebarComponent'
import TableComponent from "./Datatabel/TableComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../../actions/userAction'
import Style from "../../components/styles/beranda.module.css";
import { Container } from 'react-bootstrap';
import NavbarComponent from "../../components/NavbarComponent";

class BerandaBursa extends Component {
    componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }
    render() {
        return (
            <div>
                <NavbarComponent />
                <SidebarComponent/>
                <div className={Style.breadcumb}>
                <div className="col-md-12">
                <div className="row">
                    <h4>Bursa</h4>
                </div>
                </div>
                </div>
                <div className={Style.content}>
                    <Container>
                    <div className="col-md-12">
                        <div className="row">
                            <TableComponent/>
                        </div>
                    </div>
                    </Container>
                </div>
            </div>
        )
    }
}
export default connect()(BerandaBursa);
