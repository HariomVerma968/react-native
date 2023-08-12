import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { commonState } from './store'

export const useAppSelector: TypedUseSelectorHook<commonState> = useSelector
