import { Venue } from './venue';

export class Event {
  public Id: Number;
  public Name: string;
  public Date: Date;
  public Venue: Venue;
  
  constructor() {
    this.Venue = new Venue();
  }

}
