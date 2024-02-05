
/**
 * Probability to scceed in the D20 test (with natural 1s being failures and 20s being successes), so Attacks and Death Saves, not Checks
 * 
 * @param {Number} dc DC, must be an Integer.
 * @returns probability to scceed in the D20 test (with natural 1s being failures and 20s being successes).
 */
function pSuccess(dc) {

    if (!Number.isInteger(dc)) {
        return undefined;
    }

    return Math.max(Math.min(1 / 20 + (20 - dc) / 20, 19 / 20), 1 / 20);
}

/**
 * Calculates the wage per person and day.
 * 
 * @param {Number} level 
 */
function wage(level) {
    if (level < 1) {
        return undefined;
    }

    if (level <= 4) {
        return level;
    }

    if (level <= 10) {
        return level * 5;
    }

    if (level <= 16) {
        return level * 20;
    }

    if (level <= 20) {
        return level * 50;
    }

    return undefined;
}