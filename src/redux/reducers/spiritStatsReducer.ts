import _ from 'lodash';

export interface SpiritStats {
    health: number;
    armor: number;
    magicResistance: number;
}

const SPIRIT_1 = {
    health: 100,
    armor: 50,
    magicResistance: 50
};
const SPIRIT_2 = {health: 69, armor: 77, magicResistance: 7};
const SPIRIT_3 = {health: 88, armor: 17, magicResistance: 27};
const SPIRIT_4 = {health: 47, armor: 98, magicResistance: 35};
const initialState: SpiritStats[] = [SPIRIT_1, SPIRIT_2, SPIRIT_3, SPIRIT_4];

export default function spiritStatsReducer(state = {spirits: initialState}, action) {
    switch (action.type) {
        case 'spiritStats/addSpirit':
            const spirit = action.payload.spirit;
            return {
                ...state,
                spirits: spirit ? state.spirits.push(spirit) : state.spirits
            }
        case 'spiritStats/updateSpiritStats':
            console.error('before: ', state.spirits);
            const spiritStats = action.payload.spiritStats;
            const spiritPlayerIndex = action.payload.spiritPlayerIndex;
            const copyOfSpirits = _.cloneDeep(state.spirits);
            const updatedSpirit = {...copyOfSpirits[spiritPlayerIndex], ...spiritStats};
            copyOfSpirits.splice(spiritPlayerIndex, 1, updatedSpirit)
            console.error(copyOfSpirits);
            return {
                ...state,
                spirits: copyOfSpirits
            }
        default:
            return state
    }
}