import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ng-iran-province-picker',
  templateUrl: './ng-iran-province-picker.component.html',
  styleUrls: ['./ng-iran-province-picker.component.css']
})
export class NgIranProvincePickerComponent implements OnInit {

  @Output()
  ProvinceSelected: EventEmitter<MapProvince> = new EventEmitter<MapProvince>();

  WestAzerbaijanSelected() {
    this.ProvinceSelected.emit(MapProvince.WestAzerbaijan);
  }

  EastAzerbaijanSelected() {
    this.ProvinceSelected.emit(MapProvince.EastAzerbaijan);
  }

  ArdabilSelected() {
    this.ProvinceSelected.emit(MapProvince.Ardabil);
  }

  GilanSelected() {
    this.ProvinceSelected.emit(MapProvince.Gilan);
  }

  MazandaranSelected() {
    this.ProvinceSelected.emit(MapProvince.Mazandaran);
  }

  GolestanSelected() {
    this.ProvinceSelected.emit(MapProvince.Golestan);
  }

  NorthKhorasanSelected() {
    this.ProvinceSelected.emit(MapProvince.NorthKhorasan);
  }

  RazaviKhorasanSelected() {
    this.ProvinceSelected.emit(MapProvince.RazaviKhorasan);
  }

  ZanjanSelected() {
    this.ProvinceSelected.emit(MapProvince.Zanjan);
  }

  GhazvinSelected() {
    this.ProvinceSelected.emit(MapProvince.Ghazvin);
  }

  TehranSelected() {
    this.ProvinceSelected.emit(MapProvince.Tehran);
  }

  AlborzSelected() {
    this.ProvinceSelected.emit(MapProvince.Alborz);
  }

  SemnanSelected() {
    this.ProvinceSelected.emit(MapProvince.Semnan);
  }

  KordestanSelected() {
    this.ProvinceSelected.emit(MapProvince.Kordestan);
  }

  HamedanSelected() {
    this.ProvinceSelected.emit(MapProvince.Hamedan);
  }

  MarkaziSelected() {
    this.ProvinceSelected.emit(MapProvince.Markazi);
  }

  GhomSelected() {
    this.ProvinceSelected.emit(MapProvince.Ghom);
  }

  KermanShahSelected() {
    this.ProvinceSelected.emit(MapProvince.KermanShah);
  }

  SouthKhorasanSelected() {
    this.ProvinceSelected.emit(MapProvince.SouthKhorasan);
  }

  IlamSelected() {
    this.ProvinceSelected.emit(MapProvince.Ilam);
  }

  IsfehanSelected() {
    this.ProvinceSelected.emit(MapProvince.Isfehan);
  }

  YazdSelected() {
    this.ProvinceSelected.emit(MapProvince.Yazd);
  }

  BushehrSelected() {
    this.ProvinceSelected.emit(MapProvince.Bushehr);
  }

  LorestanSelected() {
    this.ProvinceSelected.emit(MapProvince.Lorestan);
  }

  KhuzestanSelected() {
    this.ProvinceSelected.emit(MapProvince.Khuzestan);
  }

  CharmahalSelected() {
    this.ProvinceSelected.emit(MapProvince.Charmahal);
  }

  KohGiluyeSelected() {
    this.ProvinceSelected.emit(MapProvince.KohGiluye);
  }

  FarsSelected() {
    this.ProvinceSelected.emit(MapProvince.Fars);
  }

  KermanSelected() {
    this.ProvinceSelected.emit(MapProvince.Kerman);
  }

  SistanBaluchestanSelected() {
    this.ProvinceSelected.emit(MapProvince.SistanBaluchestan);
  }

  HormozganSelected() {
    this.ProvinceSelected.emit(MapProvince.Hormozgan);
  }


  constructor() {
  }


  ngOnInit() {
  }

}

export enum MapProvince {
  WestAzerbaijan = 'WestAzerbaijan',
  EastAzerbaijan = 'EastAzerbaijan',
  Ardabil = 'Ardabil',
  Gilan = 'Gilan',
  Mazandaran = 'Mazandaran',
  Golestan = 'Golestan',
  NorthKhorasan = 'NorthKhorasan',
  RazaviKhorasan = 'RazaviKhorasan',
  Zanjan = 'Zanjan',
  Ghazvin = 'Ghazvin',
  Tehran = 'Tehran',
  Alborz = 'Alborz',
  Semnan = 'Semnan',
  Kordestan = 'Kordestan',
  Hamedan = 'Hamedan',
  Markazi = 'Markazi',
  Ghom = 'Ghom',
  KermanShah = 'KermanShah',
  SouthKhorasan = 'SouthKhorasan',
  Ilam = 'Ilam',
  Isfehan = 'Isfehan',
  Yazd = 'Yazd',
  Bushehr = 'Bushehr',
  Lorestan = 'Lorestan',
  Khuzestan = 'Khuzestan',
  Charmahal = 'Charmahal',
  KohGiluye = 'KohGiluye',
  Fars = 'Fars',
  Kerman = 'Kerman',
  SistanBaluchestan = 'SistanBaluchestan',
  Hormozgan = 'Hormozgan'
}
