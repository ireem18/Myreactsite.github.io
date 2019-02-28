import React from 'react'
//#decba5
import resim from './images/indir.jpg';
import resim2 from './images/1.jpg';
import resim3 from './images/images.png';
import resim4 from './images/W.PNG';
import resim5 from './images/2.jpg';
import resim6 from './images/ass.jpg';
import resim7 from './images/java.jpg';
import resim8 from './images/react.png';

export default function center() {
  return (
    <div className=" jumbotron jumbotron-fluid mt-t-1" style={{ backgroundColor: 'grey' }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p style={{ color: 'black' }}><strong>PROGRAMLAR</strong></p>
            <div className="container-resim d-flex flex-row justify-content-around">
              <div className="resim-1"><img src={resim} className="rounded-circle" alt="c" width="70" height="70" /></div>
              <div className="resim-2"><img src={resim2} className="rounded-circle" alt="" width="70" height="70" /></div>
              <div className="resim-3"><img src={resim3} className="rounded-circle" alt="" width="70" height="70" /></div>

            </div>
            <p style={{ color: 'black' }}></p>
            <div className="container-resim2 d-flex flex-row justify-content-around">
              <div className="resim-1"><img src={resim6} className="rounded-circle" alt="c" width="70" height="70" /></div>
              <div className="resim-2"><img src={resim7} className="rounded-circle" alt="" width="70" height="70" /></div>
              <div className="resim-3"><img src={resim8} className="rounded-circle" alt="" width="70" height="70" /></div>

            </div>

          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <p style={{ color: 'black', fontSize: '30' }}><strong>1997 Çankırı doğumluyum. Karabuk Üniversitesi Bilgisayar Mühendisliği 3.Sınıf öğrencisiyim.2016 yılında Gençlik Bakanlığı'nın Gençlik
              Projeleri Destek Programı kapsamında 'Geleceğin Büyük Verisini Gençler Yönetiyor' projesinin koordinatörlüğünü yaptım.Html,Css,Javascript,React eğitimleri yanı sıra c# ve sql eğitimleri
              aldım.İlk stajımı Bilkent Teknoparkta AGMLab Teknoloji şirketinde Java ve Veritabanı üzerine yaptım.
       </strong>

            </p>
          </div>
          <div className="col">
            <p style={{ color: 'black' }}><strong>TOPLULUK</strong></p>
            <div className="container-img ">
              <div className="resim1"><img src={resim4} className="rounded-circle" alt="c" width="70" height="70" /></div>
            </div>
            <p style={{ color: 'black' }}><strong>SERTİFİKA</strong></p>
            <div className="container-img2 ">
              <div className="resim2"><img src={resim5} className="rounded-circle" alt="c" width="70" height="70" /></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
/* <ul class="list-group">

  <li class="list-group-item list-group-item-success">C</li>
  <li class="list-group-item list-group-item-info">Html,Css,Javascript</li>
  <li class="list-group-item list-group-item-success">Java</li>
  <li class="list-group-item list-group-item-info">Assembly</li>
  <li class="list-group-item list-group-item-success">SQL</li>

</ul>
*/