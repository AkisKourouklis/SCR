import { IUser } from '../store/actions/auth'

export interface AuthState {
  isLoading: boolean
  token: string
  user: IUser | null
  isAuth: boolean
}
