import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';
import { PASSWORD, PROTECTED, TRUE } from './config';

@Component({
  selector: 'app-password-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './password-dialog.component.html',
  styleUrl: './password-dialog.component.scss',
})
export class PasswordDialogComponent {
  form = this.fb.group({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  constructor(
    private mat: MatDialogRef<PasswordDialogComponent>,
    private fb: FormBuilder
  ) {}

  submit(): boolean {
    if (this.password.value === PASSWORD) {
      this.mat.close(true);
      localStorage.setItem(PROTECTED, TRUE);
      return true;
    }

    this.password.setErrors({ incorrect: true });
    return false;
  }

  close(): void {
    this.mat.close(false);
  }

  get password(): FormControl<string> {
    return this.form.controls.password as FormControl<string>;
  }
}
