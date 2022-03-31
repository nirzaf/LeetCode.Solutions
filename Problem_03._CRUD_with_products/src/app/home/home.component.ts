import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AddProductComponent} from '../add-product/add-product.component';
import {DataService} from "../shared/data.service";

export interface ProductData {
  productId: number;
  productName: string;
  SKU: string;
  created: string;
  retailPrice: number;
  salePrice: number;
  lowestPrice: number;
  status:boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['status','productName', 'SKU', 'created', 'retailPrice', 'salePrice', 'lowestPrice' ];
  dataSource: MatTableDataSource<ProductData> ;
  dataSourceService: any ;

  constructor(public dialog: MatDialog, data:DataService) {
    this.dataSource = new MatTableDataSource<ProductData>(data.getProductData());
    this.dataSourceService = data;
  }

  ngOnInit(): void {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
  }

  addNewProduct():void{
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = this.dataSourceService.getProductData();
    });
  }
}




