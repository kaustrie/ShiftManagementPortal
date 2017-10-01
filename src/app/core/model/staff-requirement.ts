import { StaffTypes, StaffType } from './staff-type.enum';

export class StaffRequirement {
  public Id: Number;
  public StaffType: StaffType;

  public blah(){
    this.StaffType = StaffTypes.CUSTODIAN;
  }
}
