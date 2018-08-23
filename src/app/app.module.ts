import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomeGuruPage } from '../pages/home-guru/home-guru';
import { HomeSiswaPage } from '../pages/home-siswa/home-siswa';
import { DataMataPelajaranPage } from '../pages/data-mata-pelajaran/data-mata-pelajaran';
import { DataNilaiSiswaPage } from '../pages/data-nilai-siswa/data-nilai-siswa';
import { BiodataSiswaPage } from '../pages/biodata-siswa/biodata-siswa';
import { BiodataGuruPage } from '../pages/biodata-guru/biodata-guru';
import { IonicStorageModule } from '@ionic/storage';
import { TranskipSiswaPage } from '../pages/transkip-siswa/transkip-siswa';
import { PresensiSiswaPage } from '../pages/presensi-siswa/presensi-siswa';
import { JadwalSiswaPage } from '../pages/jadwal-siswa/jadwal-siswa';
import { LoginPage } from '../pages/login/login';
import { GantiPasswordSiswaPage } from '../pages/ganti-password-siswa/ganti-password-siswa';
import { MengajarGuruPage } from '../pages/mengajar-guru/mengajar-guru';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomeGuruPage,
    HomeSiswaPage,
    DataMataPelajaranPage,
    DataNilaiSiswaPage,
    BiodataSiswaPage,
    BiodataGuruPage,
    JadwalSiswaPage,
    PresensiSiswaPage,
    TranskipSiswaPage,
    LoginPage,
    GantiPasswordSiswaPage,
    MengajarGuruPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeSiswaPage,
    HomeGuruPage,
    DataMataPelajaranPage,
    DataNilaiSiswaPage,
    BiodataSiswaPage,
    BiodataGuruPage,
    JadwalSiswaPage,
    PresensiSiswaPage,
    TranskipSiswaPage,
    LoginPage,
    GantiPasswordSiswaPage,
    MengajarGuruPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
