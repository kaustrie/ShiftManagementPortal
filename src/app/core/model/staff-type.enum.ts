import {Enum, EnumValue} from 'ts-enums';

export class StaffType extends EnumValue {
  constructor(name: string) {
    super(name);
  }
}

class StaffTypeEnum extends Enum<StaffType> {
  MANAGER: StaffType = new StaffType('Manager');
  HEAD_USHER: StaffType = new StaffType('Head Usher');
  USHER: StaffType = new StaffType('Usher');
  CUSTODIAN: StaffType = new StaffType('Custodian');

  constructor() {
    super();
    this.initEnum('StaffType');
  }
}
const StaffTypes: StaffTypeEnum = new StaffTypeEnum();
export {StaffTypeEnum, StaffTypes};
