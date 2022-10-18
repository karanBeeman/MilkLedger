import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface MilkerData {
  position: number;
  name: string;
  place: string;
  salary: number;
  bike: number;
  Active: boolean;
}

const ELEMENT_DATA: MilkerData[] = [
  {position:1, name: 'ranjith', place: 'by pass',  salary: 1, bike:1, Active:true},
  {position:2, name: 'kumar', place: 'madurai',  salary: 1, bike:1, Active:true},
  {position:3, name: 'mari', place: 'chennai',  salary: 1, bike:1, Active:true},
  {position:4, name: 'parasi', place: 'sscolony',  salary: 1, bike:1, Active:true},
  {position:5, name: 'prem', place: 'vc',  salary: 1, bike:1, Active:true},
  {position:6, name: 'sankar', place: 'manamadurai',  salary: 1, bike:1, Active:true},
  {position:7, name: 'arun', place: 'samattipuram',  salary: 1, bike:1, Active:true},
  {position:8, name: 'sekar', place: 'nagamalai',  salary: 1, bike:1, Active:true},
]


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-milker',
  templateUrl: './milker.component.html',
  styleUrls: ['./milker.component.css']
})
export class MilkerComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  displayedColumns: string[] = ['position', 'name', 'place', 'salary', 'bike', 'active', 'action']
 dataSource = new MatTableDataSource<any>();
//  dataSourceWithPageSize = new MatTableDataSource<any>();
isLoading = true;
@ViewChild(MatPaginator) paginator!: MatPaginator;

  Milkerform!: FormGroup;
  isEditableNew: boolean = true;
  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.Milkerform = this._formBuilder.group({
      milkerDetails: this._formBuilder.array([])
    });

     this.Milkerform = this.fb.group({
      milkerDetails: this.fb.array(ELEMENT_DATA.map(val => this.fb.group({
                position: new FormControl(val.position),
                name: new FormControl(val.name),
                place: new FormControl(val.place),
                salary: new FormControl(val.salary),
                bike: new FormControl(val.bike),
                active: new FormControl(val.Active),
                action: new FormControl('existingRecord'),
                isEditable: new FormControl(true),
                isNewRow: new FormControl(false),
              })
              )) //end of fb array
            }); // end of form group cretation
    this.isLoading = false;
    this.dataSource = new MatTableDataSource((this.Milkerform.get('milkerDetails') as FormArray).controls);
    this.dataSource.paginator = this.paginator;
   
   

    // const filterPredicate = this.dataSource.filterPredicate;
    //   this.dataSource.filterPredicate = (data: AbstractControl, filter) => {
    //     return filterPredicate.call(this.dataSource, data.value, filter);
    //   }

      //Custom filter according to name column
    // this.dataSource.filterPredicate = (data: {name: string}, filterValue: string) =>
    //   data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
  }
  
  // @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;

  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
  }

  EditSVO(VOFormElement: any, i: number) {
    VOFormElement.get('milkerDetails').at(i).get('isEditable').patchValue(false);
    // this.isEditableNew = true;

  }

  // On click of correct button in table (after click on edit) this method will call
  SaveVO(VOFormElement:any, i:any) {
    console.log(VOFormElement.get('milkerDetails').at(i).get('isEditable'));
    VOFormElement.get('milkerDetails').at(i).get('isEditable').patchValue(true);
  }

  // On click of cancel button in the table (after click on edit) this method will call and reset the previous data
  CancelSVO(VOFormElement:any, i:any) {
    VOFormElement.get('milkerDetails').at(i).get('isEditable').patchValue(true);
  }

  removeRow(milkerform: any, i:any) {
    //  this.Milkerform.get('milkerDetails') milkerform.get('milkerDetails').at(i)
  }

  AddNewRow() {
    const control = this.Milkerform.get('milkerDetails') as FormArray;
    control.insert(0,this.initiateMilkerForm());
    this.dataSource = new MatTableDataSource(control.controls);
    this.dataSource.paginator = this.paginator;
  }

  initiateMilkerForm(): FormGroup {
    return this.fb.group({

      position: new FormControl(1),
      name: new FormControl(''),
      place: new FormControl(''),
      salary: new FormControl(''),
      bike: new FormControl(''),
      active: new FormControl(''),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
    });
  }

}
