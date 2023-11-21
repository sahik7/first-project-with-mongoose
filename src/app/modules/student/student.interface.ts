import { Model } from "mongoose";

// creating interface
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
};

export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyNumber: string;
  bloodGroup?: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};





// for creating static
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}

// for creating instance



// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>
// }



// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>
