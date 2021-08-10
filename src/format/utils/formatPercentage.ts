import { decimalToString } from './decimalToString';
import { formatPercentageDelta } from './formatPercentageDelta';
import { i18n } from '../../utils/i18n';

const APPROXIMATION_THRESHOLD = 1;

export const formatPercentage = (
    headPercentage: number,
    basePercentage: number = headPercentage
) => {
    const delta = headPercentage - basePercentage;

    return i18n(
        Math.abs(delta) > APPROXIMATION_THRESHOLD
            ? '<div title="{{ basePercentage }}%">{{ percentage }}% {{ delta }}</div>'
            : '{{ percentage }}%',
        {
            percentage: decimalToString(headPercentage),
            basePercentage:
                i18n('baseCoverage') + decimalToString(basePercentage),
            delta:
                Math.abs(delta) > APPROXIMATION_THRESHOLD
                    ? formatPercentageDelta(delta)
                    : '',
        }
    );
};
