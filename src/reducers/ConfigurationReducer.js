import { payloadIsValidJson, payloadHasValidKeys } from '../validators/configurationValidator';
export const CONFIG_VALID_JSON = 'payloadIsValidJson';
export const CONFIG_VALID_KEYS = 'payloadHasValidKeys';

/**
 * Configuration validation reducer
 * @param {object} state 
 * @param {string} action 
 * @param {object} payload 
 */
export default function ConfigurationReducer(state, action, payload) {
    switch (action) {
        case CONFIG_VALID_JSON:
            if (payloadIsValidJson(payload).response) {
                return {
                    ...state,
                    response: true
                }
            }

            return {
                response: false,
                error: 'Configuration is not valid JSON',
                breakValidation: true
            }
        case CONFIG_VALID_KEYS:
            if (payloadHasValidKeys(payload).response) {
                return {
                    ...state,
                    response: true
                }
            }

            return {
                response: false,
                error: 'Configuration has invalid keys.'
            }
        default:
            console.warn('Invalid action to configuration reducer');
    }
}