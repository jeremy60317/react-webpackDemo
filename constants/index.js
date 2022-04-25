/**
 * 因redux是一個global state 所以每個action命名都應是唯一的
 * 全部acton 集中在這裡，避免檔案分散造成命名衝突
 */

export const FETCH_LIST_API_SAGA = 'FETCH_LIST_API_SAGA'
export const FETCH_LIST_API_SAGA_SUCCESS = 'FETCH_LIST_API_SAGA_SUCCESS'
export const TEST_ACTION_TEXT = 'TEST_ACTION_TEXT'
