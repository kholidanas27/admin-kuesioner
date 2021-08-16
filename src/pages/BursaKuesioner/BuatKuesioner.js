import React, { Component, useState, useEffect } from 'react'
import NavbarBuatKuesioner from "../../components/NavbarBuatKuesioner";
import SidebarBuatKuesioner from "./SidebarBuatKuesioner";
import Style from "../../components/styles/buatkuesioner.module.css";
import { Form, Row, Col, Button } from "react-bootstrap";

class BuatKuesioner extends Component{
    // const [inputFile, setInputFile] = useState<HTMLInputElement | null>(null);
    // useEffect(() => {
    //     setInputFile(document.getElementById("input-file") as HTMLInputElement);
    // }, []);

    // const handleUpload = () => {
    //     inputFile?.click();
    // };
    render () {
        return (
            <div>
                <NavbarBuatKuesioner/>
                <div className={Style.grid}>
                    <div className={Style.sidebar1}>INI ADALAH UNTUK SIDEBAR1</div>
                    <div className={Style.sidebar2}>
                    <Row>
                    <Col>
                    <div className="breadcumb" style={{fontSize: "14pt", fontWeight: "bold", paddingBottom: "10px"}}>
                        Buat Kuesioner
                    </div>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Waktu Buat</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>ID Kuesioner</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Kuesioner Sarpras</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Keterangan Kuesioner</Form.Label>
                            <Form.Control as="textarea" placeholder="Kuesioner untuk mengetahui kualitas prasana sekolah" size="sm">
                            
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col style={{paddingTop:"38px"}}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Bentuk</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom disabled> 
                            <option value="0">Pilih Bentuk Kuesioner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Sifat</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom disabled> 
                            <option value="0">Pilih Sifat Kuesioner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nilai Scoin</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Poin</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                        </Form.Group>
                    </Col>
                    <Col style={{paddingTop:"63px"}}>
                        <Button size="sm">
                        Buat Panduan
                        </Button> 
                    </Col>
                    </Row>
                    </div>
                    <div className={Style.sidebar3}>3</div>  
                    <div className={Style.sidebar4}>
                    <div className="breadcumb" style={{fontSize: "14pt", fontWeight: "bold", paddingBottom: "10px"}}>
                        Buat Panduan Kuesioner
                    </div>
                    <Row>
                        <Col>
                        <Form className={Style.form}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Waktu Buat</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>ID Kuesioner</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Kuesioner Sarpras</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Keterangan Kuesioner</Form.Label>
                            <Form.Control as="textarea" placeholder="Kuesioner untuk mengetahui kualitas prasana sekolah" size="sm">
                            </Form.Control>
                        </Form.Group>
                    </Form>
                        </Col>
                        <Col style={{paddingTop:"0px"}}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Bentuk</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom disabled> 
                            <option value="0">Pilih Bentuk Kuesioner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Sifat</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom disabled> 
                            <option value="0">Pilih Sifat Kuesioner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nilai Scoin</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Poin</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                        </Form.Group>
                    </Col>
                        <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Isian</Form.Label>
                            <Form.Control as="textarea" rows={3} style={{fontSize:"10pt", height: '100px'}} placeholder="Ketik Isian disini" />
                        </Form.Group>
                        <div className={Style.btnupload}>
                            <input id="input-file" className="d-none" type="file" />
                            <Button  size="sm" >
                            Buat Panduan
                            </Button> 
                        </div>
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuatKuesioner;
