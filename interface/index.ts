export interface CharacterInfo {
  name: string;
  surname: string;
  gender: string;
  dob: string;
  occupation: string;
  color: string;
}

export interface Values {
  values: CharacterInfo;
}

export interface Methods {
  handleNext?: any;
  handleBack?: any;
  handleEdit?: any;
}
