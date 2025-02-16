export interface ILoginPayload {
  email: string;
  password: string;
}

export type MutationTrigger = (
  arg: ILoginPayload
) => Promise<{ data?: any; error?: any }>;

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface IIndustryPayload {
  industry: string[];
}

export interface IIndustry {
  id: number;
  name: string;
}
