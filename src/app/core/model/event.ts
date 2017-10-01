import { Venue } from './venue';

export class Event {
  public Id: Number;
  public Date: Date;
  public Venue: Venue;
  
  constructor() {
    this.Venue = new Venue();
  }

}
