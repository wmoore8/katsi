import {IReduxStore} from "../redux-store";
import {SpiritStats} from "../reducers/spiritStatsReducer";

export const getSpiritStatsBySpiritIdSelector = (spiritId) => (state: IReduxStore): SpiritStats => getSpiritStatsForAllSpiritsSelector(state)[spiritId];

export const getSpiritStatsForAllSpiritsSelector = (state: IReduxStore): SpiritStats[] => state.spiritStats.spirits;