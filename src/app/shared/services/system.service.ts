import { Injectable } from '@angular/core';

import { System } from '../models/system';

@Injectable()
export class SystemService {

	system: System = new System();

	constructor() {}
}