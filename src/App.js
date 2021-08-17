import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route, Router } from "react-router-dom";
import './index.css';
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import BerandaBursa from './pages/BursaKuesioner/BerandaBursa';
import DaftarKuis from "./pages/DaftarKuis/DaftarKuis";
import HasilKuis from "./pages/HasilKuis/HasilKuis";
import Partisipasi from "./pages/Partisipasi/Partisipasi";
import Responden from "./pages/Responden/Responden";
import BuatKuesioner from "./pages/BursaKuesioner/BuatKuesioner";
import AdminKuesioner from "./pages/Kuesioner/AdminKuesioner";
import BuatInstrumentPG from "./pages/Kuesioner/BuatInstrumentPG";
import BuatInstrumentLinkert from "./pages/Kuesioner/BuatInstrumentLinkert";
import BuatInstrumentFile from "./pages/Kuesioner/BuatInstrumentFile";
import Undang from "./pages/Undang/Undang";
import IsiKuesionerPG from "./pages/Partisipasi/IsiKuesionerPG";
import IsiKuesionerLikert from "./pages/Partisipasi/IsiKuesionerLikert";
import IsiKuesionerFile from "./pages/Partisipasi/IsiKuesionerFile";
import DataRespondenPG from "./pages/Responden/DataRespondenPG";
import DataRespondenLikert from "./pages/Responden/DataRespondenLikert";
import DataRespondenFile from "./pages/Responden/DataRepondenFile";

var instrument = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Route path="/" exact component={HomeContainer} /> */}

          <Route path="/create" exact component={CreateUserContainer} />

          <Route path="/detail/:id" exact component={DetailUserContainer} />

          <Route path="/edit/:id" exact component={EditUserContainer} />

          <Route path="/" exact component={BerandaBursa}/>

          <Route path="/daftarkuis" exact component={DaftarKuis}/>

          <Route path="/hasilkuis" exact component={HasilKuis}/>

          <Route path="/partisipasi" exact component={Partisipasi}/>

          <Route path="/responden" exact component={Responden} />

          <Route path="/buat-kuesioner" exact component={BuatKuesioner} />

          <Route path="/admin-kuesioner" exact component={AdminKuesioner} />

          <Route path="/buat-instrumenPG" exact component={BuatInstrumentPG} />

          <Route path="/buat-instrumentLinkert" exact component={BuatInstrumentLinkert} />

          <Route path="/buat-instrumentFile" exact component={BuatInstrumentFile} />

          <Route path="/undang" exact component={Undang} />

          <Route path="/isikuesionerPG" exact component={IsiKuesionerPG} />

          <Route path="/isikuesionerLikert" exact component={IsiKuesionerLikert} />

          <Route path="/isikuesionerFile" exact component={IsiKuesionerFile} />
          
          <Route path="/datarespondenPG" exact component={DataRespondenPG} />

          <Route path="/datarespondenLikert" exact component={DataRespondenLikert} />

          <Route path="/datarespondenFile" exact component={DataRespondenFile} />

        </BrowserRouter>
      </div>
    );
  }
}
