import {IReduxStore} from "../redux-store";
import {SpiritStats} from "../reducers/spiritStatsReducer";

export const getSpiritStatsBySpiritId = (spiritId) => (state: IReduxStore): SpiritStats => state.spiritStats.spirits[spiritId];