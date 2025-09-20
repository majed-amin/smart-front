import { apiSlice as api } from "./apiSlice";
export const addTagTypes = [] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getShowStaffUsers: build.query<
        GetShowStaffUsersApiResponse,
        GetShowStaffUsersApiArg
      >({
        query: (queryArg) => ({
          url: `/show-staff-users`,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      postCreateStaffUser: build.mutation<
        PostCreateStaffUserApiResponse,
        PostCreateStaffUserApiArg
      >({
        query: (queryArg) => ({
          url: `/create-staff-user`,
          method: "POST",
          body: queryArg.body,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      postUpdateStaffUser: build.mutation<
        PostUpdateStaffUserApiResponse,
        PostUpdateStaffUserApiArg
      >({
        query: (queryArg) => ({
          url: `/update-staff-user`,
          method: "POST",
          body: queryArg.body,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      getDeleteStaffUser: build.query<
        GetDeleteStaffUserApiResponse,
        GetDeleteStaffUserApiArg
      >({
        query: (queryArg) => ({
          url: `/delete-staff-user`,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
          params: {
            user_id: queryArg.userId,
          },
        }),
      }),
      getSearchStaffUser: build.query<
        GetSearchStaffUserApiResponse,
        GetSearchStaffUserApiArg
      >({
        query: (queryArg) => ({
          url: `/search-staff-user`,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
          params: {
            search_value: queryArg.searchValue,
          },
        }),
      }),
      postStaffLogin: build.mutation<
        PostStaffLoginApiResponse,
        PostStaffLoginApiArg
      >({
        query: (queryArg) => ({
          url: `/staff-login`,
          method: "POST",
          body: queryArg.body,
          headers: {
            lang: queryArg.lang,
          },
        }),
      }),
      postChangePassword: build.mutation<
        PostChangePasswordApiResponse,
        PostChangePasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/change-password`,
          method: "POST",
          body: queryArg.body,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      postCheckOldPassword: build.mutation<
        PostCheckOldPasswordApiResponse,
        PostCheckOldPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/check-old-password`,
          method: "POST",
          body: queryArg.body,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      postCheckStaffUserExists: build.mutation<
        PostCheckStaffUserExistsApiResponse,
        PostCheckStaffUserExistsApiArg
      >({
        query: (queryArg) => ({
          url: `/check-staff-user-exists`,
          method: "POST",
          body: queryArg.body,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      postForgetPassword: build.mutation<
        PostForgetPasswordApiResponse,
        PostForgetPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/forget-password`,
          method: "POST",
          body: queryArg.body,
          headers: {
            lang: queryArg.lang,
          },
        }),
      }),
      postVerifyStaffUserOtp: build.mutation<
        PostVerifyStaffUserOtpApiResponse,
        PostVerifyStaffUserOtpApiArg
      >({
        query: (queryArg) => ({
          url: `/verify-staff-user-otp`,
          method: "POST",
          body: queryArg.body,
          headers: {
            lang: queryArg.lang,
          },
        }),
      }),
      postResetStaffUserPass: build.mutation<
        PostResetStaffUserPassApiResponse,
        PostResetStaffUserPassApiArg
      >({
        query: (queryArg) => ({
          url: `/reset-staff-user-pass`,
          method: "POST",
          body: queryArg.body,
          headers: {
            lang: queryArg.lang,
          },
        }),
      }),
      postUpdateStaffToken: build.mutation<
        PostUpdateStaffTokenApiResponse,
        PostUpdateStaffTokenApiArg
      >({
        query: (queryArg) => ({
          url: `/update-staff-token`,
          method: "POST",
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      getStaffUserInfo: build.query<
        GetStaffUserInfoApiResponse,
        GetStaffUserInfoApiArg
      >({
        query: (queryArg) => ({
          url: `/staff-user-info`,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
          params: {
            user_id: queryArg.userId,
          },
        }),
      }),
      getStaffJobs: build.query<GetStaffJobsApiResponse, GetStaffJobsApiArg>({
        query: (queryArg) => ({
          url: `/staff-jobs`,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      postAddStaffJobs: build.mutation<
        PostAddStaffJobsApiResponse,
        PostAddStaffJobsApiArg
      >({
        query: (queryArg) => ({
          url: `/add-staff-jobs`,
          method: "POST",
          body: queryArg.body,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      postEditStaffJobs: build.mutation<
        PostEditStaffJobsApiResponse,
        PostEditStaffJobsApiArg
      >({
        query: (queryArg) => ({
          url: `/edit-staff-jobs`,
          method: "POST",
          body: queryArg.body,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      getDeleteStaffJobs: build.query<
        GetDeleteStaffJobsApiResponse,
        GetDeleteStaffJobsApiArg
      >({
        query: (queryArg) => ({
          url: `/delete-staff-jobs`,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
          params: {
            job_id: queryArg.jobId,
          },
        }),
      }),
      getSearchStaffJobs: build.query<
        GetSearchStaffJobsApiResponse,
        GetSearchStaffJobsApiArg
      >({
        query: (queryArg) => ({
          url: `/search-staff-jobs`,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
          params: {
            search_value: queryArg.searchValue,
          },
        }),
      }),
      getStaffJobsSelect: build.query<
        GetStaffJobsSelectApiResponse,
        GetStaffJobsSelectApiArg
      >({
        query: (queryArg) => ({
          url: `/staff-jobs-select`,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
        }),
      }),
      getStaffJobsInfo: build.query<
        GetStaffJobsInfoApiResponse,
        GetStaffJobsInfoApiArg
      >({
        query: (queryArg) => ({
          url: `/staff-jobs-info`,
          headers: {
            Authorization: queryArg.authorization,
            lang: queryArg.lang,
          },
          params: {
            job_id: queryArg.jobId,
          },
        }),
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as generatedApi };
export type GetShowStaffUsersApiResponse = unknown;
export type GetShowStaffUsersApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
};
export type PostCreateStaffUserApiResponse = unknown;
export type PostCreateStaffUserApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    user_fullname_en?: string;
    user_fullname_ar?: string;
    user_username?: string;
    user_type?: "super_admin" | "admin" | "normal";
    job_id?: number;
    user_identy_number?: string;
    user_identy_expire?: string;
    age?: number;
    gender?: "male" | "female";
    salary?: number;
    hire_date?: string;
    nationality?: string;
    user_phone_code?: string;
    user_phone?: string;
    user_address?: string;
    user_identy_image?: Blob;
    user_photo?: Blob;
  };
};
export type PostUpdateStaffUserApiResponse = unknown;
export type PostUpdateStaffUserApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    user_id?: number;
    user_fullname_en?: string;
    user_fullname_ar?: string;
    user_username?: string;
    user_type?: "super_admin" | "admin" | "normal";
    job_id?: number;
    user_identy_number?: string;
    user_identy_expire?: string;
    age?: number;
    gender?: "male" | "female";
    salary?: number;
    hire_date?: string;
    nationality?: string;
    user_phone_code?: string;
    user_phone?: string;
    user_address?: string;
    user_identy_image?: Blob;
    user_photo?: Blob;
  };
};
export type GetDeleteStaffUserApiResponse = unknown;
export type GetDeleteStaffUserApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  /** uset_id who deleted */
  userId: number;
};
export type GetSearchStaffUserApiResponse = unknown;
export type GetSearchStaffUserApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  /** The keyword to search by username or fullname_en */
  searchValue?: string;
};
export type PostStaffLoginApiResponse = unknown;
export type PostStaffLoginApiArg = {
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    user_username?: string;
    user_password?: string;
  };
};
export type PostChangePasswordApiResponse = unknown;
export type PostChangePasswordApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    new_password?: string;
  };
};
export type PostCheckOldPasswordApiResponse = unknown;
export type PostCheckOldPasswordApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    old_password?: string;
  };
};
export type PostCheckStaffUserExistsApiResponse = unknown;
export type PostCheckStaffUserExistsApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    user_username?: string;
  };
};
export type PostForgetPasswordApiResponse = unknown;
export type PostForgetPasswordApiArg = {
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    user_username?: string;
    user_password?: string;
  };
};
export type PostVerifyStaffUserOtpApiResponse = unknown;
export type PostVerifyStaffUserOtpApiArg = {
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    user_id?: number;
    otp?: string;
  };
};
export type PostResetStaffUserPassApiResponse = unknown;
export type PostResetStaffUserPassApiArg = {
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    user_id?: number;
    new_password?: string;
  };
};
export type PostUpdateStaffTokenApiResponse = unknown;
export type PostUpdateStaffTokenApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
};
export type GetStaffUserInfoApiResponse = unknown;
export type GetStaffUserInfoApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  /** uset_id who get info */
  userId: number;
};
export type GetStaffJobsApiResponse = unknown;
export type GetStaffJobsApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
};
export type PostAddStaffJobsApiResponse = unknown;
export type PostAddStaffJobsApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    job_title_en?: string;
    job_title_ar?: string;
  };
};
export type PostEditStaffJobsApiResponse = unknown;
export type PostEditStaffJobsApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  body: {
    job_title_en?: string;
    job_title_ar?: string;
    job_id?: number;
  };
};
export type GetDeleteStaffJobsApiResponse = unknown;
export type GetDeleteStaffJobsApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  /** job_id that deleted */
  jobId: number;
};
export type GetSearchStaffJobsApiResponse = unknown;
export type GetSearchStaffJobsApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  /** The keyword to search by username or fullname_en */
  searchValue?: string;
};
export type GetStaffJobsSelectApiResponse = unknown;
export type GetStaffJobsSelectApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
};
export type GetStaffJobsInfoApiResponse = unknown;
export type GetStaffJobsInfoApiArg = {
  /** Bearer token for authentication */
  authorization: string;
  /** Language code for localization (e.g., 'en' for English, 'ar' for Arabic) */
  lang: string;
  /** job_id */
  jobId: number;
};
export const {
  useGetShowStaffUsersQuery,
  useLazyGetShowStaffUsersQuery,
  usePostCreateStaffUserMutation,
  usePostUpdateStaffUserMutation,
  useGetDeleteStaffUserQuery,
  useLazyGetDeleteStaffUserQuery,
  useGetSearchStaffUserQuery,
  useLazyGetSearchStaffUserQuery,
  usePostStaffLoginMutation,
  usePostChangePasswordMutation,
  usePostCheckOldPasswordMutation,
  usePostCheckStaffUserExistsMutation,
  usePostForgetPasswordMutation,
  usePostVerifyStaffUserOtpMutation,
  usePostResetStaffUserPassMutation,
  usePostUpdateStaffTokenMutation,
  useGetStaffUserInfoQuery,
  useLazyGetStaffUserInfoQuery,
  useGetStaffJobsQuery,
  useLazyGetStaffJobsQuery,
  usePostAddStaffJobsMutation,
  usePostEditStaffJobsMutation,
  useGetDeleteStaffJobsQuery,
  useLazyGetDeleteStaffJobsQuery,
  useGetSearchStaffJobsQuery,
  useLazyGetSearchStaffJobsQuery,
  useGetStaffJobsSelectQuery,
  useLazyGetStaffJobsSelectQuery,
  useGetStaffJobsInfoQuery,
  useLazyGetStaffJobsInfoQuery,
} = injectedRtkApi;
