import { wsReducer } from './ws/ws.slice';

export function rootReducer()
{
  return {
    ws: wsReducer
  };
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;