import BranchModel from "./Branch";

export default interface Unit {
  name: string;
  // date: Date
  code: string;
  branch: BranchModel;
}
