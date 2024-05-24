import { Injectable } from '@angular/core';
import { PermissionInterface } from '../models/permission.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor() { }
  permissions: PermissionInterface[] = [
    { name: 'Public', description: 'Everyone can view and edit' },
    { name: 'Protected', description: 'Everyone can view pages, only wiki members users can edit' },
    { name: 'Private', description: 'Only wiki members can view and edit' }
  ]

  getPermissions(): PermissionInterface[] {
    return this.permissions;
  }
}
