import React from 'react';
import { upload, download } from './service';

/*
    1. Gunakan tombol #chooseImgButton untuk memilih file gambar untuk diupload
    2. Tampilkan gambar sebagai background elemen #preview
    3. Gunakan service.upload() untuk upload gambar dalam bentuk file JSON. 
       Server akan memberi respon dalam bentuk JSON juga. Di dalamnya ada info tentang ID JSON yang diupload.        
    4. Gunakan service.download() untuk mendownload JSON dari URL di atas. 
       Silakan baca dokumentasi di https://jsonbin.io/api-reference/bins/read.
    5. Tampilkan file base64 yang ada di dalam file JSON di atas sebagai background elemen #uploaded-image

    Contoh hasil akhir: https://www.dropbox.com/s/gypiplh5utq62re/img-uploader.mp4?dl=0
    
    Catatan: Anda hanya perlu mengedit file ini saja.
  */

export default class Uploader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uploader">
        <div id="preview" />
        <input id="chooseImgButton" type="file" />
        <div className="post-view">
          <h4>Uploaded</h4>
          <div id="uploaded-image" />
        </div>
      </div>
    );
  }
}
