import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  generatedPassword: string = '';
  passwordLength: number = 12;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;

  generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?/{}[]|';

    let validChars = '';
    if (this.includeUppercase) validChars += uppercaseChars;
    if (this.includeLowercase) validChars += lowercaseChars;
    if (this.includeNumbers) validChars += numberChars;
    if (this.includeSymbols) validChars += symbolChars;

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }

    this.generatedPassword = password;
  }
}
