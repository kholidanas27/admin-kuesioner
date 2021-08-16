import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import Style from "../../components/styles/sidebar.module.css";

class SidebarComponent extends Component {
    render() {
        return (
            <div className={Style.sidebar}>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Pemilik</Form.Label>
                    <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Bentuk</Form.Label>
                    <Form.Control as="select" size="sm">
                    <option>Pilih</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Sifat</Form.Label>
                    <Form.Control as="select" size="sm">
                    <option>Pilih</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Jenis User</Form.Label>
                    <Form.Control as="select" size="sm">
                    <option>Pilih</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                </Form>
                <Button variant="primary" size="sm" block>Cari</Button>
                <div className={Style.labelresponden}>
                    <Form.Label>Responden</Form.Label>
                </div>
            </div>
        )
    }
}

export default SidebarComponent; 