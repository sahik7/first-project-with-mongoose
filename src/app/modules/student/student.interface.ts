// creating interface
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
};

export type userName = {
  firstName: string;
  lastName: string;
};

export type localGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: userName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyNumber: string;
  bloodGroup?: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: localGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
